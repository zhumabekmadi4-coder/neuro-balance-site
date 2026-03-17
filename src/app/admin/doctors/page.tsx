"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Plus, Trash2, Save, Upload } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
  specialties: string[];
  bio: string;
  sort_order: number;
}

function generateId(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 30) + "-" + Date.now().toString(36);
}

export default function DoctorsAdmin() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [uploading, setUploading] = useState<string | null>(null);

  const loadDoctors = useCallback(() => {
    fetch("/api/doctors")
      .then((r) => r.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadDoctors();
  }, [loadDoctors]);

  async function handleSave(doctor: Doctor, isNew: boolean) {
    setSaving(doctor.id);
    await fetch("/api/doctors", {
      method: isNew ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doctor),
    });
    setSaving(null);
    loadDoctors();
  }

  async function handleDelete(id: string) {
    if (!confirm("Удалить врача?")) return;
    await fetch("/api/doctors", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    loadDoctors();
  }

  async function handleUploadImage(doctorId: string, file: File) {
    setUploading(doctorId);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    const { url } = await res.json();
    setDoctors((prev) =>
      prev.map((d) => (d.id === doctorId ? { ...d, image: url } : d))
    );
    setUploading(null);
  }

  function addDoctor() {
    const newDoctor: Doctor = {
      id: generateId("doctor"),
      name: "",
      role: "",
      image: "",
      experience: "",
      specialties: [],
      bio: "",
      sort_order: doctors.length + 1,
    };
    setDoctors([...doctors, newDoctor]);
  }

  function updateDoctor(id: string, field: keyof Doctor, value: unknown) {
    setDoctors((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [field]: value } : d))
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div>
          <Link
            href="/admin"
            className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </Link>
          <h1 className="text-xl font-bold">Врачи</h1>
        </div>
        <button
          onClick={addDoctor}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          Добавить врача
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {loading ? (
          <div className="text-zinc-500 text-center py-20">Загрузка...</div>
        ) : (
          <div className="space-y-6">
            {doctors.map((doctor) => {
              const isNew = !doctor.name;
              return (
                <div
                  key={doctor.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
                >
                  <div className="flex gap-6">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-40 bg-zinc-800 rounded-lg overflow-hidden relative group">
                        {doctor.image ? (
                          <Image
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-600 text-4xl">
                            ?
                          </div>
                        )}
                        <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity">
                          <Upload className="w-6 h-6 text-white" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleUploadImage(doctor.id, file);
                            }}
                          />
                        </label>
                        {uploading === doctor.id && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Fields */}
                    <div className="flex-1 space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-zinc-400 mb-1">
                            Имя
                          </label>
                          <input
                            type="text"
                            value={doctor.name}
                            onChange={(e) =>
                              updateDoctor(doctor.id, "name", e.target.value)
                            }
                            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ФИО врача"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-zinc-400 mb-1">
                            Роль
                          </label>
                          <input
                            type="text"
                            value={doctor.role}
                            onChange={(e) =>
                              updateDoctor(doctor.id, "role", e.target.value)
                            }
                            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Специализация"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-zinc-400 mb-1">
                            Опыт
                          </label>
                          <input
                            type="text"
                            value={doctor.experience}
                            onChange={(e) =>
                              updateDoctor(
                                doctor.id,
                                "experience",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="5 лет"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-zinc-400 mb-1">
                            Порядок
                          </label>
                          <input
                            type="number"
                            value={doctor.sort_order}
                            onChange={(e) =>
                              updateDoctor(
                                doctor.id,
                                "sort_order",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-zinc-400 mb-1">
                          Специальности (через запятую)
                        </label>
                        <input
                          type="text"
                          value={
                            Array.isArray(doctor.specialties)
                              ? doctor.specialties.join(", ")
                              : ""
                          }
                          onChange={(e) =>
                            updateDoctor(
                              doctor.id,
                              "specialties",
                              e.target.value
                                .split(",")
                                .map((s) => s.trim())
                                .filter(Boolean)
                            )
                          }
                          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="HILT-терапия, SIS-терапия"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-zinc-400 mb-1">
                          Описание
                        </label>
                        <textarea
                          value={doctor.bio}
                          onChange={(e) =>
                            updateDoctor(doctor.id, "bio", e.target.value)
                          }
                          rows={2}
                          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Краткое описание"
                        />
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => handleSave(doctor, isNew)}
                          disabled={saving === doctor.id}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          <Save className="w-4 h-4" />
                          {saving === doctor.id
                            ? "Сохранение..."
                            : "Сохранить"}
                        </button>
                        <button
                          onClick={() => handleDelete(doctor.id)}
                          className="flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-zinc-800 text-sm rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Удалить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

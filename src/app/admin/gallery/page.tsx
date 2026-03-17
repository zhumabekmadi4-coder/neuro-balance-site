"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Trash2, Upload, GripVertical, X } from "lucide-react";

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  sort_order: number;
}

export default function GalleryAdmin() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [dragItem, setDragItem] = useState<number | null>(null);
  const [dragOverItem, setDragOverItem] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadImages = useCallback(() => {
    fetch("/api/gallery")
      .then((r) => r.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  async function uploadFiles(files: FileList | File[]) {
    setUploading(true);
    const fileArray = Array.from(files);

    for (const file of fileArray) {
      if (!file.type.startsWith("image/")) continue;

      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const { url } = await uploadRes.json();

      const id = "img-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          url,
          alt: file.name.replace(/\.[^.]+$/, ""),
          sort_order: images.length + fileArray.indexOf(file) + 1,
        }),
      });
    }

    setUploading(false);
    loadImages();
  }

  async function handleDelete(image: GalleryImage) {
    if (!confirm("Удалить фото?")) return;

    // Delete from blob if it's a blob URL
    if (image.url.includes("blob.vercel-storage.com")) {
      await fetch("/api/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: image.url }),
      });
    }

    await fetch("/api/gallery", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: image.id }),
    });

    loadImages();
  }

  function handleDragStart(index: number) {
    setDragItem(index);
  }

  function handleDragEnter(index: number) {
    setDragOverItem(index);
  }

  async function handleDragEnd() {
    if (dragItem === null || dragOverItem === null || dragItem === dragOverItem) {
      setDragItem(null);
      setDragOverItem(null);
      return;
    }

    const newImages = [...images];
    const dragged = newImages.splice(dragItem, 1)[0];
    newImages.splice(dragOverItem, 0, dragged);

    // Update sort orders
    const updated = newImages.map((img, i) => ({ ...img, sort_order: i + 1 }));
    setImages(updated);
    setDragItem(null);
    setDragOverItem(null);

    // Save new order
    for (const img of updated) {
      await fetch("/api/gallery", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(img),
      });
    }
  }

  function handleDropZone(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      uploadFiles(e.dataTransfer.files);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 px-6 py-4">
        <Link
          href="/admin"
          className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад
        </Link>
        <h1 className="text-xl font-bold">Галерея</h1>
        <p className="text-zinc-500 text-sm mt-1">
          Перетащите фото для загрузки или изменения порядка
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Upload Drop Zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDropZone}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-8 mb-8 text-center cursor-pointer transition-all ${
            dragOver
              ? "border-blue-500 bg-blue-500/10"
              : "border-zinc-700 hover:border-zinc-500 bg-zinc-900/50"
          }`}
        >
          <Upload
            className={`w-10 h-10 mx-auto mb-3 ${
              dragOver ? "text-blue-400" : "text-zinc-500"
            }`}
          />
          <p className="text-zinc-300 font-medium">
            {uploading
              ? "Загрузка..."
              : "Перетащите фото сюда или нажмите для выбора"}
          </p>
          <p className="text-zinc-500 text-sm mt-1">
            JPG, PNG, WebP. Можно несколько файлов сразу.
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              if (e.target.files) uploadFiles(e.target.files);
            }}
          />
          {uploading && (
            <div className="mt-4">
              <div className="w-48 h-1.5 bg-zinc-800 rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full animate-pulse w-2/3" />
              </div>
            </div>
          )}
        </div>

        {/* Image Grid */}
        {loading ? (
          <div className="text-zinc-500 text-center py-20">Загрузка...</div>
        ) : images.length === 0 ? (
          <div className="text-zinc-500 text-center py-20">
            Нет фотографий. Загрузите первые фото выше.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragEnter={() => handleDragEnter(index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => e.preventDefault()}
                className={`group relative aspect-square bg-zinc-800 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-all ${
                  dragItem === index ? "opacity-50 scale-95" : ""
                } ${
                  dragOverItem === index && dragItem !== null
                    ? "ring-2 ring-blue-500"
                    : ""
                }`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors">
                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <GripVertical className="w-5 h-5 text-white/70" />
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(image);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

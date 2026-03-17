"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

interface ContentItem {
  id: string;
  section: string;
  key: string;
  value: string;
}

const SECTION_LABELS: Record<string, string> = {
  hero: "Главный экран (Hero)",
  about: "О клинике",
};

const KEY_LABELS: Record<string, string> = {
  title: "Заголовок",
  subtitle: "Подзаголовок",
  description: "Описание",
};

export default function ContentAdmin() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      });
  }, []);

  async function handleSave(item: ContentItem) {
    setSaving(item.id);
    await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    setSaving(null);
  }

  function updateValue(id: string, value: string) {
    setContent((prev) =>
      prev.map((c) => (c.id === id ? { ...c, value } : c))
    );
  }

  // Group by section
  const sections = content.reduce(
    (acc, item) => {
      if (!acc[item.section]) acc[item.section] = [];
      acc[item.section].push(item);
      return acc;
    },
    {} as Record<string, ContentItem[]>
  );

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
        <h1 className="text-xl font-bold">Контент страницы</h1>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        {loading ? (
          <div className="text-zinc-500 text-center py-20">Загрузка...</div>
        ) : (
          <div className="space-y-10">
            {Object.entries(sections).map(([section, items]) => (
              <div key={section}>
                <h2 className="text-lg font-semibold mb-4 text-zinc-200">
                  {SECTION_LABELS[section] || section}
                </h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
                    >
                      <label className="block text-sm font-medium text-zinc-400 mb-2">
                        {KEY_LABELS[item.key] || item.key}
                      </label>
                      {item.value.length > 80 ? (
                        <textarea
                          value={item.value}
                          onChange={(e) =>
                            updateValue(item.id, e.target.value)
                          }
                          rows={4}
                          className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <input
                          type="text"
                          value={item.value}
                          onChange={(e) =>
                            updateValue(item.id, e.target.value)
                          }
                          className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      )}
                      <button
                        onClick={() => handleSave(item)}
                        disabled={saving === item.id}
                        className="mt-3 flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        {saving === item.id ? "Сохранение..." : "Сохранить"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

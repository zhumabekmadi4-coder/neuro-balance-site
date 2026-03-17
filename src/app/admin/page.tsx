"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText, Users, ImageIcon, LogOut, Settings } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  async function handleInit() {
    const secret = prompt("Введите секрет инициализации:");
    if (!secret) return;
    const res = await fetch("/api/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret }),
    });
    const data = await res.json();
    alert(data.message || data.error);
  }

  const cards = [
    {
      title: "Контент страницы",
      description: "Тексты hero, about и других секций",
      href: "/admin/content",
      icon: FileText,
      color: "bg-blue-500/10 text-blue-400",
    },
    {
      title: "Врачи",
      description: "Управление командой врачей",
      href: "/admin/doctors",
      icon: Users,
      color: "bg-emerald-500/10 text-emerald-400",
    },
    {
      title: "Галерея",
      description: "Фотографии клиники",
      href: "/admin/gallery",
      icon: ImageIcon,
      color: "bg-purple-500/10 text-purple-400",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Neuro Balance</h1>
          <p className="text-zinc-500 text-sm">Панель управления</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleInit}
            className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <Settings className="w-4 h-4" />
            Инициализация БД
          </button>
          <Link
            href="/"
            className="px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            На сайт
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Выйти
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">Управление сайтом</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-all hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center mb-4`}
              >
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
              <p className="text-zinc-400 text-sm">{card.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

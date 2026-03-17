import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { secret } = await request.json();

  // Only allow init with the correct secret
  if (secret !== (process.env.INIT_SECRET || "init-neurobalance-2024")) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 403 });
  }

  // Create tables
  await sql`
    CREATE TABLE IF NOT EXISTS site_content (
      id TEXT PRIMARY KEY,
      section TEXT NOT NULL,
      key TEXT NOT NULL,
      value TEXT NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW(),
      UNIQUE(section, key)
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS doctors (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      image TEXT NOT NULL,
      experience TEXT NOT NULL,
      specialties TEXT[] NOT NULL,
      bio TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS gallery_images (
      id TEXT PRIMARY KEY,
      url TEXT NOT NULL,
      alt TEXT DEFAULT '',
      sort_order INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS admin_users (
      id TEXT PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  // Create default admin user
  const hash = await bcrypt.hash("admin123", 10);
  await sql`
    INSERT INTO admin_users (id, username, password_hash)
    VALUES ('admin-1', 'admin', ${hash})
    ON CONFLICT (username) DO NOTHING
  `;

  // Seed default content
  const defaults = [
    { section: "hero", key: "title", value: "Жизнь без боли в спине и суставах" },
    { section: "hero", key: "subtitle", value: "Современные безоперационные методы лечения позвоночника и суставов в Астане" },
    { section: "about", key: "title", value: "Профессиональный подход к здоровью спины" },
    { section: "about", key: "description", value: "Мы используем передовые технологии и научно обоснованные методики для лечения заболеваний позвоночника и суставов без операций." },
  ];

  for (const d of defaults) {
    await sql`
      INSERT INTO site_content (id, section, key, value)
      VALUES (${d.section + '-' + d.key}, ${d.section}, ${d.key}, ${d.value})
      ON CONFLICT (section, key) DO NOTHING
    `;
  }

  // Seed doctors
  const doctors = [
    { id: "aiman-adilbekovna", name: "Айман Адильбековна", role: "Врач-невролог", image: "/images/doctors/aiman.webp", experience: "5 лет", specialties: ["Неврология", "Диагностика", "Реабилитация"], bio: "Специализируется на диагностике и лечении неврологических заболеваний.", sort_order: 1 },
    { id: "asel-kairollaevna", name: "Асель Кайроллаевна", role: "Физиотерапевт", image: "/images/doctors/asel.webp", experience: "4 года", specialties: ["HILT-терапия", "SIS-терапия", "Аппаратная реабилитация"], bio: "Эксперт по современной аппаратной физиотерапии.", sort_order: 2 },
    { id: "kaisar-kuanyshuly", name: "Кайсар Куанышулы", role: "Травматолог-ортопед", image: "/images/doctors/kaisar.webp", experience: "6 лет", specialties: ["Спортивные травмы", "Кинезиотейпирование", "PRP-терапия"], bio: "Современный подход к лечению суставов.", sort_order: 3 },
    { id: "madi-mukhtaruly", name: "Мади Мухтарулы", role: "Врач-реабилитолог", image: "/images/doctors/madi.webp", experience: "3 года", specialties: ["ЛФК", "Коррекция осанки", "Миофасциальный релиз"], bio: "Сертифицированный инструктор по лечебной физкультуре.", sort_order: 4 },
  ];

  for (const d of doctors) {
    await sql`
      INSERT INTO doctors (id, name, role, image, experience, specialties, bio, sort_order)
      VALUES (${d.id}, ${d.name}, ${d.role}, ${d.image}, ${d.experience}, ${`{${d.specialties.join(",")}}`}, ${d.bio}, ${d.sort_order})
      ON CONFLICT (id) DO NOTHING
    `;
  }

  // Seed gallery images
  for (let i = 1; i <= 34; i++) {
    const num = String(i).padStart(2, "0");
    await sql`
      INSERT INTO gallery_images (id, url, alt, sort_order)
      VALUES (${"gallery-" + num}, ${"/images/gallery/gallery-" + num + ".webp"}, ${"Фото клиники " + i}, ${i})
      ON CONFLICT (id) DO NOTHING
    `;
  }

  return NextResponse.json({ success: true, message: "Database initialized" });
}

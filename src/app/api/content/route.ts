import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get("section");

  if (section) {
    const { rows } = await sql`
      SELECT * FROM site_content WHERE section = ${section} ORDER BY key
    `;
    return NextResponse.json(rows);
  }

  const { rows } = await sql`SELECT * FROM site_content ORDER BY section, key`;
  return NextResponse.json(rows);
}

export async function PUT(request: Request) {
  const { id, section, key, value } = await request.json();

  await sql`
    INSERT INTO site_content (id, section, key, value, updated_at)
    VALUES (${id || section + "-" + key}, ${section}, ${key}, ${value}, NOW())
    ON CONFLICT (section, key) DO UPDATE SET value = ${value}, updated_at = NOW()
  `;

  return NextResponse.json({ success: true });
}

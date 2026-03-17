import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  const { rows } = await sql`SELECT * FROM gallery_images ORDER BY sort_order`;
  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  const { id, url, alt, sort_order } = await request.json();

  await sql`
    INSERT INTO gallery_images (id, url, alt, sort_order)
    VALUES (${id}, ${url}, ${alt || ""}, ${sort_order || 0})
  `;

  return NextResponse.json({ success: true });
}

export async function PUT(request: Request) {
  const { id, url, alt, sort_order } = await request.json();

  await sql`
    UPDATE gallery_images SET url = ${url}, alt = ${alt || ""}, sort_order = ${sort_order || 0}
    WHERE id = ${id}
  `;

  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await sql`DELETE FROM gallery_images WHERE id = ${id}`;
  return NextResponse.json({ success: true });
}

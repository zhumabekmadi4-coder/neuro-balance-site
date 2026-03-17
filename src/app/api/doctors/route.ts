import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  const { rows } = await sql`SELECT * FROM doctors ORDER BY sort_order`;
  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  const { id, name, role, image, experience, specialties, bio, sort_order } =
    await request.json();

  await sql`
    INSERT INTO doctors (id, name, role, image, experience, specialties, bio, sort_order)
    VALUES (${id}, ${name}, ${role}, ${image}, ${experience}, ${specialties}, ${bio}, ${sort_order || 0})
  `;

  return NextResponse.json({ success: true });
}

export async function PUT(request: Request) {
  const { id, name, role, image, experience, specialties, bio, sort_order } =
    await request.json();

  await sql`
    UPDATE doctors
    SET name = ${name}, role = ${role}, image = ${image},
        experience = ${experience}, specialties = ${specialties},
        bio = ${bio}, sort_order = ${sort_order || 0}
    WHERE id = ${id}
  `;

  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await sql`DELETE FROM doctors WHERE id = ${id}`;
  return NextResponse.json({ success: true });
}

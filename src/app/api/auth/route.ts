import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const { rows } = await sql`
    SELECT * FROM admin_users WHERE username = ${username}
  `;

  if (rows.length === 0) {
    return NextResponse.json({ error: "Неверные данные" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, rows[0].password_hash);
  if (!valid) {
    return NextResponse.json({ error: "Неверные данные" }, { status: 401 });
  }

  const token = await createToken(rows[0].id);

  const response = NextResponse.json({ success: true });
  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete("admin_token");
  return response;
}

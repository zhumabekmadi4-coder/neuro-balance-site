import { NextResponse } from "next/server";
import { writeFile, mkdir, unlink } from "fs/promises";
import path from "path";

// Use Vercel Blob if configured, otherwise save locally
async function uploadWithBlob(file: File) {
  const { put } = await import("@vercel/blob");
  const blob = await put(`neurobalance/${Date.now()}-${file.name}`, file, {
    access: "public",
  });
  return blob.url;
}

async function uploadLocally(file: File) {
  const uploadDir = path.join(process.cwd(), "public", "images", "uploads");
  await mkdir(uploadDir, { recursive: true });

  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
  const filePath = path.join(uploadDir, fileName);

  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(filePath, buffer);

  return `/images/uploads/${fileName}`;
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  try {
    let url: string;

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      url = await uploadWithBlob(file);
    } else {
      url = await uploadLocally(file);
    }

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const { url } = await request.json();

  try {
    if (url && url.includes("blob.vercel-storage.com")) {
      const { del } = await import("@vercel/blob");
      await del(url);
    } else if (url && url.startsWith("/images/uploads/")) {
      const filePath = path.join(process.cwd(), "public", url);
      await unlink(filePath).catch(() => {});
    }
  } catch {
    // Ignore delete errors
  }

  return NextResponse.json({ success: true });
}

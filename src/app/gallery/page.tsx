"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

// Fallback to static images if DB is not available
const staticImages: GalleryImage[] = Array.from({ length: 34 }, (_, i) => ({
  id: `gallery-${String(i + 1).padStart(2, "0")}`,
  url: `/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.webp`,
  alt: `Фото клиники ${i + 1}`,
}));

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>(staticImages);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data) => {
        if (data.length > 0) setImages(data);
      })
      .catch(() => {
        // Use static fallback
      });
  }, []);

  function openLightbox(index: number) {
    setLightbox(index);
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightbox(null);
    document.body.style.overflow = "";
  }

  function navigate(dir: -1 | 1) {
    if (lightbox === null) return;
    const next = lightbox + dir;
    if (next >= 0 && next < images.length) {
      setLightbox(next);
    }
  }

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (lightbox === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  return (
    <div className="min-h-[100dvh] bg-background font-sans selection:bg-primary/20">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-12">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-8 pl-0 hover:pl-2 transition-all gap-2 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Вернуться на главную
            </Button>
          </Link>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Галерея
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Фотографии нашей клиники, оборудования и процедур.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="container mx-auto px-4">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {lightbox > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {lightbox < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div
            className="max-w-[90vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].url}
              alt={images[lightbox].alt}
              width={1200}
              height={900}
              className="max-w-full max-h-[90vh] object-contain"
              unoptimized
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

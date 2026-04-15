"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

interface Props {
  images: GalleryImage[];
}

export function GalleryLightbox({ images }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightbox(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const navigate = useCallback(
    (dir: -1 | 1) => {
      setLightbox((current) => {
        if (current === null) return current;
        const next = current + dir;
        if (next < 0 || next >= images.length) return current;
        return next;
      });
    },
    [images.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, navigate]);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => openLightbox(index)}
            className="break-inside-avoid cursor-pointer group block w-full text-left"
            aria-label={`Открыть: ${image.alt}`}
          >
            <div className="relative overflow-hidden rounded-xl bg-muted">
              <Image
                src={image.url}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фото"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
            aria-label="Закрыть"
            type="button"
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
              aria-label="Предыдущее фото"
              type="button"
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
              aria-label="Следующее фото"
              type="button"
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
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

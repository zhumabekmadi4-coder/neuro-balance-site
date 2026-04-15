export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = Array.from({ length: 34 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    id: `gallery-${num}`,
    url: `/images/gallery/gallery-${num}.webp`,
    alt: `Клиника Neuro Balance — фото ${i + 1}`,
  };
});

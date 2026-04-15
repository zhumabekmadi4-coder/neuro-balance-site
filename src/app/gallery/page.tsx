import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Галерея клиники",
  description:
    "Фотографии клиники Neuro Balance в Астане: процедурные кабинеты, оборудование HILT-лазера, SIS-магнита, ударно-волновой терапии, команда врачей.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Галерея клиники Neuro Balance",
    description: "Фото процедурных кабинетов и оборудования клиники в Астане.",
    url: "/gallery",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-[100dvh] bg-background font-sans selection:bg-primary/20">
      <Header />

      <main id="main-content" className="pt-32 pb-20">
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

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
            Галерея клиники
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Процедурные кабинеты, оборудование и команда клиники Neuro Balance в Астане.
          </p>
        </div>

        <div className="container mx-auto px-4">
          <GalleryLightbox images={galleryImages} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

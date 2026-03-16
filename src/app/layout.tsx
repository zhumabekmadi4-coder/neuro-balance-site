import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScrolling } from "@/components/SmoothScrolling";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "cyrillic"] });

const siteUrl = "https://neurobalance-web.netlify.app";

export const metadata: Metadata = {
  title: "Neuro Balance — Клиника лечения спины и суставов в Астане",
  description: "Лечение позвоночника и суставов без операций. HILT-лазер, SIS-магнит, ударно-волновая терапия, ИИ-диагностика. Астана, пр. Кабанбай батыра, 28.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Neuro Balance — Клиника лечения спины и суставов в Астане",
    description: "Лечение позвоночника и суставов без операций. HILT-лазер, SIS-магнит, ударно-волновая терапия, ИИ-диагностика осанки.",
    siteName: "Neuro Balance",
    locale: "ru_RU",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Neuro Balance — Клиника лечения спины и суставов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuro Balance — Клиника лечения спины и суставов",
    description: "Лечение позвоночника и суставов без операций в Астане.",
    images: ["/images/og-image.webp"],
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Neuro Balance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#0d2018" />
      </head>
      <body className={`${manrope.className} antialiased`}>
        <SmoothScrolling>
          {children}
          <MobileStickyCTA />
          <Toaster />
        </SmoothScrolling>
      </body>
    </html>
  );
}

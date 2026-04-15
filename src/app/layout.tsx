import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SmoothScrolling } from "@/components/SmoothScrolling";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "cyrillic"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.neuro-balance.kz";
const yandexVerification = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION;

export const viewport: Viewport = {
  themeColor: "#0d2018",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Neuro Balance — клиника лечения спины и суставов в Астане",
    template: "%s | Neuro Balance",
  },
  description:
    "Безоперационное лечение позвоночника и суставов в Астане. HILT-лазер, SIS-магнит, ударно-волновая терапия, ИИ-диагностика осанки. Пр. Кабанбай батыра, 28.",
  applicationName: "Neuro Balance",
  authors: [{ name: "Neuro Balance" }],
  keywords: [
    "лечение спины Астана",
    "лечение суставов Астана",
    "HILT лазер",
    "ударно-волновая терапия",
    "клиника без операций",
    "физиотерапия Астана",
    "лечение грыжи позвоночника",
    "лечение остеохондроза",
    "безоперационное лечение",
    "Neuro Balance",
  ],
  alternates: {
    canonical: "/",
    languages: { "ru-RU": "/" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Neuro Balance — клиника лечения спины и суставов в Астане",
    description:
      "Безоперационное лечение позвоночника и суставов: HILT-лазер, SIS-магнит, УВТ, ИИ-диагностика. Астана, пр. Кабанбай батыра, 28.",
    siteName: "Neuro Balance",
    locale: "ru_RU",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Neuro Balance — клиника лечения спины и суставов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuro Balance — клиника лечения спины и суставов",
    description: "Безоперационное лечение позвоночника и суставов в Астане.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    ...(yandexVerification ? { yandex: yandexVerification } : {}),
    ...(googleVerification ? { google: googleVerification } : {}),
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
      <body className={`${manrope.className} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
        >
          Перейти к содержимому
        </a>
        <SmoothScrolling>
          {children}
          <MobileStickyCTA />
        </SmoothScrolling>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}

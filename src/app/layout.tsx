import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Neuro Balance - Клиника лечения спины и суставов",
  description: "Лечение позвоночника и суставов без операций. HILT-лазер, SIS-магнит, ИИ-диагностика.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

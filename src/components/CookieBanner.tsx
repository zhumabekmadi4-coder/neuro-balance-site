"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "nb-cookie-consent";

const subscribe = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getSnapshot = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return "accepted";
  }
};

const getServerSnapshot = () => null;

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const visible = consent === null;

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
      window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
    } catch {
      // ignore
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление о cookie"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl rounded-2xl border border-primary/30 bg-background/95 backdrop-blur-md shadow-2xl shadow-primary/10 p-4 md:p-5"
    >
      <div className="flex items-start gap-3">
        <p className="text-sm text-foreground/90 leading-relaxed flex-1">
          Мы используем cookies для работы сайта и аналитики посещаемости. Продолжая пользоваться сайтом,
          вы соглашаетесь с нашей{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Политикой конфиденциальности
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          aria-label="Закрыть"
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-3 flex justify-end">
        <Button onClick={accept} size="sm" className="rounded-full px-5">
          Принять
        </Button>
      </div>
    </div>
  );
}

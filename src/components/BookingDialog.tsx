"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { CLINIC } from "@/data/clinic";

const whatsappHref = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(
  "Здравствуйте! Хочу записаться на приём в Neuro Balance.",
)}`;
const telHref = `tel:${CLINIC.phoneIntl}`;

export function BookingDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[440px]">
        <DialogHeader>
          <DialogTitle>Запись на приём</DialogTitle>
          <DialogDescription>
            Свяжитесь с нами удобным способом — мы ответим в течение 10 минут.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 pt-2">
          <Button
            asChild
            size="lg"
            className="w-full h-12 rounded-full bg-[#25D366] text-white hover:bg-[#1faa52]"
          >
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Написать в WhatsApp
            </a>
          </Button>

          <Button asChild size="lg" variant="outline" className="w-full h-12 rounded-full">
            <a href={telHref}>
              <Phone className="mr-2 h-5 w-5" />
              Позвонить: {CLINIC.phoneDisplay}
            </a>
          </Button>
        </div>

        <div className="mt-4 space-y-2 border-t pt-4 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
            <span>{CLINIC.address}</span>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
            <span>
              Пн–Пт: {CLINIC.hoursWeekday} · Сб–Вс: {CLINIC.hoursWeekend}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

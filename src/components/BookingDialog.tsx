"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react"

// Minimal inline Input/Label to avoid extra files if not strictly needed, or I should create them.
// I'll stick to standard HTML input/label with Tailwind classes for speed, unless user insisted on ALL Shadcn.
// User said "Shadcn UI (accordion... cards, buttons)". Did not explicitly ask for Input/Label.
// I'll make them nice with standard classes.

export function BookingDialog({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate API call
        setTimeout(() => {
            setOpen(false)
            alert("Спасибо! Мы свяжемся с вами в ближайшее время.")
        }, 1000)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Запись на прием</DialogTitle>
                    <DialogDescription>
                        Оставьте свои данные, и мы перезвоним вам для уточнения деталей.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Имя
                        </label>
                        <input
                            id="name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Иван Иванов"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Телефон
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="+7 (999) 000-00-00"
                            required
                        />
                    </div>
                    <DialogFooter className="mt-4">
                        <Button type="submit">Отправить заявку</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

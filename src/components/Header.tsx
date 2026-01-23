"use client"

import Image from "next/image"
import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/BookingDialog"
import { cn } from "@/lib/utils"

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Технологии", href: "#features" },
        { name: "О нас", href: "#about" },
        { name: "Услуги", href: "#services" },
        { name: "FAQ", href: "#faq" },
        { name: "Контакты", href: "#footer" },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="Neuro Balance"
                        width={180}
                        height={50}
                        className="h-12 w-auto object-contain mix-blend-multiply"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <BookingDialog>
                        <Button>Записаться</Button>
                    </BookingDialog>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <Menu className="h-6 w-6 text-foreground" />
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-foreground/80 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <BookingDialog>
                        <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
                            Записаться
                        </Button>
                    </BookingDialog>
                </div>
            )}
        </header>
    )
}

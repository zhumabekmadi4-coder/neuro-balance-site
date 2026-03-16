"use client"

import Image from "next/image"
import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/BookingDialog"
import { cn } from "@/lib/utils"
import { useLenis } from "lenis/react"

export function Header() {
    const [isVisible, setIsVisible] = React.useState(true)
    const [lastScrollY, setLastScrollY] = React.useState(0)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const lenis = useLenis()

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault()
            const target = document.querySelector(href) as HTMLElement
            if (target && lenis) {
                lenis.scrollTo(target, { offset: -100 })
                setMobileMenuOpen(false)
            }
        }
    }

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Show header if scrolling up or at the very top
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true)
            } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
                // Hide header if scrolling down and not at top
                setIsVisible(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    const navLinks = [
        { name: "Технологии", href: "#services-carousel" },
        { name: "О нас", href: "#about" },
        { name: "Услуги", href: "#services" },
        { name: "FAQ", href: "#faq" },
        { name: "Контакты", href: "#footer" },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-transform duration-500 ease-in-out",
                isVisible ? "translate-y-0" : "-translate-y-full"
            )}
            style={{ paddingTop: "env(safe-area-inset-top)" }}
        >
            {/* Bio-Tech Glass Container */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-primary/30 shadow-[0_4px_30px_rgba(74,222,128,0.1)] supports-[backdrop-filter]:bg-black/10" />

            <div className="container mx-auto px-4 flex items-center justify-between py-4 relative z-10">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/images/logo.webp"
                        alt="Neuro Balance"
                        width={180}
                        height={50}
                        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-full hover:bg-foreground/5 relative group overflow-hidden"
                        >
                            <span className="relative z-10">{link.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <BookingDialog>
                        <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">Записаться</Button>
                    </BookingDialog>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Открыть меню"
                    aria-expanded={mobileMenuOpen}
                >
                    <Menu className="h-6 w-6 text-foreground" />
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-3xl border-b border-border shadow-2xl p-4 flex flex-col gap-4 animate-accordion-down">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/50"
                            onClick={(e) => handleScrollTo(e, link.href)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <BookingDialog>
                        <Button className="w-full mt-4" size="lg" onClick={() => setMobileMenuOpen(false)}>
                            Записаться
                        </Button>
                    </BookingDialog>
                </div>
            )}
        </header>
    )
}

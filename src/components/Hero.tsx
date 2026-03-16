"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { BookingDialog } from "@/components/BookingDialog"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import * as React from "react"

export function Hero() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        const xPercent = (clientX - left) / width - 0.5
        const yPercent = (clientY - top) / height - 0.5
        mouseX.set(xPercent)
        mouseY.set(yPercent)
    }

    const xSpring = useSpring(mouseX, { stiffness: 50, damping: 20 })
    const ySpring = useSpring(mouseY, { stiffness: 50, damping: 20 })

    const bgX = useTransform(xSpring, [-0.5, 0.5], ["-5%", "5%"])
    const bgY = useTransform(ySpring, [-0.5, 0.5], ["-5%", "5%"])

    return (
        <section
            className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-transparent"
            onMouseMove={handleMouseMove}
        >
            {/* Ambient Background Effects */}
            {/* Ambient Background Effects - Bio-Tech */}
            <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Main Mint Spotlight */}
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />

                {/* Secondary Cyan Mist */}
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[100px] animate-pulse-glow" />

                {/* Grid Overlay - subtle texture */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

                {/* Wavy Line - Bio Pulse (SVG) */}
                <div className="absolute bottom-0 left-0 w-full h-[300px] opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="url(#gradient)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: "var(--color-primary)", stopOpacity: 0.2 }} />
                                <stop offset="100%" style={{ stopColor: "var(--color-secondary)", stopOpacity: 0.2 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                            Инновационная медицина
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]"
                    >
                        Жизнь без боли <br className="hidden md:block" />
                        <span className="text-primary drop-shadow-[0_0_25px_rgba(74,222,128,0.8)]">в спине и суставах</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
                    >
                        Лечение позвоночника и суставов без операций.
                        Современные протоколы, HILT-лазер, магнитотерапия
                        и ИИ-диагностика осанки.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <BookingDialog>
                            <Button
                                size="lg"
                                className="bg-primary/20 backdrop-blur-md text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] text-lg h-14 px-10 rounded-full"
                            >
                                Записаться на прием
                            </Button>
                        </BookingDialog>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-secondary/10 backdrop-blur-sm border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-lg h-14 px-10 rounded-full group"
                        >
                            <span className="mr-2">Наши услуги</span> <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

"use client"

import { motion } from "framer-motion"
import { BookingDialog } from "@/components/BookingDialog"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-accent to-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -translate-x-1/2 translate-y-1/2" />

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
                        className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight"
                    >
                        Жизнь без боли <br className="hidden md:block" />
                        <span className="text-primary">в спине и суставах</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
                    >
                        Лечение позвоночника и суставов без операций.
                        Современные протоколы, HILT-лазер, магнитотерапия
                        и ИИ-диагностика осанки.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <BookingDialog>
                            <Button size="lg" className="text-base h-12 px-8">
                                Записаться на прием
                            </Button>
                        </BookingDialog>
                        <Button size="lg" variant="outline" className="text-base h-12 px-8 group">
                            Узнать больше <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

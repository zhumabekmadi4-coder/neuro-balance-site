"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { services as allServices } from "@/data/services"

// Filter out VTES and Blockades from this specific block as requested
const services = allServices.filter(s => s.id !== 'vtes' && s.id !== 'blockades')
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function ServiceScroll() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="py-24 bg-transparent text-foreground overflow-hidden min-h-[100dvh] flex items-center" id="services-carousel">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground mb-4">
                        ТЕХНОЛОГИЧЕСКИЙ СТЕК
                    </h2>
                    <p className="text-muted-foreground">
                        Комплексный подход к вашему здоровью
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* LEFT COLUMN: The "Neural Rack" (List) */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-3 relative">
                        {/* Background connecting line */}
                        <div className="absolute left-[24px] top-4 bottom-4 w-[2px] bg-border" />

                        {services.map((service, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <div
                                    key={service.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={cn(
                                        "relative pl-16 py-4 pr-6 rounded-xl cursor-pointer transition-all duration-300 border border-transparent flex items-center group",
                                        isActive
                                            ? "bg-primary/5 border-primary/50 translate-x-4" // Active: moved right, lit up
                                            : "hover:bg-muted/50 hover:translate-x-2" // Passive: slight hover effect
                                    )}
                                >
                                    {/* Connection Node (Circle on the line) */}
                                    <div className={cn(
                                        "absolute left-[18px] w-3 h-3 rounded-full border-2 transition-all duration-300 z-10",
                                        isActive
                                            ? "bg-primary border-primary shadow-[0_0_15px_var(--color-primary)] scale-125"
                                            : "bg-background border-muted-foreground/30"
                                    )} />

                                    {/* Connection Beam (Active only) */}
                                    <div className={cn(
                                        "absolute left-[24px] h-[2px] bg-primary transition-all duration-300",
                                        isActive ? "w-[40px] opacity-100" : "w-0 opacity-0"
                                    )} />

                                    {/* Icon */}
                                    <div className={cn(
                                        "relative w-10 h-10 shrink-0 mr-4 transition-all duration-300",
                                        isActive ? "opacity-100 scale-110" : "opacity-60 grayscale group-hover:grayscale-0"
                                    )}>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h3 className={cn(
                                            "font-bold text-lg transition-colors",
                                            isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                        )}>
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Active Arrow indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-arrow"
                                            className="absolute right-4 text-primary"
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    {/* RIGHT COLUMN: Display Screen */}
                    <div className="w-full lg:w-2/3 min-h-[500px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full bg-card border border-border rounded-2xl overflow-hidden flex flex-col shadow-2xl"
                            >
                                {/* Top Bar "Browser/Terminal" style */}
                                <div className="w-full h-12 bg-muted/30 border-b border-border flex items-center px-4 gap-2">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="ml-4 px-3 py-1 bg-muted/50 rounded text-xs font-mono text-muted-foreground">
                                        /modules/{services[activeIndex].id}
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col md:flex-row">
                                    {/* Image Side */}
                                    <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gradient-to-br from-muted/20 to-transparent relative overflow-hidden">
                                        <Image
                                            src={services[activeIndex].image}
                                            alt={services[activeIndex].title}
                                            width={300}
                                            height={300}
                                            className="object-contain drop-shadow-2xl relative z-10"
                                        />
                                        {/* Background pulse effect */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-primary/10 rounded-full blur-[50px] animate-pulse" />
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                                        <h2 className="text-3xl font-bold mb-4 text-foreground">
                                            {services[activeIndex].title}
                                        </h2>

                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {services[activeIndex].shortDescription}
                                        </p>

                                        <ul className="space-y-3 mb-8">
                                            {services[activeIndex].benefits.slice(0, 3).map((benefit, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-foreground/80">
                                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href={`/services/${services[activeIndex].id}`}>
                                            <Button className="w-full font-bold transition-all shadow-md hover:shadow-lg">
                                                Полное описание
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    )
}

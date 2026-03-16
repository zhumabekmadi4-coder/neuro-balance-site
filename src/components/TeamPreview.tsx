"use client"

import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { team } from "@/data/team"

export function TeamPreview() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                            Команда экспертов
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Врачи, которым <br />
                            <span className="text-muted-foreground">доверяют здоровье</span>
                        </h2>
                    </div>

                    <Link href="/team">
                        <Button variant="outline" size="lg" className="group rounded-full px-6">
                            Вся команда
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.slice(0, 3).map((doctor) => (
                        <div
                            key={doctor.id}
                            className="group relative bg-muted/30 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                                        {/* Avatar placeholder */}
                                        {doctor.name[0]}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{doctor.name}</h3>
                                        <p className="text-sm text-muted-foreground">{doctor.role}</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                                    {doctor.bio}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                    <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                                        <Star className="fill-current w-3 h-3" />
                                        <span>4.9</span>
                                        <span className="text-muted-foreground font-normal ml-1">Rating</span>
                                    </div>
                                    <span className="text-xs font-medium text-primary group-hover:underline">
                                        Подробнее
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

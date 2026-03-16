import { CheckCircle2, ArrowRight } from "lucide-react"
import { FadeUp } from "@/components/FadeUp"
import Link from "next/link"
import { conditions } from "@/data/conditions"

export function Services() {
    return (
        <section id="services" className="py-24 bg-transparent relative overflow-hidden">
            {/* Ambient Background for Section - Reverse Wave */}
            <div className="absolute top-0 left-0 w-full h-[400px] opacity-20 pointer-events-none rotate-180">
                <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="url(#gradient-services)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
                    <defs>
                        <linearGradient id="gradient-services" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: "var(--color-secondary)", stopOpacity: 0.1 }} />
                            <stop offset="100%" style={{ stopColor: "var(--color-primary)", stopOpacity: 0.1 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeUp className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]">Направления лечения</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Эффективно помогаем при широком спектре заболеваний опорно-двигательного аппарата, используя доказательную медицину.
                    </p>
                </FadeUp>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {conditions.map((condition, index) => (
                        <FadeUp key={condition.id} delay={index * 0.05}>
                            <Link href={`/conditions/${condition.id}`} className="block h-full">
                                <div className="group flex flex-col h-full p-6 bg-card/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)] transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden">
                                    {/* Hover Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <div className="flex items-start space-x-4 mb-4 relative z-10">
                                        <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-black transition-colors duration-300 shrink-0 border border-primary/20">
                                            <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-black" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-white block mb-2 group-hover:text-primary transition-colors drop-shadow-sm">
                                                {condition.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300 transition-colors">
                                                {condition.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 gap-1 relative z-10">
                                        Подробнее <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    )
}

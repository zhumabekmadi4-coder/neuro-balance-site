import Image from "next/image"
import { Users } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-20 bg-transparent relative overflow-hidden">
            {/* Side Glow & DNA Pulse */}
            <div className="absolute top-0 right-0 h-full w-[600px] opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
                    <path fill="url(#gradient-about)" fillOpacity="1" d="M300,0C250,100,100,200,150,300C200,400,350,500,300,600C250,700,150,750,200,800H400V0Z"></path>
                    <defs>
                        <linearGradient id="gradient-about" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "var(--color-primary)", stopOpacity: 0.05 }} />
                            <stop offset="100%" style={{ stopColor: "var(--color-secondary)", stopOpacity: 0.15 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                            Профессиональный подход к здоровью спины
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            В Neuro Balance мы объединили опыт лучших врачей-травматологов и реабилитологов
                            с возможностями современной медицины. Наш подход основан на международных протоколах
                            лечения боли и восстановления подвижности.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Мы не просто снимаем боль, а устраняем её причину, возвращая пациентам
                            радость активной жизни без лекарств и операций.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                                <h3 className="text-4xl font-bold text-primary mb-2 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">8+</h3>
                                <p className="text-sm text-gray-300">направлений лечения без операций</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                                <Users className="h-10 w-10 text-primary mb-2 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" aria-hidden="true" />
                                <p className="text-sm text-gray-300">Команда практикующих врачей</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden mt-8 md:mt-0 border border-primary/20 shadow-[0_0_30px_rgba(74,222,128,0.1)] group">
                        <Image
                            src="/images/gallery/gallery-01.webp"
                            alt="Клиника Neuro Balance в Астане — процедурный кабинет"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/20 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    )
}

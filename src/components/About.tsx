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
                                <h4 className="text-4xl font-bold text-primary mb-2 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">100%</h4>
                                <p className="text-sm text-gray-400">Современные методики</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                                <Users className="h-10 w-10 text-primary mb-2 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                                <p className="text-sm text-gray-400">Молодая прогрессивная команда</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative h-[400px] w-full bg-secondary/5 rounded-2xl overflow-hidden mt-8 md:mt-0 border border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.1)] group">
                        {/* Abstract Medical visual placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
                            <span className="text-primary font-bold text-3xl tracking-widest drop-shadow-[0_0_15px_rgba(74,222,128,0.8)] z-10">NEURO BALANCE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import { Activity, ShieldCheck, Stethoscope, Users } from "lucide-react"

const stats = [
    {
        icon: Stethoscope,
        title: "8+",
        label: "направлений лечения без операций",
    },
    {
        icon: Activity,
        title: "HILT · SIS · УВТ",
        label: "современная аппаратная физиотерапия",
    },
    {
        icon: ShieldCheck,
        title: "Доказательная",
        label: "международные клинические протоколы",
    },
    {
        icon: Users,
        title: "Своя команда",
        label: "невролог, ортопед, физиотерапевт, реабилитолог",
    },
]

export function About() {
    return (
        <section id="about" className="py-24 bg-transparent relative overflow-hidden">
            {/* Side Glow */}
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

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md mb-6">
                        Профессиональный подход к здоровью спины
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        В Neuro Balance мы объединили опыт врачей-травматологов и реабилитологов с
                        возможностями современной медицины. Подход основан на международных протоколах
                        лечения боли и восстановления подвижности — мы устраняем причину, а не только симптом.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map(({ icon: Icon, title, label }) => (
                        <div
                            key={title}
                            className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/30 hover:bg-white/[0.07] transition-colors"
                        >
                            <Icon
                                className="h-8 w-8 text-primary mb-3 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                                aria-hidden="true"
                            />
                            <h3 className="text-lg md:text-xl font-bold text-white mb-1">{title}</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

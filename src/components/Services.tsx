import { CheckCircle2 } from "lucide-react"

const services = [
    "Лечение межпозвонковых грыж",
    "Терапия артрозов и артритов",
    "Лечение остеохондроза",
    "Исправление осанки",
    "Реабилитация после травм",
    "Лечение головных болей напряжения",
    "Лечение пяточной шпоры",
    "Устранение болей в шее и пояснице",
]

export function Services() {
    return (
        <section id="services" className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Направления лечения</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Эффективно помогаем при широком спектре заболеваний опорно-двигательного аппарата.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <span className="font-medium text-foreground">{service}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

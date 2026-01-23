export function About() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Профессиональный подход к здоровью спины
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            В Neuro Balance мы объединили опыт лучших врачей-неврологов и реабилитологов
                            с возможностями современной медицины. Наш подход основан на международных протоколах
                            лечения боли и восстановления подвижности.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Мы не просто снимаем боль, а устраняем её причину, возвращая пациентам
                            радость активной жизни без лекарств и операций.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">10+</h4>
                                <p className="text-sm text-muted-foreground">Лет опыта врачей</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">5000+</h4>
                                <p className="text-sm text-muted-foreground">Довольных пациентов</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative h-[400px] w-full bg-secondary rounded-2xl overflow-hidden mt-8 md:mt-0">
                        {/* Abstract Medical visual placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 flex items-center justify-center">
                            <span className="text-primary/40 font-bold text-2xl">Neuro Balance Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

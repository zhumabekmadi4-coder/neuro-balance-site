"use client"

import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const features = [
    {
        title: "HILT Лазер",
        description: "Лазерная терапия высокой интенсивности для мгновенного снятия боли и глубокой регенерации тканей.",
        image: "/images/hilt.png",
    },
    {
        title: "SIS Магнит",
        description: "Супер индуктивная система для восстановления нервной проводимости и укрепления мышечного корсета.",
        image: "/images/sis.png",
    },
    {
        title: "ИИ Диагностика",
        description: "Анализ осанки и биомеханики движения с помощью искусственного интеллекта для точного диагноза.",
        image: "/images/ai.png",
    },
    {
        title: "Ударно-волновая терапия",
        description: "Эффективное лечение хронических воспалений и разрушение кальцинатов акустическими волнами.",
        image: "/images/uvt.png",
    },
    {
        title: "Кинезиотерапия",
        description: "Активная реабилитация через движение. Восстановление правильных паттернов движения и укрепление мышц.",
        image: "/images/kinesio.png",
    },
    {
        title: "Иглорефлексотерапия",
        description: "Точечное воздействие на нервную систему для снятия боли, спазмов и восстановления баланса организма.",
        image: "/images/acupuncture.png",
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-40 animate-pulse-glow" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] opacity-40 animate-pulse-glow" style={{ animationDelay: "1s" }} />
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-green-400 to-accent"
                    >
                        Технологии будущего
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Объединяем передовую аппаратную медицину и искусственный интеллект для вашего здоровья.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full border border-white/20 bg-white/5 backdrop-blur-lg hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-primary/20">
                                <CardHeader className="p-0">
                                    <div className="relative w-full h-48 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
                                        <div className="relative w-full h-full drop-shadow-2xl">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="px-6 pt-4">
                                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="px-6 pb-6 pt-2">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

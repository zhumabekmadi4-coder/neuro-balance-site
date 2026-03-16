import { conditions } from "@/data/conditions";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/FadeUp";

export function generateStaticParams() {
    return conditions.map((condition) => ({
        id: condition.id,
    }));
}

export default async function ConditionPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const condition = conditions.find((c) => c.id === id);

    if (!condition) {
        notFound();
    }

    // Filter services that are relevant to this condition
    const relevantServices = services.filter(service =>
        condition.methodologies.includes(service.id)
    );

    return (
        <main className="min-h-[100dvh] bg-background relative pb-20 pt-24 px-4">
            <div className="container mx-auto max-w-5xl">
                {/* Navigation */}
                <div className="mb-8">
                    <Link href="/#services">
                        <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Назад к направлениям
                        </Button>
                    </Link>
                </div>

                <FadeUp>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            {condition.title}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {condition.description}
                        </p>
                    </div>
                </FadeUp>

                <div className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-8">Используемые методики лечения</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relevantServices.map((service, index) => (
                            <FadeUp key={service.id} delay={index * 0.1}>
                                <div className="group h-full p-6 bg-secondary/30 rounded-2xl border border-transparent hover:border-primary/20 transition-all duration-300">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-2 bg-background rounded-full shadow-sm">
                                            <CheckCircle2 className="h-6 w-6 text-primary" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                        {service.shortDescription}
                                    </p>

                                    <Link href={`/services/${service.id}`} className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4">
                                        Узнать подробнее
                                    </Link>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <Link href="/#contact">
                        <Button size="lg" className="rounded-full px-8 text-lg h-12 shadow-lg shadow-primary/25">
                            Записаться на консультацию
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

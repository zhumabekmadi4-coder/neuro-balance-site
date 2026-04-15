import type { Metadata } from "next";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CLINIC } from "@/data/clinic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.neuro-balance.kz";

export function generateStaticParams() {
    return services.map((service) => ({
        id: service.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const service = services.find((s) => s.id === id);
    if (!service) return {};

    const title = `${service.title} — ${CLINIC.name}`;
    const url = `/services/${service.id}`;

    return {
        title: service.title,
        description: service.shortDescription,
        alternates: { canonical: url },
        openGraph: {
            type: "article",
            title,
            description: service.shortDescription,
            url,
            images: [{ url: service.image, width: 1200, height: 1200, alt: service.title }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: service.shortDescription,
            images: [service.image],
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const service = services.find((s) => s.id === id);

    if (!service) {
        notFound();
    }

    const pageUrl = `${siteUrl}/services/${service.id}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalProcedure",
                "@id": `${pageUrl}#procedure`,
                name: service.title,
                description: service.fullDescription,
                url: pageUrl,
                image: `${siteUrl}${service.image}`,
                procedureType: "https://schema.org/TherapeuticProcedure",
                howPerformed: service.mechanism,
                indication: service.benefits.join("; "),
                provider: {
                    "@type": "MedicalClinic",
                    "@id": `${siteUrl}/#clinic`,
                    name: CLINIC.name,
                    url: siteUrl,
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
                    { "@type": "ListItem", position: 2, name: "Услуги", item: `${siteUrl}/#features` },
                    { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
                ],
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main id="main-content" className="min-h-[100dvh] bg-background relative overflow-hidden pb-20 pt-28">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30 animate-pulse-glow" />
                    <div
                        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] opacity-30 animate-pulse-glow"
                        style={{ animationDelay: "1s" }}
                    />
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="mb-8">
                        <Link href="/#features">
                            <Button
                                variant="ghost"
                                className="gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Назад к услугам
                            </Button>
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                            <div className="relative aspect-square md:aspect-video lg:aspect-[4/3] w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-green-400 to-accent mb-4">
                                    {service.title}
                                </h1>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {service.fullDescription}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-primary" />
                                    Как это работает
                                </h2>
                                <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
                                    <p className="text-muted-foreground italic">
                                        &quot;{service.mechanism}&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-foreground">
                                    Эффекты от процедуры
                                </h2>
                                <ul className="grid gap-3">
                                    {service.benefits.map((benefit) => (
                                        <li
                                            key={benefit}
                                            className="flex items-start gap-3 text-muted-foreground group"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6">
                                <BookingDialog>
                                    <Button
                                        size="lg"
                                        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 rounded-full px-8"
                                    >
                                        Записаться на приём
                                    </Button>
                                </BookingDialog>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

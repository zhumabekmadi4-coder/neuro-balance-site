import type { Metadata } from "next"
import { team } from "@/data/team"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { BookingDialog } from "@/components/BookingDialog"
import { CLINIC } from "@/data/clinic"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.neuro-balance.kz"

export const metadata: Metadata = {
    title: "Команда врачей",
    description:
        "Врачи клиники Neuro Balance в Астане: невролог, физиотерапевт, травматолог-ортопед, реабилитолог. Опыт работы с HILT-лазером, SIS-магнитом, ударно-волновой терапией.",
    alternates: { canonical: "/team" },
    openGraph: {
        type: "website",
        title: "Команда врачей — Neuro Balance",
        description: "Врачи Neuro Balance: неврология, физиотерапия, ортопедия, реабилитация.",
        url: "/team",
    },
}

const physiciansJsonLd = {
    "@context": "https://schema.org",
    "@graph": team.map((doctor) => ({
        "@type": "Physician",
        "@id": `${siteUrl}/team#${doctor.id}`,
        name: doctor.name,
        jobTitle: doctor.role,
        description: doctor.bio,
        image: `${siteUrl}${doctor.image}`,
        knowsAbout: doctor.specialties,
        medicalSpecialty: doctor.specialties,
        worksFor: {
            "@type": "MedicalClinic",
            "@id": `${siteUrl}/#clinic`,
            name: CLINIC.name,
            url: siteUrl,
        },
    })),
}

export default function TeamPage() {
    return (
        <div className="min-h-[100dvh] bg-background font-sans selection:bg-primary/20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(physiciansJsonLd) }}
            />
            <Header />

            <main id="main-content" className="pt-32 pb-20">
                {/* Page Header */}
                <div className="container mx-auto px-4 mb-20">
                    <Link href="/">
                        <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all gap-2 text-muted-foreground hover:text-primary">
                            <ArrowLeft className="h-4 w-4" />
                            Вернуться на главную
                        </Button>
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
                        Наши специалисты
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        Врачи Neuro Balance — невролог, физиотерапевт, травматолог-ортопед и реабилитолог.
                        Опыт работы с HILT-лазером, SIS-магнитом и ударно-волновой терапией.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((doctor) => (
                            <div key={doctor.id} className="group relative bg-card hover:bg-card/50 border border-border/50 hover:border-primary/20 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                                {/* Image Area */}
                                <div className="aspect-[3/4] relative bg-muted overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 z-10" />
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
                                            {doctor.role}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {doctor.name}
                                    </h3>

                                    <p className="text-muted-foreground mb-4 line-clamp-2 max-w-[90%] group-hover:text-foreground/80 transition-colors">
                                        {doctor.bio}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {doctor.specialties.slice(0, 3).map(spec => (
                                            <span key={spec} className="text-xs text-muted-foreground bg-background/50 border border-border px-2 py-1 rounded-md">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    <BookingDialog>
                                        <Button className="w-full bg-foreground text-background hover:bg-primary hover:text-white transition-colors border-0">
                                            Записаться к врачу
                                        </Button>
                                    </BookingDialog>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

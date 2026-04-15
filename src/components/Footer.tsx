import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle, Instagram } from "lucide-react"
import { CLINIC } from "@/data/clinic"

export function Footer() {
    return (
        <footer id="footer" className="bg-background text-foreground py-20 relative overflow-hidden border-t border-primary/20">
            {/* Calm Horizon Wave */}
            <div className="absolute top-0 left-0 w-full h-[150px] opacity-10 pointer-events-none rotate-180">
                <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="var(--color-primary)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,106.7C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"></path>
                </svg>
            </div>
            {/* Big Type Background */}
            <div className="absolute bottom-[-5%] left-0 w-full select-none pointer-events-none overflow-hidden leading-none opacity-20">
                <p aria-hidden="true" className="text-[14vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent text-center whitespace-nowrap tracking-tighter">
                    NEURO BALANCE
                </p>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-6">
                        <Link href="/" aria-label="Neuro Balance — на главную" className="text-3xl font-bold tracking-tight mb-4 block text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            Neuro Balance
                        </Link>
                        <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                            Клиника нового поколения. Мы объединили передовую физиотерапию и искусственный интеллект, чтобы вернуть вам свободу движения без операций.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-4">
                        <h2 className="font-semibold text-lg mb-8 text-primary drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">Контакты</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 text-gray-200 group">
                                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/50">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">{CLINIC.city}</p>
                                    <p className="text-sm text-gray-300">{CLINIC.streetAddress}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-200 group">
                                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/50">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <a href={`tel:${CLINIC.phoneIntl}`} className="hover:text-primary transition-colors font-medium text-white">{CLINIC.phoneDisplay}</a>
                                    <span className="text-xs text-gray-400">Пн–Пт {CLINIC.hoursWeekday} · Сб–Вс {CLINIC.hoursWeekend}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-200 group">
                                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/50">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <a href={`mailto:${CLINIC.email}`} className="hover:text-primary transition-colors font-medium text-white">{CLINIC.email}</a>
                            </div>
                            <div className="flex items-center gap-4 text-gray-200 group">
                                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/50">
                                    <MessageCircle className="h-5 w-5 text-primary" />
                                </div>
                                <a
                                    href={CLINIC.socials.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Написать в WhatsApp"
                                    className="hover:text-primary transition-colors font-medium text-white"
                                >
                                    Написать в WhatsApp
                                </a>
                            </div>
                            <div className="flex items-center gap-4 text-gray-200 group">
                                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/50">
                                    <Instagram className="h-5 w-5 text-primary" />
                                </div>
                                <a
                                    href={CLINIC.socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Instagram @${CLINIC.socials.instagramHandle}`}
                                    className="hover:text-primary transition-colors font-medium text-white"
                                >
                                    @{CLINIC.socials.instagramHandle}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="md:col-span-4">
                        <h2 className="font-semibold text-lg mb-8 text-primary drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">Как добраться</h2>
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-primary/5 aspect-[4/3]">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=71.418700%2C51.116100&mode=search&sctx=ZAAAAAgBEAAaKAoSCXGq3rpFV0RAEZqZmZmZWUlAEhIJUcZSpRVcs0ARK%2BUDEsr3pUEgASgAOABAQEgBYjB%2BoBhqACoBcnVfUlUyAggBOAJAAUgBcgJydUWamRnIPwUAAACAaAGcAQpkZXNrdG9w&sll=71.418700%2C51.116100&sspn=0.030489%2C0.013154&z=16"
                                width="100%"
                                height="100%"
                                title="Карта проезда — Neuro Balance"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                style={{ border: 0 }}
                            />
                        </div>
                        <a
                            href={`https://2gis.kz/astana/search/${encodeURIComponent(CLINIC.streetAddress)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block text-sm text-primary hover:underline"
                        >
                            Открыть в 2GIS →
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Neuro Balance. Клиника лечения спины и суставов.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link>
                        <Link href="/offer" className="hover:text-primary transition-colors">Публичная оферта</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

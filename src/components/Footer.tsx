import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react"

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
                <div className="grid md:grid-cols-12 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="md:col-span-5 space-y-6">
                        <Link href="/" className="text-3xl font-bold tracking-tight mb-4 block text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            Neuro Balance
                        </Link>
                        <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                            Клиника нового поколения. Мы объединили передовую физиотерапию и искусственный интеллект, чтобы вернуть вам свободу движения без операций.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h4 className="font-semibold text-lg mb-8 text-primary drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">Контакты</h4>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 text-gray-200 group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/50">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Астана</p>
                                        <p className="text-sm text-gray-400">пр. Кабанбай батыра, 28</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-200 group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/50">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <a href="tel:+77770679380" className="hover:text-primary transition-colors font-medium">+7 (777) 067-93-80</a>
                                        <span className="text-xs text-gray-500">Пн-Пт 08:00-20:00, Сб-Вс 09:00-18:00</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-200 group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/50">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <a href="mailto:info@neurobalance.kz" className="hover:text-primary transition-colors font-medium">info@neurobalance.kz</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-8 text-primary drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">Следите за нами</h4>
                            <div className="flex gap-4">
                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all duration-300 group">
                                    <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
                                </Link>
                                <Link href="https://wa.me/77770679380" target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-green-500 hover:text-white hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 group">
                                    <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Neuro Balance. Future of Medicine.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Публичная оферта</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

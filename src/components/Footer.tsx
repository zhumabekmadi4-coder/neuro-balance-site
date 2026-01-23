import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
    return (
        <footer id="footer" className="bg-secondary text-secondary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
                            Neuro Balance
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            Современная клиника лечения позвоночника и суставов.
                            Мы возвращаем свободу движения без боли.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-6">Контакты</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 text-muted-foreground">
                                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                                <span>г. Алматы, ул. Абая 150 <br /> (демо-адрес)</span>
                            </div>
                            <div className="flex items-center space-x-3 text-muted-foreground">
                                <Phone className="h-5 w-5 shrink-0" />
                                <a href="tel:+77771234567" className="hover:text-primary transition-colors">+7 (777) 123-45-67</a>
                            </div>
                            <div className="flex items-center space-x-3 text-muted-foreground">
                                <Mail className="h-5 w-5 shrink-0" />
                                <a href="mailto:info@spinaclinic.kz" className="hover:text-primary transition-colors">info@spinaclinic.kz</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-6">Мы в соцсетях</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-secondary-foreground/10 pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Neuro Balance. Все права защищены.</p>
                </div>
            </div>
        </footer>
    )
}

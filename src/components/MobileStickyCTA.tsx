"use client"

import { BookingDialog } from "@/components/BookingDialog"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 100px
            setIsVisible(window.scrollY > 100)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
                >
                    <BookingDialog>
                        <Button className="w-full h-12 text-base shadow-xl bg-primary text-primary-foreground hover:scale-[1.02] transition-transform">
                            Записаться на прием
                        </Button>
                    </BookingDialog>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

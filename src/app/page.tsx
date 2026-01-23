import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Services />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

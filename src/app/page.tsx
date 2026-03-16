import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ServiceScroll } from "@/components/ServiceScroll"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { TeamPreview } from "@/components/TeamPreview"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://neurobalance-web.netlify.app/#clinic",
      name: "Neuro Balance",
      description: "Клиника лечения позвоночника и суставов без операций. HILT-лазер, SIS-магнит, ударно-волновая терапия, ИИ-диагностика осанки.",
      url: "https://neurobalance-web.netlify.app",
      telephone: "+77770679380",
      email: "info@neurobalance.kz",
      address: {
        "@type": "PostalAddress",
        streetAddress: "пр. Кабанбай батыра, 28",
        addressLocality: "Астана",
        addressCountry: "KZ",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: ["https://instagram.com", "https://wa.me/77770679380"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Болезненны ли процедуры?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, большинство наших процедур, таких как HILT-лазер или магнитотерапия, абсолютно безболезненны. Ударно-волновая терапия может вызывать легкий дискомфорт, который быстро проходит.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько длится курс лечения?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В среднем курс состоит из 5-10 процедур, в зависимости от диагноза и стадии заболевания. Точный план составляет врач на первичной консультации.",
          },
        },
        {
          "@type": "Question",
          name: "Нужно ли направление от врача?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, вы можете записаться напрямую. Первичный приём уже включает осмотр врача, диагностику и постановку диагноза.",
          },
        },
        {
          "@type": "Question",
          name: "Есть ли противопоказания?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, есть противопоказания (онкология, беременность, кардиостимуляторы и др.). Врач обязательно опросит вас перед началом лечения.",
          },
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <div className="min-h-[100dvh] flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ServiceScroll />
          <About />
          <Services />
          <TeamPreview />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  )
}

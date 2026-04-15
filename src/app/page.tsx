import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceScroll } from "@/components/ServiceScroll";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TeamPreview } from "@/components/TeamPreview";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { CLINIC } from "@/data/clinic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.neuro-balance.kz";

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: CLINIC.name,
      inLanguage: "ru-RU",
      publisher: { "@id": `${siteUrl}/#clinic` },
    },
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#clinic`,
      name: CLINIC.name,
      alternateName: "Клиника Neuro Balance",
      description: CLINIC.description,
      url: siteUrl,
      logo: `${siteUrl}/images/logo.webp`,
      image: `${siteUrl}/images/og-image.webp`,
      telephone: CLINIC.phoneIntl,
      email: CLINIC.email,
      priceRange: "$$",
      medicalSpecialty: [
        "PhysicalTherapy",
        "Rehabilitation",
        "Neurology",
        "Orthopedic",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC.streetAddress,
        addressLocality: CLINIC.city,
        postalCode: CLINIC.postalCode,
        addressCountry: CLINIC.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: CLINIC.latitude,
        longitude: CLINIC.longitude,
      },
      hasMap: `https://2gis.kz/astana/search/${encodeURIComponent(CLINIC.streetAddress)}`,
      openingHoursSpecification: CLINIC.openingHours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.dayOfWeek,
        opens: h.opens,
        closes: h.closes,
      })),
      areaServed: {
        "@type": "City",
        name: "Астана",
      },
      sameAs: [CLINIC.socials.instagram, CLINIC.socials.whatsapp],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Болезненны ли процедуры?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, большинство наших процедур, таких как HILT-лазер или магнитотерапия, абсолютно безболезненны и даже приятны. Ударно-волновая терапия может вызывать легкий дискомфорт, который быстро проходит.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько длится курс лечения?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В среднем курс состоит из 5-10 процедур, в зависимости от диагноза и стадии заболевания. Точный план лечения составляет врач на первичной консультации.",
          },
        },
        {
          "@type": "Question",
          name: "Нужно ли направление от врача?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, вы можете записаться к нам напрямую. Первичный приём уже включает осмотр врача, диагностику и постановку диагноза.",
          },
        },
        {
          "@type": "Question",
          name: "Есть ли противопоказания?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, как у любых медицинских процедур, есть противопоказания (онкология, беременность, кардиостимуляторы и др.). Врач обязательно опросит вас перед началом лечения.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <div className="min-h-[100dvh] flex flex-col font-sans">
        <Header />
        <main id="main-content" className="flex-grow">
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
  );
}

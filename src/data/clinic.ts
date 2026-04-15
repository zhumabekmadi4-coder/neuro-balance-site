export const CLINIC = {
  name: "Neuro Balance",
  legalName: "Клиника Neuro Balance",
  description:
    "Клиника безоперационного лечения позвоночника и суставов в Астане. HILT-лазер, SIS-магнит, ударно-волновая терапия, ИИ-диагностика осанки.",
  address: "пр. Кабанбай батыра, 28, Астана",
  streetAddress: "пр. Кабанбай батыра, 28",
  city: "Астана",
  region: "Astana",
  postalCode: "010000",
  country: "KZ",
  latitude: 51.1161,
  longitude: 71.4187,
  phoneIntl: "+77770679380",
  phoneDisplay: "+7 (777) 067-93-80",
  whatsappNumber: "77770679380",
  email: "info@neuro-balance.kz",
  hoursWeekday: "08:00–20:00",
  hoursWeekend: "09:00–18:00",
  openingHours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00" },
    { dayOfWeek: ["Saturday", "Sunday"], opens: "09:00", closes: "18:00" },
  ],
  socials: {
    instagram: "https://instagram.com/neuro_balance_ast",
    instagramHandle: "neuro_balance_ast",
    whatsapp: "https://wa.me/77770679380",
  },
} as const;

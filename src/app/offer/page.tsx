import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Публичная оферта",
  description:
    "Публичная оферта на оказание медицинских услуг клиники Neuro Balance в Астане. Условия записи, оплаты и предоставления услуг.",
  alternates: { canonical: "/offer" },
  robots: { index: true, follow: true },
};

export default function OfferPage() {
  return (
    <div className="min-h-[100dvh] bg-background font-sans">
      <Header />
      <main id="main-content" className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-8 pl-0 hover:pl-2 transition-all gap-2 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Вернуться на главную
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Публичная оферта
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            на оказание платных медицинских услуг
            <br />
            г. {CLINIC.city}, дата вступления в силу: {new Date().toLocaleDateString("ru-RU")}
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Общие положения</h2>
              <p>
                Настоящий документ является публичной офертой (далее — Оферта) {CLINIC.legalName}
                (далее — Клиника), расположенной по адресу: {CLINIC.address}. В соответствии со статьями
                395, 396 Гражданского кодекса Республики Казахстан Оферта содержит все существенные условия
                договора возмездного оказания медицинских услуг.
              </p>
              <p>
                Оферта адресована физическим лицам (далее — Пациент), желающим получить медицинские услуги
                в Клинике. Акцептом Оферты считается запись на приём через сайт{" "}
                <strong>www.neuro-balance.kz</strong>, мессенджеры (WhatsApp, Instagram), по телефону или
                лично в Клинике.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Предмет оферты</h2>
              <p>
                Клиника обязуется оказать Пациенту платные медицинские услуги (консультации, физиотерапевтические
                процедуры, реабилитация, диагностика), а Пациент — оплатить их согласно действующему прайс-листу
                Клиники. Перечень услуг публикуется на сайте и сообщается администратором при записи.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Условия оказания услуг</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Услуги оказываются строго после первичной консультации врача и постановки диагноза.</li>
                <li>Перед началом процедур врач информирует о возможных противопоказаниях и побочных эффектах.</li>
                <li>Пациент обязан сообщить о хронических заболеваниях, аллергиях, беременности и приёме лекарств.</li>
                <li>Часы работы Клиники: Пн–Пт {CLINIC.hoursWeekday}, Сб–Вс {CLINIC.hoursWeekend}.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Стоимость и порядок оплаты</h2>
              <p>
                Стоимость услуг определяется действующим прайс-листом Клиники. Оплата производится наличными
                или безналичным расчётом (банковская карта, Kaspi QR) до или сразу после оказания услуги.
                Чек выдаётся пациенту в обязательном порядке.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Запись и отмена</h2>
              <p>
                Запись на приём осуществляется через сайт, мессенджеры или по телефону{" "}
                <a href={`tel:${CLINIC.phoneIntl}`} className="text-primary hover:underline">
                  {CLINIC.phoneDisplay}
                </a>
                . Отмена или перенос записи возможны не позднее чем за 2 часа до назначенного времени.
                В случае неявки без предупреждения Клиника оставляет за собой право отказать в повторной записи
                без предоплаты.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Права и обязанности сторон</h2>
              <p>
                <strong>Клиника обязуется:</strong> оказывать услуги в соответствии с медицинскими стандартами,
                использовать сертифицированное оборудование, обеспечивать конфиденциальность данных пациента,
                соблюдать врачебную тайну.
              </p>
              <p>
                <strong>Пациент обязуется:</strong> предоставлять достоверную информацию о здоровье, выполнять
                назначения врача, оплачивать услуги в полном объёме, бережно относиться к имуществу Клиники.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Ответственность сторон</h2>
              <p>
                Клиника не несёт ответственности за ухудшение состояния здоровья Пациента, вызванное
                несоблюдением рекомендаций врача, сокрытием информации о противопоказаниях или самостоятельным
                прерыванием курса лечения.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Конфиденциальность</h2>
              <p>
                Условия обработки персональных данных Пациента изложены в{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Политике конфиденциальности
                </Link>
                , являющейся неотъемлемой частью настоящей Оферты.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Реквизиты Клиники</h2>
              <p>
                <strong>{CLINIC.legalName}</strong>
                <br />
                Адрес: {CLINIC.address}
                <br />
                Телефон:{" "}
                <a href={`tel:${CLINIC.phoneIntl}`} className="text-primary hover:underline">
                  {CLINIC.phoneDisplay}
                </a>
                <br />
                E-mail:{" "}
                <a href={`mailto:${CLINIC.email}`} className="text-primary hover:underline">
                  {CLINIC.email}
                </a>
                <br />
                Сайт: <strong>www.neuro-balance.kz</strong>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

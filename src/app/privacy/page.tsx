import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика обработки персональных данных пациентов клиники Neuro Balance в Астане. Условия сбора, хранения и защиты данных.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
            Политика конфиденциальности
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Дата вступления в силу: {new Date().toLocaleDateString("ru-RU")}</p>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных
                данных пользователей сайта <strong>www.neuro-balance.kz</strong> (далее — Сайт), принадлежащего
                клинике {CLINIC.legalName} (далее — Клиника), расположенной по адресу: {CLINIC.address}.
              </p>
              <p>
                Используя Сайт и оставляя свои контактные данные через формы обратной связи, мессенджеры или
                по телефону, пользователь подтверждает согласие с условиями настоящей Политики.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Состав собираемых данных</h2>
              <p>Клиника может собирать следующие персональные данные:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>фамилия, имя, отчество;</li>
                <li>номер мобильного телефона;</li>
                <li>адрес электронной почты;</li>
                <li>содержание сообщений, отправленных через мессенджеры;</li>
                <li>обезличенные технические данные (cookies, IP-адрес, тип браузера, статистика посещений).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Цели обработки персональных данных</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>запись на консультацию или процедуру;</li>
                <li>обратная связь по запросам пользователей;</li>
                <li>информирование об услугах, акциях и расписании Клиники;</li>
                <li>исполнение договорных обязательств перед пациентами;</li>
                <li>анализ работы Сайта и улучшение пользовательского опыта.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Правовые основания</h2>
              <p>
                Обработка персональных данных осуществляется на основании Закона Республики Казахстан
                «О персональных данных и их защите» от 21 мая 2013 года №94-V. Согласие пользователя предоставляется
                путём добровольного указания контактных данных при обращении в Клинику.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Хранение и защита</h2>
              <p>
                Персональные данные хранятся в защищённых системах Клиники в течение срока, необходимого для
                достижения целей обработки, либо до момента отзыва согласия пользователя. Клиника применяет
                организационные и технические меры для предотвращения несанкционированного доступа, изменения,
                раскрытия или уничтожения данных.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Передача третьим лицам</h2>
              <p>
                Клиника не передаёт персональные данные третьим лицам, за исключением случаев, прямо
                предусмотренных законодательством Республики Казахстан или необходимых для исполнения обязательств
                перед пациентом (например, передача в страховую компанию по запросу пользователя).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Cookies и аналитика</h2>
              <p>
                Сайт использует файлы cookies для запоминания пользовательских настроек и сбора обезличенной
                статистики посещаемости (в том числе через Яндекс.Метрику и Google Analytics). Пользователь
                может отключить cookies в настройках своего браузера; это может ограничить функциональность Сайта.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Права пользователя</h2>
              <p>Пользователь имеет право:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>запросить информацию о составе своих обработанных данных;</li>
                <li>требовать уточнения, блокирования или удаления данных;</li>
                <li>отозвать согласие на обработку, направив запрос на e-mail Клиники;</li>
                <li>обжаловать действия Клиники в уполномоченный орган по защите персональных данных.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Контакты</h2>
              <p>
                По вопросам обработки персональных данных обращайтесь:
                <br />
                <strong>{CLINIC.legalName}</strong>
                <br />
                Адрес: {CLINIC.address}
                <br />
                Телефон: <a href={`tel:${CLINIC.phoneIntl}`} className="text-primary hover:underline">{CLINIC.phoneDisplay}</a>
                <br />
                E-mail: <a href={`mailto:${CLINIC.email}`} className="text-primary hover:underline">{CLINIC.email}</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Изменения политики</h2>
              <p>
                Клиника оставляет за собой право изменять настоящую Политику. Актуальная редакция всегда
                публикуется по адресу <strong>www.neuro-balance.kz/privacy</strong>. Рекомендуем периодически
                проверять страницу.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

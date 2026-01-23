import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Болезненны ли процедуры?",
        answer: "Нет, большинство наших процедур, таких как HILT-лазер или магнитотерапия, абсолютно безболезненны и даже приятны. Ударно-волновая терапия может вызывать легкий дискомфорт, который быстро проходит.",
    },
    {
        question: "Сколько длится курс лечения?",
        answer: "В среднем курс состоит из 5-10 процедур, в зависимости от диагноза и стадии заболевания. Точный план лечения составляет врач на первичной консультации.",
    },
    {
        question: "Нужно ли направление от врача?",
        answer: "Нет, вы можете записаться к нам напрямую. Первичный прием уже включает осмотр врача, диагностику и постановку диагноза.",
    },
    {
        question: "Есть ли противопоказания?",
        answer: "Да, как у любых медицинских процедур, есть противопоказания (онкология, беременность, кардиостимуляторы и др.). Врач обязательно опросит вас перед началом лечения.",
    },
]

export function FAQ() {
    return (
        <section id="faq" className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

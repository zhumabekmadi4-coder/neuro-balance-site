export interface Condition {
    id: string;
    title: string;
    description: string;
    methodologies: string[]; // IDs from services.ts
}

export const conditions: Condition[] = [
    {
        id: "hernia",
        title: "Лечение межпозвонковых грыж",
        description: "Безоперационное лечение грыж и протрузий. Снимаем воспаление, уменьшаем размер грыжи и возвращаем подвижность.",
        methodologies: ["hilt-laser", "sis-magnet", "vtes", "kinesiotherapy", "blockades"]
    },
    {
        id: "arthrosis",
        title: "Терапия артрозов и артритов",
        description: "Восстановление хрящевой ткани и снятие воспаления в суставах. Продлеваем жизнь ваших суставов без операций.",
        methodologies: ["hilt-laser", "sis-magnet", "shockwave", "acupuncture", "blockades"]
    },
    {
        id: "osteochondrosis",
        title: "Лечение остеохондроза",
        description: "Комплексное восстановление питания межпозвонковых дисков и снятие мышечных спазмов.",
        methodologies: ["sis-magnet", "vtes", "acupuncture", "kinesiotherapy"]
    },
    {
        id: "posture",
        title: "Исправление осанки",
        description: "Коррекция сколиоза и кифоза. Формирование правильного мышечного корсета.",
        methodologies: ["ai-diagnostics", "kinesiotherapy", "sis-magnet", "vtes"]
    },
    {
        id: "rehab",
        title: "Реабилитация после травм",
        description: "Ускоренное восстановление после переломов, вывихов и спортивных травм.",
        methodologies: ["hilt-laser", "sis-magnet", "kinesiotherapy", "acupuncture"]
    },
    {
        id: "headache",
        title: "Лечение головных болей",
        description: "Устранение болей напряжения и мигреней воздействием на причину - спазмы мышц шеи.",
        methodologies: ["sis-magnet", "acupuncture", "kinesiotherapy", "blockades"]
    },
    {
        id: "spur",
        title: "Лечение пяточной шпоры",
        description: "Разрушение кальцинатов и снятие воспаления плантарной фасции.",
        methodologies: ["shockwave", "hilt-laser", "blockades"]
    },
    {
        id: "backpain",
        title: "Устранение болей в шее и пояснице",
        description: "Быстрое снятие острых и хронических болей в спине.",
        methodologies: ["hilt-laser", "sis-magnet", "vtes", "acupuncture", "blockades"]
    }
];

export type Language = 'kz' | 'ru'

export const LANGUAGES: Record<Language, string> = {
  kz: 'Қазақ',
  ru: 'Русский'
}

// Translations embedded directly
export const TRANSLATIONS = {
  kz: {
    common: {
      back: "Артқа",
      more: "Толығырақ",
      noData: "Деректер жоқ"
    },
    header: {
      topLinks: {
        patients: "Науқастарға",
        usefulInfo: "Пайдалы ақпарат",
        compliance: "Комплаенс қызметы"
      },
      searchPlaceholder: "Сайттан іздеу...",
      callCenter: "CALL-ЦЕНТР",
      nav: {
        homeBtn: "БАСТЫ БЕТ",
        aboutBtn: "МЕКЕМЕ ТУРАЛЫ",
        patientsBtn: "ЕМДЕЛУШІЛЕРГЕ",
        specialistsBtn: "МАМАНДАРҒА",
        boardBtn: "БАЙҚАУШЫ КЕҢЕС",
        servicesBtn: "ҚЫЗМЕТТЕР",
        newsBtn: "ХАБАРЛАНДЫРУЛАР",
        contactBtn: "БАЙЛАНЫС"
      },
      about: {
        financialReport: "Қызылорда облысының денсаулық сақтау басқармасының Қызылорда облыстық тері-венерология диспансері шаруашылық жүргізу құқығындағы мемлекеттік коммуналдық кәсіпорнның 2024 жылдың І жартыжылдық қаржылық есебі",
        auditServices: "Ішкі аудит және емделушіге қолдау көрсету қызметтері",
        quarterlyReport: "2024 жылдын 1 тоқсанының қаржылық есебі",
        complianceService: "Комплаенс қызметы",
        priceList: "Баға прейскуранты",
        history: "Мекеме тарихы",
        staff: "Біздің қызметкерлер"
      },
      patientsMenu: {
        prices: "Бағалар тізімі",
        memo: "Науқастарға арналған жадынама",
        schedule: "Жұмыс кестесі"
      },
      specialists: {
        legal: "Заңнамалық база",
        info: "Пайдалы ақпарат",
        articles: "Статьялар",
        more: "Толығырақ"
      }
    },
    footer: {
      address: "Мекенжайы",
      phone: "Телефон",
      email: "Электрондық пошта",
      workingHours: "Жұмыс уақыты"
    },
    pages: {
      news: {
        title: "Хабарландырулар",
        subtitle: "Соңғы жаңалықтар мен хабарландырулар",
        dbError: "Дерекқор орнатылмаған",
        dbErrorDesc: "Хабарландырулар жүйесін пайдалану үшін дерекқорды орнату керек",
        noNews: "Әзірше хабарландырулар жоқ"
      },
      about: {
        chiefDoctor: "Бас дәрігер",
        institutionHistory: "Мекеме тарихы",
        director: "Әмір Нұрлан Әмірұлы",
        directorTitle: "Қызылорда облыстық тері-венерология диспансерінің бас дәрігері"
      },
      patients: {
        title: "Емделушілерге",
        whatIs: "Бұл не?"
      },
      services: {
        title: "Қызметтер",
        description: "Біз ұсынатын медициналық қызметтер"
      },
      contact: {
        title: "Байланыс",
        form: "Хабарласу формасы"
      }
    }
  },
  ru: {
    common: {
      back: "Назад",
      more: "Подробнее",
      noData: "Нет данных"
    },
    header: {
      topLinks: {
        patients: "Пациентам",
        usefulInfo: "Полезная информация",
        compliance: "Служба комплаенса"
      },
      searchPlaceholder: "Поиск на сайте...",
      callCenter: "CALL-ЦЕНТР",
      nav: {
        homeBtn: "ГЛАВНАЯ",
        aboutBtn: "О УЧРЕЖДЕНИИ",
        patientsBtn: "ПАЦИЕНТАМ",
        specialistsBtn: "СПЕЦИАЛИСТАМ",
        boardBtn: "НАБЛЮДАТЕЛЬНЫЙ СОВЕТ",
        servicesBtn: "УСЛУГИ",
        newsBtn: "ОБЪЯВЛЕНИЯ",
        contactBtn: "КОНТАКТЫ"
      },
      about: {
        financialReport: "Финансовый отчет Кызылординского областного кожно-венерологического диспансера на I полугодие 2024 года",
        auditServices: "Услуги внутреннего аудита и поддержки пациентов",
        quarterlyReport: "Финансовый отчет за 1 квартал 2024 года",
        complianceService: "Служба комплаенса",
        priceList: "Прайс-лист услуг",
        history: "История учреждения",
        staff: "Наш персонал"
      },
      patientsMenu: {
        prices: "Список цен",
        memo: "Памятка для пациентов",
        schedule: "График работы"
      },
      specialists: {
        legal: "Нормативная база",
        info: "Полезная информация",
        articles: "Статьи",
        more: "Подробнее"
      }
    },
    footer: {
      address: "Адрес",
      phone: "Телефон",
      email: "Электронная почта",
      workingHours: "Часы работы"
    },
    pages: {
      news: {
        title: "Объявления",
        subtitle: "Последние новости и объявления",
        dbError: "База данных не установлена",
        dbErrorDesc: "Чтобы использовать систему объявлений, необходимо установить базу данных",
        noNews: "На данный момент нет объявлений"
      },
      about: {
        chiefDoctor: "Главный врач",
        institutionHistory: "История учреждения",
        director: "Амир Нурлан Амирович",
        directorTitle: "Главный врач Кызылординского областного кожно-венерологического диспансера"
      },
      patients: {
        title: "Пациентам",
        whatIs: "Что это?"
      },
      services: {
        title: "Услуги",
        description: "Медицинские услуги, которые мы предоставляем"
      },
      contact: {
        title: "Контакты",
        form: "Форма обратной связи"
      }
    }
  }
} as const

const DEFAULT_LANGUAGE: Language = 'kz'
const STORAGE_KEY = 'website-language'

export function getLanguageFromStorage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null
  return stored && (stored === 'kz' || stored === 'ru') ? stored : DEFAULT_LANGUAGE
}

export function setLanguageToStorage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }
}

export function getTranslations(lang: Language) {
  return TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANGUAGE]
}

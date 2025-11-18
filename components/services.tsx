import { Stethoscope, Microscope, Sparkles, TestTube, Syringe, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Дәрігер консультациясы",
      description: "Жоғары санатты дерматовенеролог дәрігерлердің кәсіби консультациясы - 3734 теңге",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Zap,
      title: "Физиотерапия",
      description: "Ультракүлгін сәулелендіру, Дарсонваль, Ультрадыбыс, Тубус-кварц, Фототерапия - 666-1755 теңге",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: TestTube,
      title: "Зертханалық зерттеулер",
      description: "ИФА, РПГА, гепатит, микроскопия, бактериологиялық зерттеулер - 657-4624 теңге",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Sparkles,
      title: "Дерматокосметология",
      description: "Бородавка жою, пилинг, мезотерапия, алмаз микродермабразия - 827-52901 теңге",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: Syringe,
      title: "Процедуралар",
      description: "Тамырішілік және бұлшықетішілік инъекциялар, аутогемотерапия - 507-1220 теңге",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Microscope,
      title: "Стационарлық емдеу",
      description: "Тері-венерологиялық аурулар бойынша толық курстық емдеу - 177399-182914 теңге",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <section id="services" className="bg-gray-50 py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-balance text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Біздің мамандану салаларымыз
          </h2>
          <p className="mt-3 md:mt-4 text-pretty text-base md:text-lg text-gray-600">
            Қызылорда облыстық тері-венерология диспансерінде көрсетілетін қызметтер
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-sm transition-shadow hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${service.bgColor}`}
                >
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-pretty text-sm text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="mb-6 md:mb-8 text-center text-xl md:text-2xl font-bold text-gray-900">
            Толық баға прейскуранты
          </h3>

          <div className="space-y-6 md:space-y-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h4 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-gray-900">
                  Амбулаторлық-емханалық қызметтер
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Дәрігер-дерматовенеролог қабылдауы</span>
                    <span className="font-semibold whitespace-nowrap">3734 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">ИФА, RW, ВИЧ, биохимиялық талдауларға қан алу</span>
                    <span className="font-semibold whitespace-nowrap">720 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Микрореакцияға қан алу</span>
                    <span className="font-semibold whitespace-nowrap">676 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Ванночка</span>
                    <span className="font-semibold whitespace-nowrap">976 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">ГН, ашытқы және трихомонадаларға жағынды алу</span>
                    <span className="font-semibold whitespace-nowrap">1220 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Аутогемотерапия</span>
                    <span className="font-semibold whitespace-nowrap">528 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Тамырішілік құю (дәрі-дәрмек құнынсыз)</span>
                    <span className="font-semibold whitespace-nowrap">980 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Тамырішілік инъекциялар (дәрі-дәрмек құнынсыз)</span>
                    <span className="font-semibold whitespace-nowrap">680 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 py-2 text-sm md:text-base">
                    <span className="flex-1">Бұлшықетішілік инъекциялар (дәрі-дәрмек құнынсыз)</span>
                    <span className="font-semibold whitespace-nowrap">507 ₸</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Doctor consultations */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <h4 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-gray-900">Дәрігер консультациясы</h4>
                <div className="space-y-2">
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Жоғары санатты дәрігер</span>
                    <span className="font-semibold whitespace-nowrap">3734 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Бірінші санатты дәрігер</span>
                    <span className="font-semibold whitespace-nowrap">3515 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Екінші санатты дәрігер</span>
                    <span className="font-semibold whitespace-nowrap">3477 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Санатсыз дәрігер</span>
                    <span className="font-semibold whitespace-nowrap">2962 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 py-2 text-sm md:text-base">
                    <span className="flex-1">Дерматовенеролог профқарауы</span>
                    <span className="font-semibold whitespace-nowrap">1539 ₸</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Physiotherapy */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <h4 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-gray-900">
                  Медициналық аппаратта физиотерапиялық емдеу
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Ультракүлгін сәулелендіру</span>
                    <span className="font-semibold whitespace-nowrap">666 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Дарсонваль</span>
                    <span className="font-semibold whitespace-nowrap">957 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Ультрадыбыс</span>
                    <span className="font-semibold whitespace-nowrap">845 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Тубус-кварц (УГН-1 мед аппаратында физиоемдеу)</span>
                    <span className="font-semibold whitespace-nowrap">657 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Соллюкс шамы</span>
                    <span className="font-semibold whitespace-nowrap">955 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Локальды фототерапия</span>
                    <span className="font-semibold whitespace-nowrap">786 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 py-2 text-sm md:text-base">
                    <span className="flex-1">Фототерапия</span>
                    <span className="font-semibold whitespace-nowrap">1755 ₸</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sterilization */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <h4 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-gray-900">
                  Стерилизация және дезинфекция
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">
                      Таңғыш материалдар мен медициналық аспаптарды автоклавтау және стерилизациялау
                    </span>
                    <span className="font-semibold whitespace-nowrap">992 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 py-2 text-sm md:text-base">
                    <span className="flex-1">Төсек-орын жабдықтары мен т.б. дезкамерада дезинфекциялау</span>
                    <span className="font-semibold whitespace-nowrap">1920 ₸</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inpatient services */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <h4 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-gray-900">
                  Тері-венерологиялық аурулар бойынша стационарлық қызметтер
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Қоршаған лишай (емдеу курсына)</span>
                    <span className="font-semibold whitespace-nowrap">177 399 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Сифилис (емдеу курсына)</span>
                    <span className="font-semibold whitespace-nowrap">182 914 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 py-2 text-sm md:text-base">
                    <span className="flex-1">
                      Палата-сервис (дәрі-дәрмек және тамақтандыруды есептемегенде, бір күнге)
                    </span>
                    <span className="font-semibold whitespace-nowrap">3871 ₸</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Laboratory tests */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <h4 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-gray-900">Зертханалық зерттеулер</h4>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Герпеске ИФА</span>
                    <span className="font-semibold whitespace-nowrap">2596 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Хламидиозға ИФА</span>
                    <span className="font-semibold whitespace-nowrap">2797 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Сифилиске ИФА</span>
                    <span className="font-semibold whitespace-nowrap">3264 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Лямблияға ИФА</span>
                    <span className="font-semibold whitespace-nowrap">3335 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Гарднереллезге ИФА</span>
                    <span className="font-semibold whitespace-nowrap">2632 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Кандидаға ИФА</span>
                    <span className="font-semibold whitespace-nowrap">2478 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Уреаплазмозға ИФА</span>
                    <span className="font-semibold whitespace-nowrap">2207 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Микоплазмозға ИФА</span>
                    <span className="font-semibold whitespace-nowrap">2541 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Токсоплазмозға ИФА</span>
                    <span className="font-semibold whitespace-nowrap">2605 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">РПГА зерттеуі</span>
                    <span className="font-semibold whitespace-nowrap">2314 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">С гепатитіне зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">1889 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">В гепатитіне зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">2395 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Ашық спирохетаға зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">1906 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Гонорея, трихомонада және ашытқыға жағынды зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">2105 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Демодекске зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">1523 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Саңырауқұлаққа зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">1891 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Қышыма кенесіне зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">1866 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Хламидиозға жағынды зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">2831 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Микрореакцияға зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">657 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Қызыл жегіге қанды зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">2168 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">RW-ға қанды зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">2201 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">VDRL-ға қанды зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">2780 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Жалпы қан талдауы</span>
                    <span className="font-semibold whitespace-nowrap">1713 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Зәр талдауы</span>
                    <span className="font-semibold whitespace-nowrap">1097 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Биохимиялық зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">2225 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Гонорея, трихомонада және ашытқыға бак егу</span>
                    <span className="font-semibold whitespace-nowrap">4067 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Саңырауқұлаққа бак егу</span>
                    <span className="font-semibold whitespace-nowrap">4624 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Акантолитикалық жасушаларға жағынды іздері</span>
                    <span className="font-semibold whitespace-nowrap">3000 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Антибиотиктерге сезімталдық</span>
                    <span className="font-semibold whitespace-nowrap">2590 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 py-2 text-sm md:text-base">
                    <span className="flex-1">Жұмыртқа құртқа нәжісті зерттеу</span>
                    <span className="font-semibold whitespace-nowrap">809 ₸</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dermato-cosmetology */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <h4 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-gray-900">
                  Дерматокосметологиялық қызметтер
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Дәрігер-дерматокосметолог консультациясы</span>
                    <span className="font-semibold whitespace-nowrap">3678 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Бородавка, кондилома жою</span>
                    <span className="font-semibold whitespace-nowrap">4767 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Папиллома жою</span>
                    <span className="font-semibold whitespace-nowrap">2900 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Моллюск жою</span>
                    <span className="font-semibold whitespace-nowrap">827 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Алмаз микродермабразия</span>
                    <span className="font-semibold whitespace-nowrap">5197 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Безеу ауруын түзету бағдарламасы</span>
                    <span className="font-semibold whitespace-nowrap">11 354 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Филлерлер - Filoti</span>
                    <span className="font-semibold whitespace-nowrap">33 708 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Skinasil - Гиалурон қышқылы</span>
                    <span className="font-semibold whitespace-nowrap">32 314 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">БРВ - Ultra гиалуформ - 1% (бет және мойын)</span>
                    <span className="font-semibold whitespace-nowrap">27 598 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Бетті тазалау</span>
                    <span className="font-semibold whitespace-nowrap">8239 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Джесснердің сары пилингі</span>
                    <span className="font-semibold whitespace-nowrap">8583 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Мезотерапия Skine Line</span>
                    <span className="font-semibold whitespace-nowrap">17 398 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Мезотерапия AGE Line - бет</span>
                    <span className="font-semibold whitespace-nowrap">15 898 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Мезотерапия AGE Line - бет және мойын</span>
                    <span className="font-semibold whitespace-nowrap">27 974 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Шашқа арналған мезокомплекс Hair</span>
                    <span className="font-semibold whitespace-nowrap">13 714 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">Нейронокс 1 бірлік</span>
                    <span className="font-semibold whitespace-nowrap">885 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b py-2 text-sm md:text-base">
                    <span className="flex-1">B-matrix - полимолочная</span>
                    <span className="font-semibold whitespace-nowrap">52 901 ₸</span>
                  </div>
                  <div className="flex justify-between gap-4 py-2 text-sm md:text-base">
                    <span className="flex-1">Карбонды пилинг</span>
                    <span className="font-semibold whitespace-nowrap">9330 ₸</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Training */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <h4 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-gray-900">Мамандарды оқыту</h4>
                <div className="space-y-2">
                  <div className="flex justify-between gap-4 py-2 text-sm md:text-base">
                    <span className="flex-1">Жұмыс орнында мамандарды оқыту (бір сағатқа)</span>
                    <span className="font-semibold whitespace-nowrap">3079 ₸</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

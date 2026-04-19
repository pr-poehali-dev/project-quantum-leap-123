import { useEffect, useRef, useState } from "react"

const topics = [
  {
    number: "2",
    title: "Основные аспекты культуры речи",
    short: "Культура речи",
    content: [
      { label: "Правильность", text: "Соответствие языковым нормам: грамматическим, орфографическим, пунктуационным." },
      { label: "Точность", text: "Использование слов и выражений, адекватно отражающих смысл." },
      { label: "Логичность", text: "Последовательное и аргументированное изложение мыслей." },
      { label: "Чистота", text: "Отсутствие жаргонизмов, слов-паразитов, просторечий." },
      { label: "Выразительность", text: "Богатство лексики, образность, эмоциональная окраска." },
      { label: "Уместность", text: "Соответствие речи ситуации, аудитории и цели общения." },
    ],
  },
  {
    number: "3",
    title: "Языковые и речевые нормы",
    short: "Нормы",
    content: [
      { label: "Орфоэпические", text: "Правильное произношение слов и звуков." },
      { label: "Грамматические", text: "Морфология и синтаксис — строение слов и предложений." },
      { label: "Лексические", text: "Употребление слов по их значению." },
      { label: "Орфографические", text: "Правильное написание слов." },
      { label: "Речевые нормы", text: "Уместность, логичность, последовательность, соответствие стилю и жанру речи." },
    ],
  },
  {
    number: "4",
    title: "Речевые формулы и речевой этикет",
    short: "Речевой этикет",
    content: [
      { label: "Речевые формулы", text: "Стандартные выражения для начала, поддержания и завершения общения: «Добрый день!», «Позвольте уточнить...», «Благодарю за внимание!»" },
      { label: "Речевой этикет", text: "Совокупность правил вежливого общения: обращение, приветствие, прощание, выражение благодарности и извинения." },
    ],
  },
  {
    number: "5",
    title: "Терминология и профессиональная лексика",
    short: "Терминология",
    content: [
      { label: "Терминология", text: "Система терминов, обозначающих понятия определённой профессиональной области." },
      { label: "Профессиональная лексика", text: "Слова и выражения, характерные для конкретной сферы деятельности: «дебет», «кредит», «алгоритм», «диспансеризация»." },
    ],
  },
  {
    number: "6",
    title: "Язык специальности",
    short: "Язык специальности",
    content: [
      { label: "Определение", text: "Разновидность языка, используемая в определённой профессиональной среде." },
      { label: "Особенности", text: "Отличается точностью, лаконичностью, использованием терминов и специфических конструкций." },
    ],
  },
  {
    number: "7",
    title: "Отраслевые терминологические словари",
    short: "Словари",
    content: [
      { label: "Что это", text: "Справочные издания с систематизированным перечнем терминов по определённой отрасли знаний или профессии." },
      { label: "Примеры", text: "«Медицинский словарь», «Юридический словарь», «Словарь экономических терминов»." },
    ],
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTopic, setActiveTopic] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="topics" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Темы лекции
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Выберите раздел
          </h2>
          <p
            className={`text-muted-foreground mt-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Нажмите на кнопку, чтобы раскрыть содержание
          </p>
        </div>

        {/* Topic Buttons */}
        <div
          className={`flex flex-wrap gap-3 justify-center mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {topics.map((topic, index) => (
            <button
              key={index}
              onClick={() => setActiveTopic(activeTopic === index ? null : index)}
              className={`px-6 py-3 text-sm tracking-wider uppercase border transition-all duration-300 ${
                activeTopic === index
                  ? "bg-sage text-primary-foreground border-sage"
                  : "bg-background text-muted-foreground border-border hover:border-sage hover:text-foreground"
              }`}
            >
              {topic.short}
            </button>
          ))}
        </div>

        {/* Active Topic Content */}
        {activeTopic !== null && (
          <div
            className="max-w-4xl mx-auto bg-background border border-border p-10 lg:p-14 transition-all duration-500"
            key={activeTopic}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-4">
              Раздел {topics[activeTopic].number}
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10">
              {topics[activeTopic].title}
            </h3>
            <div className="space-y-6">
              {topics[activeTopic].content.map((item, i) => (
                <div key={i} className="grid sm:grid-cols-[200px_1fr] gap-3 sm:gap-6 py-4 border-t border-border first:border-t-0 first:pt-0">
                  <span className="text-xs tracking-widest uppercase text-sage font-medium pt-1">{item.label}</span>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

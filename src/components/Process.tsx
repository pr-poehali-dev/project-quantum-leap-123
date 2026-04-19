import { useEffect, useRef, useState } from "react"

const tableData = [
  { term: "Язык", definition: "Система знаков для общения" },
  { term: "Культура речи", definition: "Совокупность норм и качеств правильной речи" },
  { term: "Речевой этикет", definition: "Правила вежливого общения" },
  { term: "Терминология", definition: "Система специальных терминов" },
  { term: "Язык специальности", definition: "Профессиональный вариант языка" },
  { term: "Терминологический словарь", definition: "Справочник терминов по отрасли" },
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} id="table" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Краткий справочник
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Ключевые
                <span className="italic"> понятия</span>
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Краткая таблица основных терминов и их определений из данной лекции.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {tableData.map((row, index) => (
                <div
                  key={row.term}
                  className={`group py-8 lg:py-10 border-t border-border last:border-b transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex gap-8 lg:gap-12 items-start">
                    <span className="font-serif text-3xl lg:text-4xl text-stone/50 group-hover:text-sage transition-colors duration-500 w-10 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 w-full">
                      <h3 className="font-serif text-xl md:text-2xl text-foreground">{row.term}</h3>
                      <p className="text-muted-foreground leading-relaxed">{row.definition}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="definition" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Раздел 1
            </p>

            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Что такое
              <span className="italic"> язык</span>
            </h2>

            <div
              className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                Язык — это <em className="text-foreground">знаковая система</em>, служащая основным средством общения, передачи информации и выражения мыслей.
              </p>
              <p>
                В профессиональной коммуникации язык выступает инструментом для обмена знаниями, координации действий, формирования корпоративной культуры и установления деловых отношений.
              </p>
            </div>

            <div
              className={`grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">7</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Тем лекции</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">6</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Аспектов речи</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">6</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Понятий</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
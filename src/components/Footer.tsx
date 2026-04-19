export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">Язык и коммуникация</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Учебный материал по дисциплине «Русский язык и культура речи».
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Разделы</p>
            <nav className="flex flex-col gap-3">
              <a href="#definition" className="text-sm text-foreground hover:text-sage transition-colors">Определение</a>
              <a href="#topics" className="text-sm text-foreground hover:text-sage transition-colors">Темы лекции</a>
              <a href="#table" className="text-sm text-foreground hover:text-sage transition-colors">Ключевые понятия</a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Группа ИСПБ7-25 Хоснуллина Э.Р.
          </p>
        </div>
      </div>
    </footer>
  )
}
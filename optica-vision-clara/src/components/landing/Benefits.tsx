import { BENEFITS } from "@/data/site-content";

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="scroll-mt-8 border-y border-navy-900/5 bg-navy-900 py-16 text-white lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-soft">
            Por qué elegirnos
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight lg:text-4xl">
            Confianza, calidad y un trato cercano
          </h2>
          <p className="mt-4 text-white/75">
            Cada visita está pensada para que entiendas tu salud visual y salgas con la mejor solución.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <li
                key={b.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-teal-soft/50 hover:bg-white/10"
              >
                <Icon className="h-8 w-8 text-teal-soft" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-4 font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{b.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

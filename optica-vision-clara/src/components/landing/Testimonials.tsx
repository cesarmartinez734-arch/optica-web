import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/site-content";

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="scroll-mt-8 bg-gradient-to-b from-white to-navy-50/50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-soft">
            Testimonios
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy-900 lg:text-4xl">
            Lo que dicen quienes ya nos eligieron
          </h2>
          <p className="mt-4 text-navy-800/80">
            Experiencias reales de clientes en San Salvador y alrededores.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="relative flex flex-col rounded-3xl border border-navy-900/5 bg-white p-8 shadow-card transition hover:shadow-card-hover"
            >
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-teal-soft/25"
                aria-hidden
              />
              <div className="flex gap-1 text-accent" aria-label={`${t.rating} de 5 estrellas`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <p className="mt-4 flex-1 text-base leading-relaxed text-navy-800/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-navy-900/5 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-teal-soft">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-navy-900">{t.name}</cite>
                  <p className="text-sm text-navy-800/65">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

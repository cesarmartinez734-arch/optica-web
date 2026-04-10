import { CircleDot, Eye, Glasses, Shield } from "lucide-react";
import { SERVICES } from "@/data/site-content";

const serviceIcons = {
  Eye,
  Glasses,
  CircleDot,
  Shield,
} as const;

export function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-8 bg-gradient-to-b from-navy-50/80 to-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-soft">
            Servicios
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy-900 lg:text-4xl">
            Soluciones integrales para tus ojos
          </h2>
          <p className="mt-4 text-navy-800/80">
            Desde el examen hasta el armado final: un solo equipo para acompañarte en cada paso.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-navy-900/5 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-teal-soft/40 hover:shadow-card-hover"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition group-hover:bg-teal-soft group-hover:text-navy-900">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/80">
                  {s.description}
                </p>
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal-soft/10 transition group-hover:bg-teal-soft/20" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

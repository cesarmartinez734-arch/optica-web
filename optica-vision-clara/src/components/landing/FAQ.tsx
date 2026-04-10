import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/site-content";

export function FAQ() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-soft">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy-900">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-navy-800/80">
            Respuestas rápidas antes de escribirnos. Para casos específicos, WhatsApp es el canal más ágil.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-navy-900/8 bg-navy-50/50 shadow-sm open:bg-white open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-900">
                {item.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-navy-800/50 transition group-open:rotate-180" />
              </summary>
              <p className="border-t border-navy-900/5 px-5 pb-4 pt-2 text-sm leading-relaxed text-navy-800/85">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

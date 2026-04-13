import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PRODUCT_CATEGORIES, whatsappHref } from "@/data/site-content";

export function Products() {
  return (
    <section id="productos" className="scroll-mt-8 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-soft">
              Catálogo
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy-900 lg:text-4xl">
              Productos destacados por categoría
            </h2>
            <p className="mt-4 text-navy-800/80">
              Explora nuestras líneas y solicita disponibilidad o cotización por WhatsApp.
            </p>
          </div>
          <a
            href={whatsappHref("Hola, quiero cotizar monturas / ver catálogo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-navy-900/15 px-5 py-3 text-sm font-semibold text-navy-900 transition hover:border-teal-soft hover:bg-navy-50"
          >
            Solicitar catálogo completo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            <article
              key={cat.title}
              className="group overflow-hidden rounded-3xl bg-navy-50 shadow-card ring-1 ring-navy-900/5 transition duration-300 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={cat.imageSrc}
                  alt={cat.imageAlt}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-80 transition group-hover:opacity-90" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-900 backdrop-blur-sm">
                  Ver en tienda
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/80">
                  {cat.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

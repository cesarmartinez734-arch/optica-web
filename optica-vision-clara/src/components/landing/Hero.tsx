import Image from "next/image";
import { ChevronDown, MessageCircle } from "lucide-react";
import { HERO, HERO_STATS, whatsappHref } from "@/data/site-content";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-navy-50 via-white to-white pt-[var(--header-offset)]"
    >
      <div className="pointer-events-none absolute -right-24 top-32 h-96 w-96 rounded-full bg-teal-soft/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-navy-900/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20">
        <div className="order-2 max-w-xl animate-fade-up lg:order-1">
          <p className="mb-3 inline-flex items-center rounded-full border border-navy-900/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-800/80 shadow-sm">
            {HERO.eyebrow}
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {HERO.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-800/85 sm:text-lg">
            {HERO.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110 sm:text-base"
            >
              <MessageCircle className="h-5 w-5" />
              {HERO.ctaPrimary}
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center rounded-xl border-2 border-navy-900/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 shadow-sm transition hover:border-teal-soft hover:bg-navy-50 sm:text-base"
            >
              {HERO.ctaSecondary}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-navy-900/10 pt-8">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <dt className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs font-medium text-navy-800/70 sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-navy-100 shadow-card-hover ring-1 ring-navy-900/5 lg:max-w-lg">
            <Image
              src={HERO.imageSrc}
              alt={HERO.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/25 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 shadow-card backdrop-blur-sm">
              <p className="text-sm font-semibold text-navy-900">
                Tecnología y estética para tu día a día
              </p>
              <p className="mt-1 text-xs text-navy-800/75">
                Monturas premium y cristales con tratamientos de última generación.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-2xl border border-white bg-gradient-to-br from-teal-soft/30 to-white shadow-card lg:block" />
        </div>
      </div>

      <a
        href="#nosotros"
        className="mx-auto mb-6 flex w-max flex-col items-center gap-1 text-xs font-semibold uppercase tracking-widest text-navy-800/50 transition hover:text-navy-900"
      >
        <span>Descubre más</span>
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}

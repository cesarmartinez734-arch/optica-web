import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { ABOUT, whatsappHref } from "@/data/site-content";

export function About() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-8 bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy-100 shadow-card ring-1 ring-navy-900/5">
              <Image
                src={ABOUT.imageSrc}
                alt={ABOUT.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 max-w-[200px] rounded-2xl bg-navy-900 p-4 text-white shadow-card-hover lg:-right-8">
              <p className="font-display text-2xl font-bold text-teal-soft">10+</p>
              <p className="text-sm text-white/85">años cuidando la visión en El Salvador</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-soft">
              Sobre nosotros
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy-900 lg:text-4xl">
              {ABOUT.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-800/85 lg:text-lg">
              {ABOUT.lead}
            </p>

            <ul className="mt-10 space-y-5">
              {ABOUT.bullets.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-900 shadow-sm ring-1 ring-navy-900/5">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-800/80">
                        {item.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <a
              href={whatsappHref("Hola, quiero asesoría sobre monturas y exámenes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-navy-800"
            >
              <MessageCircle className="h-4 w-4" />
              {ABOUT.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

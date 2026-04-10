import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { CTA_FINAL, whatsappHref } from "@/data/site-content";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&h=900&fit=crop&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/85" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white lg:text-4xl">
            {CTA_FINAL.title}
          </h2>
          <p className="mt-4 text-lg text-white/85">{CTA_FINAL.text}</p>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" />
            {CTA_FINAL.button}
          </a>
          <p className="mt-4 text-sm text-white/60">
            También puedes agendar examen visual, renovar lentes o cotizar monturas en minutos.
          </p>
        </div>
      </div>
    </section>
  );
}

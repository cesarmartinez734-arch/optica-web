import { Eye, Mail, MapPin, Phone } from "lucide-react";
import {
  FOOTER_SERVICES,
  NAV_LINKS,
  SITE,
  whatsappHref,
} from "@/data/site-content";

export function Footer() {
  return (
    <footer id="contacto" className="scroll-mt-8 bg-navy-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-soft text-navy-900">
                <Eye className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-display text-xl font-semibold">{SITE.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Óptica moderna en San Salvador: exámenes visuales, lentes graduados y asesoría cercana
              para que veas y te veas mejor.
            </p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Escribir por WhatsApp
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-soft">
                Enlaces rápidos
              </h3>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-white/75 transition hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-soft">
                Servicios
              </h3>
              <ul className="mt-4 space-y-2">
                {FOOTER_SERVICES.map((s) => (
                  <li key={s}>
                    <span className="text-sm text-white/75">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-soft">
              Contacto
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-soft" aria-hidden />
                <span>
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-teal-soft" aria-hidden />
                <a href={`tel:+${SITE.whatsappPhone}`} className="hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-teal-soft" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/55">{SITE.schedule}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

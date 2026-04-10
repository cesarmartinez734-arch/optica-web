import { MessageCircle } from "lucide-react";
import { SITE, whatsappHref } from "@/data/site-content";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy-900/20 transition hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-teal-soft focus:ring-offset-2"
      aria-label={`WhatsApp — ${SITE.name}`}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
    </a>
  );
}

import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site-content";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} | Exámenes visuales y lentes en San Salvador`,
  description:
    "Exámenes visuales profesionales, lentes graduados, monturas modernas y lentes de contacto. Atención personalizada en San Salvador, El Salvador.",
  openGraph: {
    title: SITE.name,
    description:
      "Salud visual, estética y confianza. Agenda tu cita por WhatsApp.",
    locale: "es_SV",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${fraunces.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

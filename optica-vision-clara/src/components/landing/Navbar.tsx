"use client";

import { useEffect, useState } from "react";
import { Eye, Menu, MessageCircle, X } from "lucide-react";
import { NAV_LINKS, SITE, whatsappHref } from "@/data/site-content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`border-t border-white/10 bg-white transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:py-4">
        <a
          href="#inicio"
          className="group flex items-center gap-2 text-navy-900"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white shadow-card transition group-hover:bg-teal-soft group-hover:text-navy-900">
            <Eye className="h-5 w-5" strokeWidth={2} aria-hidden />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            {SITE.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-navy-800/90 transition hover:bg-navy-50 hover:text-navy-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy-900/10 bg-white text-navy-900 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div
          className="fixed inset-0 top-[var(--header-offset,7.25rem)] z-[60] bg-navy-900/40 backdrop-blur-sm lg:hidden"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed inset-x-0 bottom-0 z-[61] flex flex-col border-t border-navy-900/5 bg-white transition duration-300 ease-out lg:hidden ${
          open ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-full opacity-0"
        }`}
        style={{ top: "var(--header-offset, 7.25rem)" }}
      >
        <ul className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-xl px-4 py-3 text-base font-medium text-navy-900 hover:bg-navy-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="border-t border-navy-900/5 p-4">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

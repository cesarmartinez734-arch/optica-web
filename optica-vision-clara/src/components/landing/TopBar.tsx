import { Sparkles } from "lucide-react";
import { SITE } from "@/data/site-content";

export function TopBar() {
  return (
    <div className="bg-navy-900 text-white/95">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium sm:text-sm">
        <Sparkles className="hidden h-3.5 w-3.5 shrink-0 text-teal-soft sm:block" aria-hidden />
        <p className="tracking-wide">{SITE.topBar}</p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { InstrumentArt, type ArtView } from "@/components/instrument-art";
import { cn } from "@/lib/utils";

const VIEWS: ArtView[] = [0, 1, 2];

export function ProductGallery({
  seed,
  badge = "Supplied & serviced by Orbit",
}: {
  seed: string;
  badge?: string;
}) {
  const [view, setView] = useState<ArtView>(0);

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f5f5f5]">
        {badge && (
          <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#15803d] shadow-sm ring-1 ring-slate-200">
            <Check className="h-3.5 w-3.5" /> {badge}
          </span>
        )}
        <InstrumentArt seed={seed} view={view} className="w-full" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {VIEWS.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            aria-label={`Show product view ${v + 1}`}
            className={cn(
              "overflow-hidden rounded-xl border bg-[#f5f5f5] transition",
              view === v
                ? "border-[#c4620a] ring-2 ring-[#c4620a]/25"
                : "border-slate-200 hover:border-slate-300",
            )}
          >
            <InstrumentArt seed={seed} view={v} className="w-full" />
          </button>
        ))}
      </div>
    </div>
  );
}

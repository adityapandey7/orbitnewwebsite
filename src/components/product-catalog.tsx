"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { getCategoryByPath, pillars, type Pillar } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

export function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Pillar | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (active) {
        const cat = getCategoryByPath(p.category);
        if (!cat || cat.pillar !== active) return false;
      }
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.applications.some((a) => a.toLowerCase().includes(q))
      );
    });
  }, [query, active]);

  const activeName = active ? pillars.find((p) => p.key === active)?.name : null;

  return (
    <div>
      {/* search */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, brands or applications…"
          className="input !pl-11"
          aria-label="Search products"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* product-group filter */}
      <div className="no-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={cn("chip shrink-0 !px-3.5 !py-1.5", !active && "chip-accent")}
        >
          All products
        </button>
        {pillars.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => setActive((cur) => (cur === p.key ? null : p.key))}
            className={cn("chip shrink-0 !px-3.5 !py-1.5", active === p.key && "chip-accent")}
          >
            {p.name}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-slate-500">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
        {activeName ? ` in ${activeName}` : " across the full catalogue"}
        {query && <> matching &ldquo;{query}&rdquo;</>}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="surface mt-6 p-10 text-center">
          <p className="font-bold text-[#002f49]">No products match your search.</p>
          <p className="mt-1 text-sm text-slate-600">
            Try a different keyword — or tell us what you need and we&apos;ll source it.
          </p>
          <Link href="/contact-us#quote" className="btn btn-accent mt-5">
            Request a quote
          </Link>
        </div>
      )}
    </div>
  );
}
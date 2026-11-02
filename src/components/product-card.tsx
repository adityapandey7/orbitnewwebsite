import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategoryByPath } from "@/data/categories";
import type { Product } from "@/data/products";
import { InstrumentArt } from "@/components/instrument-art";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryByPath(product.category);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="surface surface-hover group flex flex-col overflow-hidden"
    >
      <div className="relative border-b border-slate-100 bg-[#f5f5f5]">
        <InstrumentArt
          seed={product.slug}
          view={0}
          className="w-full transition duration-300 group-hover:scale-[1.02]"
        />
        {product.brand && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#a35a00] ring-1 ring-slate-200">
            {product.brand}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {category && (
          <p className="text-xs font-semibold uppercase tracking-wide text-[#c4620a]">
            {category.name}
          </p>
        )}
        <h3 className="mt-1 font-bold leading-snug text-[#002f49] group-hover:text-[#c4620a]">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
          {product.tagline}
        </p>
        <span className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-400">
          View details
          <ArrowRight className="h-4 w-4 text-[#c4620a] transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
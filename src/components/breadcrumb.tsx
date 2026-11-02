import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; href?: string };

/**
 * Crawlable breadcrumb with an BreadcrumbList JSON-LD block. "Home" is always
 * item 1, matching the live site's Rank Math output.
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  const all = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href || undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-x flex flex-wrap items-center gap-x-1.5 gap-y-1 py-2.5 text-[13px] text-slate-500">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-medium transition hover:text-[#c4620a]"
        >
          <Home className="h-3.5 w-3.5" /> Home
        </Link>
        {items.map((c, i) => (
          <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            {c.href ? (
              <Link
                href={c.href}
                className="font-medium text-[#c4620a] transition hover:underline"
              >
                {c.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-700">{c.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
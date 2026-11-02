import Link from "next/link";
import { ArrowRight, Layers, Quote } from "lucide-react";
import { Breadcrumb, type Crumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import {
  ancestorsOf,
  categories,
  childrenOf,
  getCategoryByPath,
  type Category,
} from "@/data/categories";
import { products, productsByCategory } from "@/data/products";
import { site } from "@/data/site";

const KIND_EYEBROW: Record<Category["kind"], string> = {
  pillar: "Product range",
  section: "Product category",
  subsection: "Sub-category",
};

function childrenFor(category: Category): Category[] {
  if (category.kind === "pillar") {
    // Sections are parent: null in the registry — group them by pillar.
    return categories.filter(
      (c) =>
        c.kind === "section" &&
        c.pillar === category.pillar &&
        c.path !== category.path,
    );
  }
  return childrenOf(category.path);
}

function productsFor(category: Category) {
  if (category.kind === "pillar") {
    return products.filter(
      (p) => getCategoryByPath(p.category)?.pillar === category.pillar,
    );
  }
  return productsByCategory(category.path, { deep: true });
}

/** Breadcrumb: Home > ancestors > self (ancestorsOf includes self at depth 1). */
function crumbsFor(category: Category): Crumb[] {
  const ancestors = ancestorsOf(category.path)
    .filter((a) => a.path !== category.path)
    .map((a) => ({ label: a.name, href: `/${a.path}/` }));
  return [...ancestors, { label: category.name }];
}

export function CategoryView({ category }: { category: Category }) {
  const children = childrenFor(category);
  const items = productsFor(category);
  const guide = category.guide.filter((p) => p.trim() !== category.blurb.trim());

  return (
    <div>
      <Breadcrumb items={crumbsFor(category)} />
      <PageHero
        eyebrow={KIND_EYEBROW[category.kind]}
        title={category.name}
        subtitle={category.blurb}
      />

      {/* sub-categories / sections */}
      {children.length > 0 && (
        <section className="container-x mt-10">
          <SectionHeading
            eyebrow={category.kind === "pillar" ? "Ranges within this line" : "Sub-categories"}
            title={
              category.kind === "pillar"
                ? `Browse ${category.name}`
                : `More in ${category.name}`
            }
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {children.map((c) => {
              const count = productsFor(c).length;
              return (
                <Link
                  key={c.path}
                  href={`/${c.path}/`}
                  className="surface surface-hover group flex flex-col p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold leading-snug text-[#002f49] group-hover:text-[#c4620a]">
                      {c.name}
                    </h3>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#c4620a] transition group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {c.blurb}
                  </p>
                  <span className="mt-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    <Layers className="h-3.5 w-3.5" />
                    {count} {count === 1 ? "product" : "products"}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* products */}
      <section className="container-x mt-12 pb-4">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={`${items.length} ${items.length === 1 ? "product" : "products"}`}
            title={
              children.length > 0
                ? `Featured in ${category.name}`
                : `${category.name} products`
            }
            subtitle="Supply, installation, training and after-sales service included across India."
          />
          <Link href="/contact-us#quote" className="btn btn-outline shrink-0">
            Get a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {items.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div className="surface flex flex-col items-start gap-3 p-8">
            <p className="font-bold text-[#002f49]">
              Products for {category.name} are being curated.
            </p>
            <p className="text-sm text-slate-600">
              Tell us what you need and our engineers will respond with the right
              configuration and pricing.
            </p>
            <Link href="/contact-us#quote" className="btn btn-accent">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>

      {/* editorial guide */}
      {guide.length > 0 && (
        <section className="band border-y border-slate-200 py-14">
          <div className="container-x max-w-4xl">
            <SectionHeading
              eyebrow="Buyer's guide"
              title={`About ${category.name}`}
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600">
              {guide.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {category.faq.length > 0 && (
        <section className="container-x py-14">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title={`Common questions about ${category.name}`}
          />
          <div className="mt-8">
            <FaqAccordion items={category.faq} />
          </div>
        </section>
      )}

      {/* quote band */}
      <section className="quote-band relative overflow-hidden py-14 text-white">
        <div className="container-x relative text-center">
          <Quote className="mx-auto h-8 w-8 text-[#ffb347]" />
          <p className="mx-auto mt-5 max-w-3xl text-2xl font-black tracking-tight sm:text-3xl">
            Need help selecting the right instrument?
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Our engineers help you right from product selection and purchase
            through installation, training and after-sales support — anywhere in India.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact-us#quote" className="btn btn-accent">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.phones.sales1.replace(/[^+\d]/g, "")}`}
              className="btn border border-white/25 bg-white/10 text-white hover:bg-white/20"
            >
              Call sales: {site.phones.sales1}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Globe, Phone, Quote, Tag } from "lucide-react";
import { Breadcrumb, type Crumb } from "@/components/breadcrumb";
import { InstrumentArt } from "@/components/instrument-art";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { ancestorsOf, getCategoryByPath } from "@/data/categories";
import {
  getProduct,
  productCode,
  products,
  productsByCategory,
} from "@/data/products";
import { site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return { title: p.name, description: p.tagline };
}

function crumbsFor(productSlug: string): Crumb[] {
  const p = getProduct(productSlug)!;
  const cat = getCategoryByPath(p.category);
  const crumbs: Crumb[] = [{ label: "Products", href: "/products" }];
  if (cat) {
    for (const a of ancestorsOf(cat.path)) {
      if (a.path !== cat.path) crumbs.push({ label: a.name, href: `/${a.path}/` });
    }
    crumbs.push({ label: cat.name, href: `/${cat.path}/` });
  }
  crumbs.push({ label: p.name });
  return crumbs;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const cat = getCategoryByPath(product.category);
  const inCategory = productsByCategory(product.category, { deep: true }).filter(
    (p) => p.slug !== product.slug,
  );
  const inPillar = cat
    ? products.filter(
        (p) =>
          p.slug !== product.slug &&
          getCategoryByPath(p.category)?.pillar === cat.pillar &&
          !inCategory.some((x) => x.slug === p.slug),
      )
    : [];
  const related = [...inCategory, ...inPillar].slice(0, 4);

  return (
    <div>
      <Breadcrumb items={crumbsFor(slug)} />

      {/* ------------------------------- main ------------------------------- */}
      <section className="container-x grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_1.15fr]">
        {/* visual + quick facts */}
        <div>
          <div className="surface overflow-hidden p-0">
            <div className="border-b border-slate-100 bg-[#f5f5f5]">
              <InstrumentArt seed={product.slug} view={0} className="w-full" />
            </div>
            <dl className="divide-y divide-slate-100 text-sm">
              <div className="flex justify-between gap-4 px-5 py-3">
                <dt className="font-semibold text-slate-500">Catalogue no.</dt>
                <dd className="font-mono font-semibold text-[#002f49]">
                  {productCode(product)}
                </dd>
              </div>
              {product.brand && (
                <div className="flex justify-between gap-4 px-5 py-3">
                  <dt className="font-semibold text-slate-500">Brand</dt>
                  <dd className="font-semibold text-[#002f49]">{product.brand}</dd>
                </div>
              )}
              {product.origin && (
                <div className="flex justify-between gap-4 px-5 py-3">
                  <dt className="font-semibold text-slate-500">Origin</dt>
                  <dd className="flex items-center gap-1.5 font-semibold text-[#002f49]">
                    <Globe className="h-4 w-4 text-[#c4620a]" /> {product.origin}
                  </dd>
                </div>
              )}
              {cat && (
                <div className="flex justify-between gap-4 px-5 py-3">
                  <dt className="font-semibold text-slate-500">Category</dt>
                  <dd>
                    <Link
                      href={`/${cat.path}/`}
                      className="font-semibold text-[#c4620a] hover:underline"
                    >
                      {cat.name}
                    </Link>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="mt-5 space-y-3">
            <Link href="/contact-us#quote" className="btn btn-accent w-full justify-center">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.phones.sales1.replace(/[^+\d]/g, "")}`}
              className="btn btn-outline w-full justify-center"
            >
              <Phone className="h-4 w-4" /> {site.phones.sales1}
            </a>
          </div>
        </div>

        {/* copy */}
        <div>
          {cat && (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c4620a]">
              {cat.name}
            </p>
          )}
          <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight text-[#002f49] sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {product.tagline}
          </p>
          {product.description && product.description !== product.tagline && (
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              {product.description.replace(/\[…\]/g, "").trim()}
            </p>
          )}

          {/* specs */}
          {product.specs && product.specs.length > 0 && (
            <div className="mt-8">
              <h2 className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-[#002f49]">
                <Tag className="h-5 w-5 text-[#c4620a]" /> Technical specifications
              </h2>
              <table className="mt-3 w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                <tbody className="divide-y divide-slate-100">
                  {product.specs.map(([k, v]) => (
                    <tr key={k} className="odd:bg-white even:bg-[#fffbf5]">
                      <th
                        scope="row"
                        className="w-[42%] px-4 py-2.5 text-left align-top font-semibold text-slate-600"
                      >
                        {k}
                      </th>
                      <td className="px-4 py-2.5 align-top text-slate-800">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* features */}
          {product.features.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-extrabold tracking-tight text-[#002f49]">
                Key features
              </h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 rounded-lg bg-[#fff3e6] px-3 py-2 text-sm text-slate-700"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c4620a]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* applications */}
          {product.applications.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-extrabold tracking-tight text-[#002f49]">
                Applications
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <li key={a} className="chip">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------ related ------------------------------ */}
      {related.length > 0 && (
        <section className="band border-t border-slate-200 py-14">
          <div className="container-x">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="You may also need"
                title="Related products"
              />
              <Link href="/products" className="btn btn-outline shrink-0">
                All products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* -------------------------------- CTA -------------------------------- */}
      <section className="quote-band relative overflow-hidden py-14 text-white">
        <div className="container-x relative text-center">
          <Quote className="mx-auto h-8 w-8 text-[#ffb347]" />
          <p className="mx-auto mt-5 max-w-3xl text-2xl font-black tracking-tight sm:text-3xl">
            {product.name} — pricing & availability
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Tell us your application and throughput requirements — our engineers
            will recommend the right configuration, with installation, training
            and after-sales support included.
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
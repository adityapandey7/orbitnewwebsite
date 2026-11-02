import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  MapPin,
  Quote,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { pillars, megaMenu } from "@/data/categories";
import { industries } from "@/data/industries";
import { stats, whyChooseUs, partners, site } from "@/data/site";
import { latestNews, events, latestProducts } from "@/data/news";
import { CategoryIcon, IndustryIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { ProductGallery } from "@/components/product-gallery";
import { Carousel } from "@/components/carousel";
import { cn, withBasePath } from "@/lib/utils";

/** Real industry photography (mirrors the reference site's feature grid). */
/** Real industry photography; the two industries without a photo use an icon tile. */
const industryPhotos: Record<string, string> = {
  "coal-coke-fuels": "/images/industries/fuels-energy.jpg",
  cement: "/images/industries/cement-steel.jpg",
  "minerals-mining": "/images/industries/minerals-materials.jpg",
  "chemicals-petrochemicals": "/images/industries/chemical-pharmaceutical.jpg",
  "food-agriculture": "/images/industries/food-agriculture.jpg",
  "research-education": "/images/industries/research-education.jpg",
};

const valueIcons = [Settings, ShieldCheck, Wrench, Users];

const trustPoints = [
  "Exclusive distributor for Parr Instrument Company, USA",
  "ISO-certified group manufacturing",
  "Pan-India sales & service",
];

export default function HomePage() {
  return (
    <div>
      {/* -------------------------------- hero -------------------------------- */}
      <section className="hero-light border-b border-slate-200">
        <div className="container-x grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="rise-in eyebrow">
              Manufacturer &amp; Distributor · Hyderabad, India
            </p>
            <h1 className="rise-in rise-in-1 mt-4 text-3xl font-black leading-tight tracking-tight text-[#002f49] sm:text-5xl">
              Your trusted technology partner for coal, mineral &amp; material
              analysis instruments
            </h1>
            <p className="rise-in rise-in-2 mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              {site.description}
            </p>
            <div className="rise-in rise-in-3 mt-8 flex flex-wrap items-center gap-3">
              <Link href="/products" className="btn btn-accent">
                Explore products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact-us#quote" className="btn btn-outline">
                Request a quote
              </Link>
            </div>
            <ul className="rise-in rise-in-3 mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
              {trustPoints.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[#15803d]" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rise-in rise-in-2">
            <ProductGallery
              seed="orbit-technologies"
              badge="35+ years · 7,000+ customers"
            />
          </div>
        </div>
      </section>

      {/* ------------------------- latest events carousel ------------------------- */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="container-x">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Meet us in person"
              title="Latest events"
              subtitle="Catch Orbit at the industry's leading exhibitions — see what we're demonstrating and where to find us next."
            />
            <Link href="/news" className="btn btn-outline shrink-0">
              All events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Carousel label="Latest events">
            {events.filter((e) => e.image).map((e) => {
              const slide = (
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-[#f6dcc4]">
                  <div className="relative aspect-[16/7] overflow-hidden bg-[#f5f5f5]">
                    <Image
                      src={withBasePath(e.image!)}
                      alt={`${e.show} — ${e.location}`}
                      fill
                      sizes="(min-width: 1024px) 44vw, (min-width: 640px) 58vw, 86vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-4">
                    <p className="flex items-center gap-2 text-xs font-semibold text-[#c4620a]">
                      <CalendarDays className="h-3.5 w-3.5" /> {e.date}
                    </p>
                    <h3 className="mt-1.5 font-bold text-[#002f49]">{e.show}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
                      <MapPin className="h-3.5 w-3.5 shrink-0" /> {e.location}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{e.hall}</p>
                  </div>
                </article>
              );
              const sizing = "w-[86%] shrink-0 snap-start sm:w-[58%] lg:w-[44%]";
              return e.href ? (
                <a
                  key={e.show + e.date}
                  href={e.href}
                  target="_blank"
                  rel="noreferrer"
                  className={sizing}
                >
                  {slide}
                </a>
              ) : (
                <div key={e.show + e.date} className={sizing}>
                  {slide}
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>

      {/* -------------------------------- stats -------------------------------- */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "border-slate-200 px-4 py-9 text-center",
                i % 2 === 0 ? "border-r" : "",
                i < 2 ? "border-b lg:border-b-0" : "",
                "lg:border-r lg:last:border-r-0",
              )}
            >
              <p className="text-3xl font-black tracking-tight text-[#c4620a] sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------- latest products carousel ------------------------- */}
      <section className="band border-b border-slate-200 py-12">
        <div className="container-x">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Fresh off the catalogue"
              title="Latest products"
              subtitle="The newest additions to our range of analytical and laboratory instruments."
            />
            <Link href="/products" className="btn btn-outline shrink-0">
              All products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Carousel label="Latest products">
            {latestProducts.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group w-[72%] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-[#f6dcc4] hover:shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)] sm:w-[44%] lg:w-[30%] xl:w-[23%]"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-slate-100 bg-[#f5f5f5]">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#c4620a] ring-1 ring-slate-200">
                    {p.badge}
                  </span>
                  <Image
                    src={withBasePath(p.image)}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 44vw, 72vw"
                    className="object-contain p-4 transition duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#c4620a]">
                    {p.category}
                  </p>
                  <h3 className="mt-1 text-sm font-bold leading-snug text-[#002f49]">
                    {p.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c4620a]">
                    View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ------------------------------ pillar ranges ------------------------------ */}
      <section className="dark-band py-14">
        <div className="container-x">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              dark
              eyebrow="What we supply"
              title="Five product ranges, one supplier"
              subtitle="We supply, install and service high-quality scientific and specialised equipment across five ranges — from calorimeters to certified reference materials."
            />
            <Link href="/products" className="btn btn-accent shrink-0">
              All products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {pillars.map((p) => {
              const group = megaMenu.find((g) => g.key === p.key);
              const href = p.path ? `/${p.path}/` : "/milling-pulverising/";
              return (
                <Link
                  key={p.key}
                  href={href}
                  className="surface surface-hover group flex flex-col p-5"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdeedd] text-[#c4620a] transition group-hover:bg-[#c4620a] group-hover:text-white">
                    <CategoryIcon slug={p.path || "milling-pulverising"} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold leading-snug text-[#002f49]">{p.name}</h3>
                  <ul className="mt-3 flex-1 space-y-1.5 text-sm text-slate-600">
                    {group?.links.slice(0, 4).map(([label]) => (
                      <li key={label} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c4620a]" />
                        {label}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#c4620a]">
                    Explore range
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------ industries ------------------------------ */}
      <section className="band border-y border-slate-200 py-14">
        <div className="container-x">
          <SectionHeading
            eyebrow="Featured industries"
            title="Serving labs across India's core industries"
            subtitle="We supply, install and service high-quality scientific equipment for a wide variety of industry applications."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div key={ind.slug} className="surface group overflow-hidden p-0">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-100 bg-[#f5f5f5]">
                  {industryPhotos[ind.slug] ? (
                    <Image
                      src={withBasePath(industryPhotos[ind.slug])}
                      alt={`${ind.name} industry applications`}
                      fill
                      sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#002f49] to-[#001c2c]">
                      <IndustryIcon slug={ind.slug} className="h-16 w-16 text-[#ffb347]" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff3e6] text-[#c4620a]">
                      <IndustryIcon slug={ind.slug} className="h-5 w-5" />
                    </span>
                    <h3 className="font-bold text-[#002f49]">{ind.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {ind.blurb}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {ind.instruments.map((i) => (
                      <li key={i} className="chip">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ why choose us ------------------------------ */}
      <section className="dark-band py-14">
        <div className="container-x">
          <SectionHeading
            dark
            align="center"
            eyebrow="Why choose us"
            title="Complete solutions, start to after-sales"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => {
              const Icon = valueIcons[i] ?? Settings;
              return (
                <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#c4620a] text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold text-white">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    {w.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------ partners ------------------------------ */}
      <section className="band border-y border-slate-200 py-14">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Our partners"
            title="Proudly representing prestigious global brands"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div key={p.name} className="surface p-5">
                <p className="font-bold text-[#002f49]">{p.name}</p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-[#c4620a]">
                  {p.country}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ news & events ------------------------------ */}
      <section className="container-x grid gap-8 py-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="text-xl font-extrabold tracking-tight text-[#002f49] sm:text-2xl">
              Latest news
            </h2>
            <Link
              href="/news"
              className="btn btn-outline btn-sm shrink-0 text-xs"
            >
              All news <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <ul className="space-y-3">
            {latestNews.slice(0, 4).map((n) => (
              <li key={n.title} className="surface flex items-start gap-4 p-4">
                <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-[#fdeedd] text-[#c4620a]">
                  <span className="text-[10px] font-bold uppercase leading-none">
                    {n.date.split(" ")[0]}
                  </span>
                  <span className="text-sm font-black leading-tight">
                    {n.date.split(" ")[1]}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#c4620a]">
                    {n.category}
                  </p>
                  <p className="mt-0.5 font-bold text-[#002f49]">{n.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {n.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="surface overflow-hidden p-0">
            <div className="relative aspect-[16/7] bg-[#f5f5f5]">
              <Image
                src={withBasePath("/images/inner-banner.jpg")}
                alt="Orbit Technologies laboratory instruments"
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-start gap-4 p-5">
              <Image
                src={withBasePath("/badge-35.jpg")}
                alt="35 years of service"
                width={96}
                height={64}
                className="h-16 w-auto shrink-0"
              />
              <div>
                <h2 className="text-lg font-extrabold tracking-tight text-[#002f49]">
                  Serving Indian industry for 35 years
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  From product selection and purchase through installation,
                  training and after-sales support — trusted by 7,000+ customers
                  across the country.
                </p>
                <Link href="/about-us" className="btn btn-outline mt-4">
                  About Orbit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------- quote band -------------------------------- */}
      <section className="quote-band relative overflow-hidden py-14 text-white">
        <div className="container-x relative text-center">
          <Quote className="mx-auto h-8 w-8 text-[#ffb347]" />
          <p className="mx-auto mt-5 max-w-3xl text-2xl font-black tracking-tight sm:text-3xl">
            Need help selecting the right instrument?
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Our engineers help you right from product selection and purchase
            through installation, training and after-sales support — anywhere in
            India.
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

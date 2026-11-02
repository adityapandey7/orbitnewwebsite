import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Factory, Globe2, Handshake } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { partners, groupCompanies, branchOffices, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Orbit Technologies Pvt. Ltd. — 35 years of complete solutions for coal, mineral, material and environmental analysis. Manufacturer, distributor and pan-India service network from Hyderabad.",
};

const clientSectors = [
  "Coal & Coke",
  "Mineral & Metal",
  "Pharmaceutical",
  "Food & Agriculture",
  "Cement",
  "R&D Institutes",
  "Universities & Educational Institutes",
  "Thermal Power Plants",
  "Refineries",
  "Petroleum",
  "Steel",
  "Chemicals",
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title="35 years of complete solutions for analytical laboratories"
        subtitle="From its Hyderabad headquarters, Orbit Technologies Pvt. Ltd. has served a diverse national clientele across coal, mineral, material and environmental analysis — as a manufacturer, a distributor and a service partner."
      />

      {/* intro + stats */}
      <section className="container-x mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#002f49] sm:text-3xl">
            A trusted technology partner, not just a supplier
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Orbit Technologies Pvt. Ltd. has been providing comprehensive solutions to
            customers for coal, mineral, material and environmental analysis for over 30
            years. Our corporate headquarters, centrally located in Hyderabad, is equipped
            with state-of-the-art infrastructure to effectively support and serve our
            diverse clientele.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Our product range is extensive, covering industries such as fuel &amp; energy,
            minerals &amp; materials, cement, steel, chemical, pharmaceutical, food &amp;
            agriculture, research &amp; development and educational institutes. With a
            pan-India presence, we cater to a substantial customer base throughout the
            country.
          </p>
          <Link href="/contact-us#quote" className="btn btn-accent mt-6">
            Talk to our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="surface p-5 text-center">
              <p className="text-3xl font-black tracking-tight text-[#c4620a]">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------ manufacturer ------------------------------ */}
      <section id="manufacturer" className="band mt-16 scroll-mt-28 border-y border-slate-200 py-14">
        <div className="container-x">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#c4620a] text-white">
              <Factory className="h-5 w-5" />
            </span>
            <div>
              <p className="eyebrow">Manufacturing</p>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#002f49] sm:text-3xl">
                Orbit as a Manufacturer
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="leading-relaxed text-slate-600">
                Our journey into manufacturing began in 1998 with our group company,{" "}
                <strong className="text-slate-800">Orlab Instruments Pvt. Ltd.</strong>, an
                ISO-certified and MSME-registered manufacturer specialising in water &amp;
                soil testing kits and laboratory and field instruments for water and
                wastewater. Orlab operates a 30,000 sq. ft. manufacturing facility with an
                annual production capacity exceeding 200,000 testing kits.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Orbit Technologies has since emerged as a key player in the analytical
                industry, making significant strides in manufacturing high-end,
                world-class elemental analysers — a success bolstered by the acquisition of{" "}
                <strong className="text-slate-800">Sylab S.A.R.L., France</strong>. Since
                then, Orbit has been manufacturing Carbon &amp; Sulphur analysers, Ash
                Fusion analysers, Proximate/Thermogravimetric analysers and Pyrolysers in
                India, serving organic, inorganic and synthetic sample materials — coal,
                coke, fuel oils, soil, biomass, waste, plant materials, tobacco, steel,
                iron, alloys, ceramics, food and feed.
              </p>
            </div>
            <div className="space-y-4">
              {groupCompanies.map((g) => (
                <div key={g.name} className="surface p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold text-[#002f49]">{g.name}</h3>
                    {g.since && <span className="chip chip-accent">Since {g.since}</span>}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{g.detail}</p>
                </div>
              ))}
              <div className="surface p-6">
                <h3 className="font-bold text-[#002f49]">Orbit Group of Companies</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  A group united by one goal — bringing world-class analytical technology
                  to the Indian market, whether built here or represented from abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ distributor ------------------------------ */}
      <section id="distributor" className="container-x mt-16 scroll-mt-28">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#c4620a] text-white">
            <Handshake className="h-5 w-5" />
          </span>
          <div>
            <p className="eyebrow">Distribution</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#002f49] sm:text-3xl">
              Orbit as a Distributor
            </h2>
          </div>
        </div>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="leading-relaxed text-slate-600">
              As trusted distributors for globally renowned brands, we offer an extensive
              range of products serving fuel &amp; energy, minerals &amp; materials,
              cement, steel, chemicals, pharmaceuticals, food &amp; agriculture, research
              &amp; development and educational institutions.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              We have established ourselves as a prominent player in the Indian market as
              the exclusive distributor for{" "}
              <strong className="text-slate-800">Parr Instrument Company, USA</strong> —
              covering automatic, solution and semi-micro calorimeters, power-compensation
              reaction calorimeters, stirred and non-stirred pressure vessels,
              multi-reactor systems, custom reactors, supercritical fluid extraction
              systems and acid &amp; microwave digestion vessels.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our partnership with <strong className="text-slate-800">SIEBTECHNIK TEMA GmbH, Germany</strong>{" "}
              brings advanced milling, pulverising and sieving equipment, while{" "}
              <strong className="text-slate-800">Elemental Microanalysis Ltd, UK</strong>{" "}
              supplies standards and consumables for all brands of elemental analysers.
              Headquartered in Hyderabad, our professional, well-trained sales &amp; service
              teams provide exceptional support to our diverse client base across the
              country.
            </p>
          </div>
          <div className="surface p-6">
            <Globe2 className="h-6 w-6 text-[#c4620a]" />
            <h3 className="mt-3 font-bold text-[#002f49]">Pan-India branch offices</h3>
            <p className="mt-1.5 text-sm text-slate-600">
              Sales and service locations within reach of every customer.
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {branchOffices.map((b) => (
                <li key={b} className="chip">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-extrabold tracking-tight text-[#002f49]">
            Our partners
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div key={p.name} className="surface p-5">
                <p className="font-bold text-[#002f49]">{p.name}</p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-[#c4620a]">
                  {p.country}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- clients -------------------------------- */}
      <section id="clients" className="band mt-16 scroll-mt-28 border-y border-slate-200 py-14">
        <div className="container-x">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#c4620a] text-white">
              <Building2 className="h-5 w-5" />
            </span>
            <div>
              <p className="eyebrow">Our clients</p>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#002f49] sm:text-3xl">
                A vast and eminent clientele
              </h2>
            </div>
          </div>
          <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">
            Over 30 years of service have earned the trust of more than 7,000 customers —
            an eminent and vast clientele from diverse fields across India and abroad.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {clientSectors.map((c) => (
              <li key={c} className="surface flex items-center gap-3 p-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#c4620a]" />
                <span className="text-sm font-semibold text-[#002f49]">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

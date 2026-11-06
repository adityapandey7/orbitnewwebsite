import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Flame,
  Factory,
  Pickaxe,
  Beaker,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { withBasePath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Clients | 7,000+ Installations Across India | Orbit Technologies",
  description:
    "Orbit Technologies is trusted by India's largest power producers, steel manufacturers, coal corporations, CSIR institutes, IITs, and testing laboratories including NTPC, Tata Steel, JSW, Coal India, and Reliance.",
};

const CLIENT_LOGOS = [
  { src: "/images/orbit/client1.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client2.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client3.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client4.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client5.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client6.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client7.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client8.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client9.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client10.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client11.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client12.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client13.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client14.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client15.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client16.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client17.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client18.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client19.jpg", alt: "Client Partner" },
  { src: "/images/orbit/client20.jpg", alt: "Client Partner" },
  { src: "/images/orbit/shreecement.jpg", alt: "Shree Cement" },
  { src: "/images/orbit/ambujacement.jpg", alt: "Ambuja Cement" },
  { src: "/images/orbit/bharatpetroleum.jpg", alt: "Bharat Petroleum" },
  { src: "/images/orbit/CentralAgriculture.jpg", alt: "Central Agriculture University" },
  { src: "/images/orbit/GFL.jpg", alt: "Gujarat Fluorochemicals" },
  { src: "/images/orbit/HBL.jpg", alt: "HBL Power Systems" },
  { src: "/images/orbit/kesoram.jpg", alt: "Kesoram Industries" },
  { src: "/images/orbit/mangalamcement.jpg", alt: "Mangalam Cement" },
  { src: "/images/orbit/mpl.jpg", alt: "Maithon Power Limited" },
  { src: "/images/orbit/ministry.jpg", alt: "Ministry of Defence" },
];

const SECTORS = [
  {
    sector: "Thermal Power & Energy Utilities",
    icon: Flame,
    clients: [
      "NTPC Limited",
      "Tata Power",
      "Adani Power",
      "Damodar Valley Corporation (DVC)",
      "Reliance Power",
      "CESC Limited",
      "APGENCO",
      "TSGENCO",
      "Mahagenco",
      "WBPDCL",
    ],
  },
  {
    sector: "Steel & Metallurgical Plants",
    icon: Factory,
    clients: [
      "Tata Steel Limited",
      "JSW Steel",
      "Steel Authority of India (SAIL)",
      "Jindal Steel & Power (JSPL)",
      "Vedanta Limited / BALCO",
      "Hindalco Industries",
      "ArcelorMittal Nippon Steel (AM/NS)",
    ],
  },
  {
    sector: "Coal Mining & Mineral Resources",
    icon: Pickaxe,
    clients: [
      "Coal India Limited (CIL)",
      "Singareni Collieries Company (SCCL)",
      "NMDC Limited",
      "Central Mine Planning & Design (CMPDI)",
      "Tata Steel Mining",
      "South Eastern Coalfields (SECL)",
      "Eastern Coalfields (ECL)",
    ],
  },
  {
    sector: "Cement & Building Materials",
    icon: Building2,
    clients: [
      "UltraTech Cement Limited",
      "ACC Limited",
      "Ambuja Cements",
      "Shree Cement Limited",
      "Dalmia Bharat Cement",
      "J.K. Cement",
      "Mangalam Cement",
      "India Cements",
    ],
  },
  {
    sector: "Petroleum Refineries & Chemicals",
    icon: Beaker,
    clients: [
      "Reliance Industries Limited (RIL)",
      "Indian Oil Corporation (IOCL)",
      "Bharat Petroleum (BPCL)",
      "Hindustan Petroleum (HPCL)",
      "Oil & Natural Gas Corporation (ONGC)",
      "GAIL (India) Limited",
      "Gujarat Fluorochemicals (GFL)",
    ],
  },
  {
    sector: "Premier Research & Universities (CSIR & IITs)",
    icon: GraduationCap,
    clients: [
      "CSIR-CIMFR",
      "CSIR-IICT",
      "CSIR-NML",
      "CSIR-NCL",
      "IIT Bombay",
      "IIT Madras",
      "IIT Delhi",
      "IIT Kharagpur",
      "IIT Roorkee",
      "IIT Kanpur",
      "Indian Institute of Science (IISc)",
      "Bhabha Atomic Research Centre (BARC)",
      "DRDO Laboratories",
    ],
  },
  {
    sector: "Testing & Inspection Laboratories (TIC)",
    icon: ShieldCheck,
    clients: [
      "SGS India",
      "Bureau Veritas India",
      "Intertek India",
      "Inspectorate Griffith",
      "Vimta Labs",
      "Mitra S.K.",
    ],
  },
];

export default function ClientsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Clients · Orbit Technologies Pvt. Ltd.",
    description:
      "Orbit Technologies serves over 7,000 testing laboratories across India including NTPC, Tata Steel, JSW, Coal India, Reliance, CSIR institutes, and IITs.",
  };

  return (
    <div className="bg-white">
      <JsonLd data={schema} />
      <Breadcrumb
        items={[
          { label: "Our Clients" },
        ]}
      />

      <PageHero
        title="Our Clients"
        subtitle="Trusted by over 7,000 testing laboratories, premier research institutions, and industrial leaders across India for 35+ years."
      />

      {/* 1. Client Logos Showcase */}
      <section className="container-x py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
            Partnering With India&apos;s Foremost Organizations
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A representative selection of government corporations, Fortune 500 enterprises, and research bodies equipped by Orbit Technologies.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="flex h-24 sm:h-28 items-center justify-center rounded-xl border border-slate-200 bg-white p-3 shadow-xs transition hover:border-[#0056B3]/40 hover:shadow-sm"
            >
              <div className="relative h-full w-full">
                <Image
                  src={withBasePath(client.src)}
                  alt={client.alt}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 150px, 180px"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Key Clients Grouped by Industry */}
      <section className="border-t border-slate-200 bg-slate-50/70 py-12 sm:py-16">
        <div className="container-x space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0056B3] sm:text-3xl">
              Major Installations by Sector
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our instruments and support engineers serve mission-critical quality control and R&amp;D divisions across core industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ebf3fc] text-[#0056B3]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {group.sector}
                      </h3>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.clients.map((c) => (
                        <span
                          key={c}
                          className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Proven Numbers / Trust Strip */}
      <section className="border-t border-slate-200 bg-[#001c3d] py-12 text-white">
        <div className="container-x grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#93c5fd]">35+</p>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">Years of Service</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#93c5fd]">7,000+</p>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">Instrument Installations</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#93c5fd]">14</p>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">Direct Branch Offices</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#93c5fd]">24-48h</p>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">On-Site Support Response</p>
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="container-x py-14">
        <div className="overflow-hidden rounded-2xl bg-[#0056B3] p-8 text-white sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              Ready to Upgrade Your Laboratory?
            </h3>
            <p className="mt-2 text-sm text-slate-200 max-w-xl leading-relaxed">
              Speak with our senior application engineering team to discuss testing standards, instrument specifications, or customer site references.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/contact-us#quote" className="btn btn-accent shadow-md">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

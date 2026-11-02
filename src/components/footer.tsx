import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { site, branchOffices } from "@/data/site";
import { megaMenu } from "@/data/categories";
import { withBasePath } from "@/lib/utils";

const companyLinks = [
  { href: "/about-us", label: "About us" },
  { href: "/about-us#manufacturer", label: "Orbit as a Manufacturer" },
  { href: "/about-us#distributor", label: "Orbit as a Distributor" },
  { href: "/about-us#clients", label: "Our Clients" },
  { href: "/news", label: "News & Events" },
  { href: "/contact-us", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-[#002f49] text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* brand */}
        <div>
          <Image
            src={withBasePath("/logo-white.png")}
            alt="Orbit Technologies"
            width={150}
            height={60}
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Complete solutions for coal, mineral, material and environmental analysis —
            manufacturing and distribution backed by 35 years of service.
          </p>
          <div className="mt-5 space-y-2.5 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-2 transition hover:text-white"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#ffb347]" /> {site.email}
            </a>
            <a
              href={`tel:${site.phones.office.replace(/[^+\d]/g, "")}`}
              className="flex items-start gap-2 transition hover:text-white"
            >
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#ffb347]" /> {site.phones.office}
            </a>
            <p className="flex items-start gap-2 text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ffb347]" />
              <span>
                {site.address.line1},<br />
                {site.address.city} – {site.address.pin}, {site.address.state}, {site.address.country}
              </span>
            </p>
          </div>
        </div>

        {/* products — the five pillars with their key sections */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Products</h3>
          <ul className="mt-4 space-y-4 text-sm">
            {megaMenu.map((group) => (
              <li key={group.key}>
                <Link
                  href={group.path ? `/${group.path}/` : "/products"}
                  className="font-semibold text-white transition hover:text-[#ffb347]"
                >
                  {group.name}
                </Link>
                <ul className="mt-1.5 space-y-1">
                  {group.links.slice(0, 3).map(([label, path]) => (
                    <li key={path}>
                      <Link
                        href={`/${path}/`}
                        className="text-slate-400 transition hover:text-[#ffb347]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <Link href="/products" className="text-sm font-semibold text-[#ffb347] hover:underline">
                All products →
              </Link>
            </li>
          </ul>
        </div>

        {/* company */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className="text-slate-400 transition hover:text-[#ffb347]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* presence */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Pan-India presence
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            Branch offices and service locations across the country:
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {branchOffices.map((b) => (
              <li
                key={b}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>Copyright © {new Date().getFullYear()} Orbit Technologies Pvt. Ltd. All Rights Reserved.</p>
          <p>Hyderabad · Telangana · India</p>
        </div>
      </div>
    </footer>
  );
}
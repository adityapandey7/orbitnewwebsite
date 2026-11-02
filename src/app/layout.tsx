import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { withBasePath } from "@/lib/utils";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Orbit Technologies — Analytical instruments for coal, mineral & material analysis",
    template: "%s · Orbit Technologies",
  },
  description:
    "For more than 30 years, Orbit Technologies Pvt. Ltd. has provided complete solutions for coal, mineral, material and environmental analysis — manufacturing and distributing elemental analysers and analytical instruments across India.",
  icons: {
    icon: withBasePath("/icon.svg"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { APP_URL, DEMO_EMAIL } from "@/lib/utils";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Platform overview", href: "/platform" },
      { label: "Customer experience", href: "/customer-experience" },
      { label: "Compliance & ESPR", href: "/compliance" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Solutions", href: "/solutions" },
      { label: "Customers", href: "/customer-experience" },
      { label: "Book a demo", href: "/book-demo" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo white />
            <p className="text-[13px] text-white/50 leading-relaxed max-w-xs">
              Digital identities for physical products.
            </p>
            <a
              href={`mailto:${DEMO_EMAIL}`}
              className="text-[13px] text-white/40 hover:text-white/70 transition-colors"
            >
              {DEMO_EMAIL}
            </a>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3 className="text-[10px] font-[500] text-white/30 uppercase tracking-[0.12em]">
                {col.heading}
              </h3>
              <nav className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()} Known Objects. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`${APP_URL}/login`}
              className="text-[11px] text-white/30 hover:text-white/60 transition-colors"
            >
              Log in
            </Link>
            <a
              href="/book-demo"
              className="text-[11px] text-white/30 hover:text-white/60 transition-colors"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

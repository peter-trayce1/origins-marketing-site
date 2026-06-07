import Link from "next/link";
import { Logo } from "@/components/Logo";
import { APP_URL, DEMO_EMAIL } from "@/lib/utils";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Platform overview", href: "/platform" },
      { label: "Customer Experience", href: "/customer-experience" },
      { label: "Passport builder", href: "/platform" },
      { label: "QR codes", href: "/platform" },
      { label: "Analytics", href: "/platform" },
      { label: "Integrations", href: "/platform" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Compliance & ESPR", href: "/compliance" },
      { label: "Pricing", href: "/pricing" },
      { label: "Solutions", href: "/solutions" },
      { label: "Resources", href: "/resources" },
      { label: "Book a demo", href: "/book-demo" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
      { label: "Cookie policy", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8E8E6]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="text-sm text-[#525252] leading-relaxed max-w-xs">
              The simplest way for fashion brands to create verified Digital Product Passports — QR codes, public pages and EU compliance built in.
            </p>
            <div className="flex flex-col gap-1">
              <a
                href={`mailto:${DEMO_EMAIL}`}
                className="text-sm text-[#525252] hover:text-[#0A0A0A] transition-colors"
              >
                {DEMO_EMAIL}
              </a>
            </div>
            {/* Compliance badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E8E6] text-xs font-medium text-[#525252] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] shrink-0" />
              EU ESPR 2026 ready
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-[#0A0A0A] uppercase tracking-widest">
                {col.heading}
              </h3>
              <nav className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#525252] hover:text-[#0A0A0A] transition-colors"
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
      <div className="border-t border-[#E8E8E6]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#8C8C8C]">© 2026 OriginsID Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href={`${APP_URL}/login`}
              className="text-xs text-[#8C8C8C] hover:text-[#525252] transition-colors"
            >
              Sign in
            </Link>
            <a
              href={`${APP_URL}/signup`}
              className="text-xs text-[#8C8C8C] hover:text-[#525252] transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

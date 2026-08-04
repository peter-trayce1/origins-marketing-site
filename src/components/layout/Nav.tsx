"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { APP_URL } from "@/lib/utils";

const navLinks = [
  { label: "Product", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-[13px] font-[500] text-[#72726D] hover:text-[#111111] transition-colors rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={`${APP_URL}/login`}
            className="text-[13px] font-[500] text-[#72726D] hover:text-[#111111] transition-colors"
          >
            Log in
          </Link>
          <a
            href="/book-demo"
            className="btn-primary"
          >
            Book a demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#72726D] hover:text-[#111111] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E6E6E2] bg-white">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-[13px] font-[500] text-[#72726D] hover:text-[#111111] transition-colors rounded hover:bg-[#F6F4F2]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-[#E6E6E2] my-2" />
            <Link
              href={`${APP_URL}/login`}
              className="px-3 py-2.5 text-[13px] font-[500] text-[#72726D] hover:text-[#111111] transition-colors rounded hover:bg-[#F6F4F2]"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <div className="pt-2">
              <a
                href="/book-demo"
                className="btn-primary w-full justify-center h-11 rounded"
                onClick={() => setMobileOpen(false)}
              >
                Book a demo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

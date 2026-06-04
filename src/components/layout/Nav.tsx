"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { APP_URL } from "@/lib/utils";

const navLinks = [
  { label: "Product", href: "/platform" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E8E6]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm text-[#525252] hover:text-[#0A0A0A] transition-colors rounded-lg hover:bg-[#F9F9F8]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={`${APP_URL}/login`}
            className="text-sm text-[#525252] hover:text-[#0A0A0A] transition-colors"
          >
            Sign in
          </Link>
          <a
            href={`${APP_URL}/signup`}
            className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-[#0E6EEA] text-white text-sm font-semibold hover:bg-[#0C5CD0] transition-colors"
          >
            Get started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#525252] hover:text-[#0A0A0A] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E8E8E6] bg-white">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-sm text-[#525252] hover:text-[#0A0A0A] transition-colors rounded-lg hover:bg-[#F9F9F8]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-[#E8E8E6] my-2" />
            <Link
              href={`${APP_URL}/login`}
              className="px-3 py-2.5 text-sm text-[#525252] hover:text-[#0A0A0A] transition-colors rounded-lg hover:bg-[#F9F9F8]"
              onClick={() => setMobileOpen(false)}
            >
              Sign in
            </Link>
            <div className="pt-2">
              <a
                href={`${APP_URL}/signup`}
                className="flex items-center justify-center h-11 rounded-xl bg-[#0E6EEA] text-white text-sm font-semibold hover:bg-[#0C5CD0] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get started free
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

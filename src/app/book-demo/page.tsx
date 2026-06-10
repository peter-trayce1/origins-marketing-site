import type { Metadata } from "next";
import { BookDemoForm } from "./BookDemoForm";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "See OriginsID in action. Book a 30-minute walkthrough tailored to your brand and product range.",
};

export default function BookDemoPage() {
  return (
    <section className="bg-white min-h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left — 40% */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <span className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
                Get started
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0A0A0A] leading-tight">
                Book a demo
              </h1>
              <p className="mt-4 text-base text-[#525252] leading-relaxed">
                See OriginsID in action. We&apos;ll walk you through the platform and
                help you understand how Digital Product Passports could work for
                your brand.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {[
                "30-minute video call",
                "No commitment required",
                "Tailored to your brand and product range",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F4F4F3] border border-[#E8E8E6] flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]" />
                  </div>
                  <span className="text-sm text-[#525252]">{point}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[#F9F9F8] rounded-xl border border-[#E8E8E6] p-6">
              <div className="text-sm font-semibold text-[#0A0A0A] mb-1">
                Any questions first?
              </div>
              <p className="text-sm text-[#525252]">
                Email us at{" "}
                <a
                  href="mailto:hello@origins-id.com"
                  className="text-[#0A0A0A] underline underline-offset-2"
                >
                  hello@origins-id.com
                </a>
              </p>
            </div>
          </div>

          {/* Right — 60% */}
          <div className="lg:col-span-3">
            <BookDemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}

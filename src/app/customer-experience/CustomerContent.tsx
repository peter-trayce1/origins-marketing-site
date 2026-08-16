"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { APP_URL } from "@/lib/utils";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { ArrowRight, Check } from "lucide-react";

const themes = [
  {
    eyebrow: "Story",
    title: "Tell your product story.",
    body: "Share the people, places and processes behind what you make, from the farm where the fibre was grown to the factory where it was finished.",
    bullets: [
      "Brand narrative and founding story",
      "Design and development context",
      "Supplier and manufacturing story",
    ],
  },
  {
    eyebrow: "Transparency",
    title: "Back every claim with evidence.",
    body: "Show verified certifications, composition data, manufacturing origins and environmental metrics, with the distinction between verified and self-declared always visible.",
    bullets: [
      "Verified certifications with evidence",
      "Composition and material breakdown",
      "Carbon footprint and water usage",
    ],
  },
  {
    eyebrow: "Care",
    title: "Extend the life of every product.",
    body: "Clear care instructions and maintenance guidance make a product easier to look after, so it is kept longer and replaced less often.",
    bullets: [
      "Wash, dry, iron and storage guidance",
      "Fabric-specific maintenance tips",
      "Repair guidance and instructions",
    ],
  },
  {
    eyebrow: "Circularity",
    title: "Give every product a second life.",
    body: "Offer customers clear pathways to repair, resale, take-back and recycling, so end-of-life is easy to act on rather than a guess.",
    bullets: [
      "Repair guidance and repair partners",
      "Resale programme and marketplace links",
      "Take-back and recycling drop-off points",
    ],
  },
];

function Hero() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center">
        <motion.div {...fadeUp(0)} className="flex flex-col gap-7 max-w-[640px]">
          <p className="eyebrow">Customer experience</p>
          <h1 className="font-serif text-[3rem] lg:text-[3.75rem] text-[#111111] leading-[1.05] tracking-[-0.02em]">
            Turn every product into a customer <span className="italic">experience.</span>
          </h1>
          <p className="text-[#72726D] text-[18px] leading-[1.65]">
            A passport is a permanent, scannable connection between product and person. Treated as a channel rather than a compliance record, it keeps working long after the sale.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <a href={`${APP_URL}/signup`} className="btn-primary h-11 px-6 text-sm">
              Start free trial
            </a>
            <a
              href="https://passport.knownobjects.io/c/ORI-89413809"
              className="link-cobalt text-sm"
            >
              See example passport <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>
        <motion.div {...fadeUp(0.15)} className="flex justify-center">
          <Image
            src="/screenshot-certifications-mobile.png"
            alt="Known Objects. digital passport on mobile"
            width={862}
            height={1478}
            className="w-full max-w-[280px] h-auto [filter:brightness(1.08)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function PassportCarries() {
  return (
    <section className="bg-[#F6F4F2] py-28 border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-[640px] mb-16">
          <p className="eyebrow mb-4">What a passport carries</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.12] tracking-[-0.02em]">
            Four things worth telling customers.
          </h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-px bg-[#E6E6E2] border border-[#E6E6E2]"
        >
          {themes.map((t) => (
            <motion.div
              key={t.eyebrow}
              variants={staggerItem}
              className="bg-[#F6F4F2] p-11 flex flex-col gap-[18px]"
            >
              <p className="text-[11px] font-[500] uppercase tracking-[0.12em] text-[#164ED8]">
                {t.eyebrow}
              </p>
              <h3 className="font-serif text-[32px] text-[#111111] leading-[1.15]">{t.title}</h3>
              <p className="text-[#72726D] text-[15px] leading-[1.75]">{t.body}</p>
              <ul className="flex flex-col gap-2.5">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-[13px] text-[#72726D]">
                    <Check size={13} className="text-[#164ED8] shrink-0" strokeWidth={2} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Verification() {
  const bullets = [
    "Verified and self-declared claims clearly separated",
    "Evidence files attached to each certification",
    "Timestamped audit trail of every contribution",
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
          <p className="eyebrow">Verification</p>
          <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-[1.12] tracking-[-0.02em]">
            Verified, not just <span className="italic">claimed.</span>
          </h2>
          <p className="text-[#72726D] text-base leading-[1.7]">
            Certificates, test reports and lab results attach to the claims they support, so customers and regulators can check the evidence rather than take a brand&apos;s word for it.
          </p>
          <ul className="flex flex-col gap-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-[#72726D]">
                <Check size={13} className="text-[#164ED8] shrink-0 mt-1" strokeWidth={2} />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp(0.15)} className="flex items-center justify-center">
          <Image
            src="/screenshot-impact-builder.png"
            alt="Impact and certifications"
            width={2308}
            height={1508}
            className="w-full h-auto mix-blend-multiply"
          />
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-[#111111] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-[3.25rem] text-white leading-[1.05] tracking-[-0.02em] mb-6">
            Every product deserves a <span className="italic">story.</span>
          </h2>
          <p className="text-lg text-white/50 leading-[1.65] mb-10">
            Build passports that connect your brand to your customers, not only to a regulator.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <a href={`${APP_URL}/signup`} className="btn-primary bg-white text-[#111111] hover:bg-white/90 h-11 px-6 text-sm">
              Start free trial
            </a>
            <a
              href="/book-demo"
              className="inline-flex items-center gap-[5px] text-sm font-[500] text-white/50 transition-colors hover:text-white"
            >
              Book a demo <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CustomerContent() {
  return (
    <>
      <Hero />
      <PassportCarries />
      <Verification />
      <CTA />
    </>
  );
}

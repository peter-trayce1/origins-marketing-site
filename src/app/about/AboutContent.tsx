"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { Check } from "lucide-react";

const capabilities = [
  "Passport creation and management",
  "QR code generation and distribution",
  "AI-assisted passport drafting",
  "Public passport page hosting",
  "Website widget embedding",
  "Compliance-ready data structure and export",
];

const values = [
  {
    title: "Transparency",
    body: "Every claim about a product should be backed by real data. Transparency is the foundation of lasting customer trust.",
  },
  {
    title: "Trust",
    body: "Trust is earned through consistency, accuracy and clarity. We build tools that help brands make promises they can keep and customers can verify.",
  },
  {
    title: "Simplicity",
    body: "Product transparency does not have to be complicated. We remove friction from creating, managing and sharing passports.",
  },
];

function Hero() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-[820px] flex flex-col gap-7">
          <p className="eyebrow">About Known Objects.</p>
          <h1 className="font-serif text-[3.25rem] lg:text-[4rem] text-[#111111] leading-[1.05] tracking-[-0.02em]">
            Every product should have a trusted digital <span className="italic">identity.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="bg-[#F6F4F2] py-28 border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
        <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
          <p className="eyebrow">Our mission</p>
          <p className="font-serif text-[32px] text-[#111111] leading-[1.3]">
            Known Objects is a product transparency platform helping brands connect their physical products to trusted digital identities.
          </p>
          <p className="text-[#72726D] text-base leading-[1.75]">
            We are building the infrastructure for a future where a customer scanning a tag on a jacket can learn where the cotton was grown, how the garment was made, what certifications it holds, how to care for it and what to do at the end of its life.
          </p>
          <p className="text-[#72726D] text-base leading-[1.75]">
            We work with brands preparing for Digital Product Passport requirements, helping them build the systems, content and customer experiences those standards will ask for.
          </p>
        </motion.div>
        <motion.div {...fadeUp(0.15)} className="border border-[#E6E6E2] bg-white p-9">
          <p className="eyebrow mb-6">What we do</p>
          <ul className="flex flex-col gap-3.5">
            {capabilities.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-[#72726D] leading-[1.6]">
                <Check size={13} className="text-[#164ED8] shrink-0 mt-1" strokeWidth={2} />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-[640px] mb-14">
          <p className="eyebrow mb-4">What we stand for</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.12] tracking-[-0.02em]">
            Our values.
          </h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-px bg-[#E6E6E2]"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              className="bg-white p-10 flex flex-col gap-4"
            >
              <h3 className="font-serif italic text-[26px] text-[#111111]">{v.title}</h3>
              <p className="text-sm text-[#72726D] leading-[1.75]">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyNow() {
  return (
    <section className="bg-[#F6F4F2] py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
        <motion.div {...fadeUp(0)}>
          <p className="eyebrow mb-4">Why now</p>
          <h2 className="font-serif text-[2.5rem] text-[#111111] leading-[1.12] tracking-[-0.02em]">
            The requirements are already on the way.
          </h2>
        </motion.div>
        <motion.div {...fadeUp(0.1)} className="flex flex-col gap-5">
          <p className="text-[#72726D] text-base leading-[1.75]">
            The EU Ecodesign for Sustainable Products Regulation introduces mandatory Digital Product Passport requirements for textiles and apparel from 2027 onwards. We work with brands today so they arrive with clean data structures, customer-facing passport pages and the workflows to keep records accurate at scale.
          </p>
          <p className="text-[#72726D] text-base leading-[1.75]">
            Beyond compliance, passports change the relationship between a brand and its customers. They make openness and accountability part of the product itself.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-[620px] flex flex-col gap-6">
          <p className="eyebrow">The team</p>
          <h2 className="font-serif text-[2.5rem] text-[#111111] leading-[1.12] tracking-[-0.02em]">
            The team is growing.
          </h2>
          <p className="text-[#72726D] text-base leading-[1.75]">
            We are building Known Objects with a small, focused team. If you care about product transparency, sustainable fashion and building meaningful software, we would like to hear from you.
          </p>
          <div className="mt-2">
            <a href="/book-demo" className="btn-secondary h-11 px-6 text-sm">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutContent() {
  return (
    <>
      <Hero />
      <Mission />
      <Values />
      <WhyNow />
      <Team />
    </>
  );
}

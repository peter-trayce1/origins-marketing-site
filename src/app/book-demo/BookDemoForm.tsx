"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DEMO_ENDPOINT = "https://app.origins-id.com/api/demo-request";

type FormData = {
  fullName: string;
  email: string;
  brandName: string;
  website: string;
  volume: string;
  message: string;
};

const initialForm: FormData = {
  fullName: "",
  email: "",
  brandName: "",
  website: "",
  volume: "",
  message: "",
};

const inputClass =
  "w-full h-10 px-3 rounded-lg border border-[#E8E8E6] bg-white text-sm text-[#0A0A0A] placeholder:text-[#8C8C8C] focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:border-transparent transition-shadow";

const labelClass = "block text-sm font-medium text-[#0A0A0A] mb-1.5";

export function BookDemoForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(DEMO_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.fullName,
          email: form.email,
          company: form.brandName,
          website: form.website,
          message: [form.volume ? `Volume: ${form.volume}` : "", form.message]
            .filter(Boolean)
            .join("\n") || undefined,
          hp_field: "",
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong — please try again or email hello@origins-id.com");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#F9F9F8] rounded-2xl border border-[#E8E8E6] p-12 flex flex-col items-center text-center gap-6">
        <div className="w-14 h-14 rounded-full bg-[#F4F4F3] flex items-center justify-center">
          <CheckCircle size={28} className="text-[#0A0A0A]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#0A0A0A] mb-2">
            Thanks — we&apos;ll be in touch shortly.
          </h2>
          <p className="text-sm text-[#525252]">
            We aim to respond within one business day.
          </p>
        </div>
        <Link
          href="/platform"
          className="text-sm text-[#0A0A0A] font-medium underline underline-offset-2 hover:text-[#525252] transition-colors"
        >
          In the meantime, explore the platform overview →
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-[#E8E8E6] shadow-sm p-8 flex flex-col gap-5"
    >
      {/* Full name */}
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Full name <span className="text-[#8C8C8C]">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="Jane Smith"
          value={form.fullName}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Work email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Work email <span className="text-[#8C8C8C]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@yourbrand.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Brand name */}
      <div>
        <label htmlFor="brandName" className={labelClass}>
          Brand / company name <span className="text-[#8C8C8C]">*</span>
        </label>
        <input
          id="brandName"
          name="brandName"
          type="text"
          required
          placeholder="Your Brand Ltd."
          value={form.brandName}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Website */}
      <div>
        <label htmlFor="website" className={labelClass}>
          Website URL
        </label>
        <input
          id="website"
          name="website"
          type="url"
          placeholder="https://yourbrand.com"
          value={form.website}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Volume */}
      <div>
        <label htmlFor="volume" className={labelClass}>
          Monthly product volume
        </label>
        <select
          id="volume"
          name="volume"
          value={form.volume}
          onChange={handleChange}
          className={cn(inputClass, "cursor-pointer")}
        >
          <option value="">Select a range…</option>
          <option value="under-100">Under 100</option>
          <option value="100-500">100–500</option>
          <option value="500-2000">500–2,000</option>
          <option value="2000+">2,000+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          What are you looking for?{" "}
          <span className="text-[#8C8C8C] font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your brand, products, or any specific questions you have…"
          value={form.message}
          onChange={handleChange}
          className={cn(
            inputClass,
            "h-auto resize-none py-2.5 leading-relaxed"
          )}
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#0A0A0A] text-white font-medium rounded-lg py-3 text-sm hover:bg-[#1a1a1a] active:bg-[#2a2a2a] transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending…" : "Book my demo"}
      </button>

      <p className="text-xs text-[#8C8C8C] text-center">
        By submitting this form you agree to be contacted about OriginsID.
        No spam, ever.
      </p>
    </form>
  );
}

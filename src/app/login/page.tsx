import type { Metadata } from "next";
import Link from "next/link";
import { APP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to the OriginsID brand portal.",
};

export default function LoginPage() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-sm w-full">
        <div className="mb-8">
          <Link
            href="/"
            className="text-2xl font-bold text-[#0A0A0A] tracking-tight"
          >
            OriginsID
          </Link>
        </div>
        <div className="bg-[#F9F9F8] rounded-2xl border border-[#E8E8E6] p-10 flex flex-col items-center gap-6">
          <p className="text-sm text-[#525252] leading-relaxed">
            You&apos;re being redirected to the OriginsID brand portal.
          </p>
          <a
            href={`${APP_URL}/login`}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white font-medium rounded-lg px-6 py-3 text-sm hover:bg-[#1a1a1a] transition-colors"
          >
            Sign in to OriginsID →
          </a>
          <div className="text-xs text-[#8C8C8C]">
            Don&apos;t have an account?{" "}
            <a
              href={`${APP_URL}/signup`}
              className="text-[#525252] hover:text-[#0A0A0A] underline underline-offset-2 transition-colors"
            >
              Start free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  white?: boolean;
  className?: string;
  href?: string;
  compact?: boolean;
}

/**
 * Known Objects. wordmark.
 * "Known" — Inter (sans-serif)
 * "Objects." — Instrument Serif italic
 */
export function Logo({ white = false, className, href = "/", compact = false }: LogoProps) {
  const textColor = white ? "text-white" : "text-[#111111]";
  const size = compact ? "text-[15px]" : "text-[17px]";

  return (
    <Link
      href={href}
      className={cn("inline-flex items-baseline group transition-opacity hover:opacity-75", className)}
      aria-label="Known Objects. — home"
    >
      <span
        className={cn(
          "font-medium tracking-[-0.01em] leading-none select-none",
          textColor,
          size,
          "font-[family-name:var(--font-inter)]"
        )}
      >
        Known{" "}
      </span>
      <span
        className={cn(
          "italic tracking-[-0.01em] leading-none select-none",
          textColor,
          size,
          "font-[family-name:var(--font-instrument-serif)]"
        )}
      >
        Objects.
      </span>
    </Link>
  );
}

/** KO monogram — for favicon / app icon contexts */
export function KOMonogram({
  size = 32,
  white = false,
  className,
}: {
  size?: number;
  white?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" fill={white ? "#111111" : "#ffffff"} />
      <text
        x="4"
        y="22"
        fontFamily="system-ui, sans-serif"
        fontWeight="500"
        fontSize="14"
        fill={white ? "#ffffff" : "#111111"}
        letterSpacing="-0.5"
      >
        KO
      </text>
    </svg>
  );
}

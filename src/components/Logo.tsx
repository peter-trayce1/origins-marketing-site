import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  white?: boolean;
  className?: string;
  href?: string;
  compact?: boolean;
}

export function Logo({ white = false, className, href = "/", compact = false }: LogoProps) {
  const height = compact ? 20 : 26;
  const width = Math.round(height * (1600 / 397));

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center group transition-opacity hover:opacity-70", className)}
      aria-label="Known Objects. — home"
    >
      <Image
        src="/known_objects_logo_primary_fixed_web.png"
        alt="Known Objects."
        width={width}
        height={height}
        className={cn(
          "h-auto object-contain",
          white ? "brightness-0 invert" : ""
        )}
        style={{ width: "auto", height: `${height}px` }}
        priority
      />
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

import type { MotionProps, Variants } from "framer-motion";

// Shared scroll-animation helpers used across every page.

export const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export const staggerContainer: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

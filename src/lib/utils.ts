import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.knownobjects.io";
export const DEMO_EMAIL = "hello@knownobjects.io";

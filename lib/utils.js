import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function nameInitials(name) {
  return name
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");
}

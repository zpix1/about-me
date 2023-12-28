import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function monthDiff(d1: Date, d2: Date) {
  let months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

export function formatYear(year: number) {
  if (year % 10 == 1) {
    return year + " year";
  }
  return year + " years";
}

export function formatMonth(month: number) {
  if (month === 0) {
    return "";
  }
  if (month % 10 == 1) {
    return month + " month";
  }
  return month + " months";
}

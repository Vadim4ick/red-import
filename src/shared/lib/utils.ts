import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pathImage = (src: string) => {
  return `http://0.0.0.0:8055/assets/cb928b94-ce75-4271-94a4-bef95aa66354`;
};

export const calculateRangePrice = (prices: number[]) => {
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  return [minPrice, maxPrice];
};

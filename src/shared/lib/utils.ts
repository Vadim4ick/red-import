import { GetGoodsQuery } from "@/graphql/__generated__";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pathImage = (src: string) => {
  return `http://0.0.0.0:8055/assets/${src}`;
};

export const calculateRangePrice = (prices: number[]) => {
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  return [minPrice, maxPrice];
};

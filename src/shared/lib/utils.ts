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

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

export const parsePrice = (formattedPrice: string): number => {
  // Удаляем все пробелы и заменяем запятую на точку
  const normalizedPrice = formattedPrice.replace(/\s/g, "").replace(",", ".");
  // Преобразуем строку в число
  return parseFloat(normalizedPrice);
};

export const formatNumber = (value: number): string => {
  if (value >= 1000000) {
    // Если миллионы, округляем до одного знака после запятой и добавляем "млн."
    return `${(value / 1000000).toFixed(0)} млн.`;
  } else if (value >= 1000) {
    // Если тысячи, округляем до целого числа и добавляем "тыс."
    return `${(value / 1000).toFixed(0)} тыс.`;
  } else {
    // Если меньше тысячи, выводим просто значение
    return value.toString();
  }
};

export function calculateLeasingDetails(
  propertyCost: number,
  downPaymentRate: number,
  termMonths: number,
  annualInterestRate: number,
) {
  // Рассчитать сумму первого взноса
  const downPayment = (propertyCost * downPaymentRate) / 100;

  // Рассчитать сумму кредита
  const loanAmount = propertyCost - downPayment;

  // Рассчитать месячную процентную ставку
  const monthlyInterestRate = annualInterestRate / 100 / 12;

  // Рассчитать ежемесячный платеж (EMI)
  const emi =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, termMonths)) /
    (Math.pow(1 + monthlyInterestRate, termMonths) - 1);

  // Рассчитать сумму договора
  const totalPayment = emi * termMonths;

  // Рассчитать годовое удорожание в процентах
  const annualCostIncreasePercentage =
    ((totalPayment - loanAmount) / loanAmount) * 100;

  return {
    monthlyPayment: emi.toFixed(0),
    annualCostIncreasePercentage: annualCostIncreasePercentage.toFixed(2),
    totalContractAmount: totalPayment.toFixed(0),
  };
  // return {
  //   monthlyPayment: emi.toFixed(2),
  //   annualCostIncreasePercentage: annualCostIncreasePercentage.toFixed(2),
  //   totalContractAmount: totalPayment.toFixed(2),
  // };
}

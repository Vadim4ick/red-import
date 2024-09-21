"use client";

import { cn, formatNumber, formatPrice } from "@/shared/lib/utils";
import { useUnit } from "effector-react";
import {
  $contribution,
  $percent,
  $price,
  $term,
  updateContribution,
  updatePercent,
  updatePrice,
  updateTerm,
} from "@/store/leasing";
import { InputRangeItem } from "./InputRangeItem";
import { useGetSettingsCalcQuery } from "@/graphql/__generated__";

interface InputRangeConfig {
  id: string;
  title: string;
  type: "price" | "contribution" | "term" | "percent";
  min: number;
  max: number;
  step: number;
  value: number;
  updateFn: (value: number) => void;
  formatLabel: (val: number) => string;
  formatLabelMarks: (val: number) => string;
  marks?: any;
  minMaxLabel?: boolean;
}

const LeasingCalculation = ({ className }: { className?: string }) => {
  const [price, contribution, term, percent] = useUnit([
    $price,
    $contribution,
    $term,
    $percent,
  ]);

  const { data, isLoading } = useGetSettingsCalcQuery();

  if (isLoading) return <div>Загрузка...</div>;

  if (!data) return <div>Нет данных</div>;

  const settings = data.settingsCalculation;

  // Пример функции для получения значения по типу
  function getValueByType(type: string) {
    switch (type) {
      case "price":
        return price;
      case "contribution":
        return contribution;
      case "term":
        return term;
      case "percent":
        return percent;
      default:
        return 0;
    }
  }

  // Пример функции для получения функции обновления по типу
  function getUpdateFnByType(type: string) {
    switch (type) {
      case "price":
        return updatePrice;
      case "contribution":
        return updateContribution;
      case "term":
        return updateTerm;
      case "percent":
        return updatePercent;
      default:
        return () => {};
    }
  }

  // Пример функции для форматирования меток
  function formatLabelByType(type: string, val: number) {
    switch (type) {
      case "price":
        return `${formatPrice(val)} руб.`;
      case "contribution":
        return `${val} %`;
      case "term":
        return `${val} месяцев`;
      case "percent":
        return `${val} %`;
      default:
        return val;
    }
  }

  // Пример функции для форматирования меток отметок
  function formatMarksByType(type: string, val: number) {
    switch (type) {
      case "price":
        return formatNumber(val);
      case "contribution":
        return `${val}%`;
      case "term":
        return `${val} мес.`;
      case "percent":
        return `${val}%`;
      default:
        return val;
    }
  }

  const arrInputs: InputRangeConfig[] = settings.map((setting) => {
    return {
      id: setting.id,
      title: setting.title,
      type: setting.type as "price" | "contribution" | "term" | "percent",
      min: setting.min,
      max: setting.max,
      step: setting.step,
      value: getValueByType(setting.type),
      updateFn: getUpdateFnByType(setting.type),
      formatLabel: (val: number) =>
        String(formatLabelByType(setting.type, val)),
      formatLabelMarks: (val: number) =>
        String(formatMarksByType(setting.type, val)),
      marks: setting.marks,
      minMaxLabel:
        setting.type === "contribution" || setting.type === "percent",
    };
  });

  return (
    <div
      className={cn(
        "flex flex-col gap-[63px] max-mobile:gap-[48px]",
        className,
      )}
    >
      {arrInputs.map((el) => (
        <InputRangeItem
          key={el.id}
          title={el.title}
          type={el.type}
          min={el.min}
          max={el.max}
          step={el.step}
          value={el.value}
          updateFn={el.updateFn}
          formatLabel={el.formatLabel}
          formatLabelMarks={el.formatLabelMarks}
          marks={el.marks}
          minMaxLabel={el.minMaxLabel}
        />
      ))}
    </div>
  );
};

export { LeasingCalculation };

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

const PRICE_MAX = 30000000;
const PRICE_MIN = 500000;

const CONTRIBUTION_MIN = 0;
const CONTRIBUTION_MAX = 49;

const TERM_MIN = 12;
const TERM_MAX = 72;

const PERCENT_MIN = 1;
const PERCENT_MAX = 40;

interface InputRangeConfig {
  id: number;
  title: string;
  type: "price" | "contribution" | "term" | "percent";
  min: number;
  max: number;
  step: number;
  value: number;
  updateFn: (value: number) => void;
  formatLabel: (val: number) => string;
  formatLabelMarks: (val: number) => string;
  marks?: number[];
  minMaxLabel?: boolean;
}

const LeasingCalculation = ({ className }: { className?: string }) => {
  const [price, contribution, term, percent] = useUnit([
    $price,
    $contribution,
    $term,
    $percent,
  ]);

  const arrInputs: InputRangeConfig[] = [
    {
      id: 1,
      title: "Стоимость имущества (руб.)",
      type: "price",
      min: PRICE_MIN,
      max: PRICE_MAX,
      step: 50000,
      value: price,
      updateFn: updatePrice,
      formatLabel: (val: number) => `${formatPrice(val)} руб.`,
      formatLabelMarks: (val: number) => `${formatNumber(val)}`,
      marks: [500000, 10000000, 15000000, 20000000, 25000000],
    },
    {
      id: 2,
      title: "Первоначальный взнос",
      type: "contribution",
      min: CONTRIBUTION_MIN,
      max: CONTRIBUTION_MAX,
      step: 1,
      value: contribution,
      updateFn: updateContribution,
      formatLabel: (val: number) => `${val}%`,
      formatLabelMarks: (val: number) => `${val}%`,
      minMaxLabel: true,
    },
    {
      id: 3,
      title: "Срок договора (мес.)",
      type: "term",
      min: TERM_MIN,
      max: TERM_MAX,
      step: 1,
      value: term,
      updateFn: updateTerm,
      formatLabel: (val: number) => `${val} месяцев`,
      formatLabelMarks: (val: number) => `${val} мес.`,
      marks: [12, 24, 36, 48, 60],
    },
    {
      id: 4,
      title: "Процентная ставка",
      type: "percent",
      min: PERCENT_MIN,
      max: PERCENT_MAX,
      step: 1,
      value: percent,
      updateFn: updatePercent,
      formatLabel: (val: number) => `${val}%`,
      formatLabelMarks: (val: number) => `${val}%`,
      minMaxLabel: true,
    },
  ];

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
      {/* <InputRangeItem
        title="Стоимость имущества (руб.)"
        type="price"
        min={PRICE_MIN}
        max={PRICE_MAX}
        step={50000}
        value={price}
        updateFn={updatePrice}
        formatLabel={(val) => `${formatPrice(val)} руб.`}
        formatLabelMarks={(val) => `${formatNumber(val)}`}
        marks={[500000, 10000000, 15000000, 20000000, 25000000]}
      />

      <InputRangeItem
        title="Первоначальный взнос (руб.)"
        type="contribution"
        min={CONTRIBUTION_MIN}
        max={CONTRIBUTION_MAX}
        step={1}
        value={contribution}
        updateFn={updateContribution}
        minMaxLabel={true}
        formatLabel={(val) => `${val} %`}
        formatLabelMarks={(val) => `${val}%`}
      />

      <InputRangeItem
        title="Срок договора (мес.)"
        type="term"
        min={TERM_MIN}
        max={TERM_MAX}
        step={1}
        value={term}
        updateFn={updateTerm}
        formatLabel={(val) => `${val} месяцев`}
        formatLabelMarks={(val) => `${val} мес.`}
        marks={[12, 24, 36, 48, 60]}
      />
      <InputRangeItem
        title="Процентная ставка"
        type="percent"
        min={PERCENT_MIN}
        max={PERCENT_MAX}
        step={1}
        value={percent}
        updateFn={updatePercent}
        minMaxLabel={true}
        formatLabel={(val) => `${val} %`}
        formatLabelMarks={(val) => `${val}%`}
      /> */}
    </div>
  );
};

export { LeasingCalculation };

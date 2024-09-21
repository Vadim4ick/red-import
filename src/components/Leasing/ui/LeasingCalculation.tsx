"use client";

import { Input } from "@/shared/ui/input";
import { Slider } from "./RangeSlider";
import { cn, formatNumber, formatPrice, parsePrice } from "@/shared/lib/utils";
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
import { ChangeEvent, useRef, useState } from "react";

const PRICE_MAX = 30000000;
const PRICE_MIN = 500000;

const CONTRIBUTION_MIN = 0;
const CONTRIBUTION_MAX = 49;

const TERM_MIN = 12;
const TERM_MAX = 72;

const PERCENT_MIN = 1;
const PERCENT_MAX = 40;

interface InputConfig {
  ref: React.RefObject<HTMLInputElement>;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface RangeConfig {
  step: number;
  min: number;
  max: number;
  value: number;
  onValueChange: (value: number) => void;
  marks?: number[];
  minMaxLabel?: boolean;
  formatLabel: (val: number) => string;
}

interface InputRangeItem {
  id: number;
  title: string;
  input: InputConfig;
  range: RangeConfig;
}

const LeasingCalculation = ({ className }: { className?: string }) => {
  const [price, contribution, term, percent] = useUnit([
    $price,
    $contribution,
    $term,
    $percent,
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputRef2 = useRef<HTMLInputElement | null>(null);
  const inputRef3 = useRef<HTMLInputElement | null>(null);
  const inputRef4 = useRef<HTMLInputElement | null>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "price" | "contribution" | "term" | "percent",
  ) => {
    const inputValue = e.target.value;
    let parsedValue = 0;

    switch (type) {
      case "price":
        parsedValue = parsePrice(inputValue.replace(/\s?руб\./, "")) || -1;
        updatePrice(parsedValue);
        break;
      case "contribution":
        parsedValue = parsePrice(inputValue.replace(/\s?%/, "")) || -1;
        if (parsedValue >= 99) {
          parsedValue = 99;
        }
        updateContribution(parsedValue);
        break;
      case "term":
        parsedValue = parseInt(inputValue.replace(/\s?месяцев/, ""), 10) || -1;
        updateTerm(parsedValue);
        break;
      case "percent":
        parsedValue = parseFloat(inputValue.replace(/\s?%/, "")) || -1;
        updatePercent(parsedValue);
        break;
    }

    // Сохраняем позицию курсора
    const cursorPosition = e.target.selectionStart;

    setTimeout(() => {
      // Восстанавливаем позицию курсора
      switch (type) {
        case "price":
          inputRef.current?.setSelectionRange(cursorPosition, cursorPosition);
          break;
        case "contribution":
          inputRef2.current?.setSelectionRange(cursorPosition, cursorPosition);
          break;
        case "term":
          inputRef3.current?.setSelectionRange(cursorPosition, cursorPosition);
          break;
        case "percent":
          inputRef4.current?.setSelectionRange(cursorPosition, cursorPosition);
          break;
      }
    }, 0);
  };

  const arrInputs: InputRangeItem[] = [
    {
      id: 1,
      title: "Стоимость имущества (руб.)",
      input: {
        ref: inputRef,
        value: `${price === -1 ? "" : formatPrice(price)} руб.`,
        onChange: (e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "price"),
        onFocus: () => {
          if (!isFocused) {
            updatePrice(-1);
            setIsFocused(true);
          }
        },
        // onBlur: (e: ChangeEvent<HTMLInputElement>) => {
        //   if (parsePrice(e.target.value) < PRICE_MIN) {
        //     updatePrice(PRICE_MIN);
        //   }
        // },
      },
      range: {
        step: 50000,
        min: PRICE_MIN,
        max: PRICE_MAX,
        value: price,
        onValueChange: updatePrice,
        marks: [500000, 10000000, 15000000, 20000000, 25000000],
        formatLabel: (val: number) => `${formatNumber(val)}`,
      },
    },
    {
      id: 2,
      title: "Первоначальный взнос",
      input: {
        ref: inputRef2,
        value: `${contribution === -1 ? "" : contribution} %`,
        onChange: (e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "contribution"),
        onFocus: () => {
          if (!isFocused2) {
            updateContribution(-1);
            setIsFocused2(true);
          }
        },
        onBlur: (e: ChangeEvent<HTMLInputElement>) => {
          if (parsePrice(e.target.value) < CONTRIBUTION_MIN) {
            updateContribution(CONTRIBUTION_MIN);
          }
        },
      },
      range: {
        step: 1,
        min: CONTRIBUTION_MIN,
        max: CONTRIBUTION_MAX,
        value: contribution,
        onValueChange: updateContribution,
        minMaxLabel: true,
        formatLabel: (val: number) => `${val}%`,
      },
    },
    {
      id: 3,
      title: "Срок договора",
      input: {
        ref: inputRef3,
        value: `${term === -1 ? "" : term} месяцев`,
        onChange: (e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "term"),
        onFocus: () => {
          if (!isFocused3) {
            updateTerm(-1);
            setIsFocused3(true);
          }
        },
        onBlur: (e: ChangeEvent<HTMLInputElement>) => {
          if (parsePrice(e.target.value) < TERM_MIN) {
            updateTerm(TERM_MIN);
          }
        },
      },
      range: {
        step: 1,
        min: TERM_MIN,
        max: TERM_MAX,
        value: term,
        onValueChange: updateTerm,
        marks: [12, 24, 36, 48, 60],
        formatLabel: (val: number) => `${val} мес.`,
      },
    },
    {
      id: 4,
      title: "Процентная ставка",
      input: {
        ref: inputRef4,
        value: `${percent === -1 ? "" : percent} %`,
        onChange: (e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, "percent"),
        onBlur: (e: ChangeEvent<HTMLInputElement>) => {
          if (parsePrice(e.target.value) < PERCENT_MIN) {
            updatePercent(PERCENT_MIN);
          }
        },
        onFocus: () => {
          if (!isFocused4) {
            updatePercent(-1);
            setIsFocused4(true);
          }
        },
      },
      range: {
        step: 1,
        min: PERCENT_MIN,
        max: PERCENT_MAX,
        value: percent,
        onValueChange: updatePercent,
        minMaxLabel: true,
        formatLabel: (val: number) => `${val}%`,
      },
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
        <div
          key={el.id}
          className="flex items-center justify-between gap-[36px] max-mobile:flex-col max-mobile:items-start max-mobile:gap-[46px]"
        >
          <div className="flex w-full flex-col gap-[24px]">
            <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
              {el.title}
            </p>

            <Slider
              min={el.range.min}
              max={el.range.max}
              step={el.range.step}
              value={el.range.value}
              onValueChange={el.range.onValueChange}
              minMaxLabel={el.range.minMaxLabel}
              formatLabel={el.range.formatLabel}
              marks={el.range.marks}
            />
          </div>

          <Input
            onBlur={el.input.onBlur}
            onFocus={el.input.onFocus}
            ref={el.input.ref}
            onChange={el.input.onChange}
            value={el.input.value}
            className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A] max-mobile:max-w-full"
          />
        </div>
      ))}
    </div>
  );
};

export { LeasingCalculation };

{
  /* <div className="flex items-center justify-between gap-[36px] max-mobile:flex-col max-mobile:items-start max-mobile:gap-[46px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Стоимость имущества (руб.)
          </p>

          <Slider
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={50000}
            value={price}
            onValueChange={updatePrice}
            marks={[500000, 10000000, 15000000, 20000000, 25000000]}
            formatLabel={(val) => `${formatNumber(val)}`}
            // label={true}
          />
        </div>

        <Input
          // onFocus={handleInputFocus}
          onBlur={(e) => {
            if (parsePrice(e.target.value) < PRICE_MIN) {
              updatePrice(PRICE_MIN);
            }
          }}
          ref={inputRef}
          onChange={(e) => handleInputChange(e, "price")}
          value={`${formatPrice(price)} руб.`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A] max-mobile:max-w-full"
        />
      </div>

      <div className="flex items-center justify-between gap-[36px] max-mobile:flex-col max-mobile:items-start max-mobile:gap-[46px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Первоначальный взнос
          </p>

          <Slider
            min={CONTRIBUTION_MIN}
            max={CONTRIBUTION_MAX}
            step={1}
            value={contribution}
            onValueChange={updateContribution}
            // label={true}
            minMaxLabel={true}
            formatLabel={(val) => `${val}%`}
          />
        </div>

        <Input
          onBlur={(e) => {
            if (parsePrice(e.target.value) < CONTRIBUTION_MIN) {
              updateContribution(CONTRIBUTION_MIN);
            }
          }}
          ref={inputRef2}
          onChange={(e) => handleInputChange(e, "contribution")}
          value={`${contribution} %`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A] max-mobile:max-w-full"
        />
      </div>

      <div className="flex items-center justify-between gap-[36px] max-mobile:flex-col max-mobile:items-start max-mobile:gap-[46px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Срок договора
          </p>

          <Slider
            min={TERM_MIN}
            max={TERM_MAX}
            step={1}
            value={term}
            onValueChange={updateTerm}
            marks={[12, 24, 36, 48, 60]}
            formatLabel={(val) => `${val} мес.`}
            // label={true}
          />
        </div>

        <Input
          onBlur={(e) => {
            if (parsePrice(e.target.value) < TERM_MIN) {
              updateTerm(TERM_MIN);
            }
          }}
          ref={inputRef3}
          onChange={(e) => handleInputChange(e, "term")}
          value={`${term} месяцев`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A] max-mobile:max-w-full"
        />
      </div>

      <div className="flex items-center justify-between gap-[36px] max-mobile:flex-col max-mobile:items-start max-mobile:gap-[46px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Процентная ставка
          </p>

          <Slider
            min={PERCENT_MIN}
            max={PERCENT_MAX}
            step={1}
            value={percent}
            onValueChange={updatePercent}
            // label={true}
            minMaxLabel={true}
            formatLabel={(val) => `${val}%`}
          />
        </div>

        <Input
          onBlur={(e) => {
            if (parsePrice(e.target.value) < PERCENT_MIN) {
              updatePercent(PERCENT_MIN);
            }
          }}
          ref={inputRef4}
          onChange={(e) => handleInputChange(e, "percent")}
          value={`${percent} %`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A] max-mobile:max-w-full"
        />
      </div> */
}

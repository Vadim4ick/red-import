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
import { ChangeEvent, useRef } from "react";

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\s?руб\./, "");
    let parsedValue = parsePrice(inputValue) || 0;

    updatePrice(parsedValue);

    setTimeout(() => {
      const formattedValue = `${formatPrice(parsedValue)} руб.`;
      const numberLength = formattedValue.length - 5;
      inputRef.current?.setSelectionRange(numberLength, numberLength);
    }, 0);
  };

  const handleInput2Change = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\s?%/, ""); // Убираем пробелы и знак %
    let parsedValue = parsePrice(inputValue) || 0;

    updateContribution(parsedValue);

    setTimeout(() => {
      const formattedValue = `${parsedValue} %`; // Форматируем значение с процентом
      const numberLength = formattedValue.length - 2; // Длина числа без %
      inputRef2.current?.setSelectionRange(numberLength, numberLength); // Установка курсора после числа
    }, 0);
  };

  const handleInput3Change = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\s?месяцев/, ""); // Убираем пробелы и текст "месяцев"
    let parsedValue = parseInt(inputValue, 10) || 0; // Парсим значение как целое число

    updateTerm(parsedValue); // Обновляем состояние термина

    setTimeout(() => {
      const formattedValue = `${parsedValue} месяцев`; // Форматируем значение с "месяцев"
      const numberLength = formattedValue.length - 8; // Длина числа без " месяцев"
      inputRef3.current?.setSelectionRange(numberLength, numberLength); // Установка курсора после числа
    }, 0);
  };

  const handleInput4Change = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\s?%/, ""); // Убираем пробелы и знак %
    let parsedValue = parseFloat(inputValue) || 0; // Парсим значение как число

    updatePercent(parsedValue);

    setTimeout(() => {
      const formattedValue = `${parsedValue} %`; // Форматируем значение с %
      const numberLength = formattedValue.length - 2; // Длина числа без %
      inputRef4.current?.setSelectionRange(numberLength, numberLength); // Установка курсора после числа
    }, 0);
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-[63px] max-mobile:gap-[48px]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-[36px] max-mobile:flex-col max-mobile:items-start max-mobile:gap-[46px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Стоимость имущества (руб.)
          </p>

          <Slider
            min={500000}
            max={30000000}
            step={50000}
            value={price}
            onValueChange={updatePrice}
            marks={[500000, 10000000, 15000000, 20000000, 25000000]}
            formatLabel={(val) => `${formatNumber(val)}`}
            // label={true}
          />
        </div>

        <Input
          ref={inputRef}
          onChange={handleInputChange}
          value={`${formatPrice(price)} руб.`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A]"
        />
      </div>

      <div className="flex items-center justify-between gap-[36px] max-mobile:flex-col max-mobile:items-start max-mobile:gap-[46px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Первоначальный взнос
          </p>

          <Slider
            min={0}
            max={49}
            step={1}
            value={contribution}
            onValueChange={updateContribution}
            // label={true}
            minMaxLabel={true}
            formatLabel={(val) => `${val}%`}
          />
        </div>

        <Input
          ref={inputRef2}
          onChange={handleInput2Change}
          value={`${contribution} %`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A]"
        />
      </div>

      <div className="flex items-center justify-between gap-[36px] max-mobile:flex-col max-mobile:items-start max-mobile:gap-[46px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Срок договора
          </p>

          <Slider
            min={12}
            max={72}
            step={1}
            value={term}
            onValueChange={updateTerm}
            marks={[12, 24, 36, 48, 60]}
            formatLabel={(val) => `${val} мес.`}
            // label={true}
          />
        </div>

        <Input
          ref={inputRef3}
          onChange={handleInput3Change}
          value={`${term} месяцев`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A]"
        />
      </div>

      <div className="flex items-center justify-between gap-[36px] max-mobile:flex-col max-mobile:items-start max-mobile:gap-[46px]">
        <div className="flex w-full flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] text-[#5A5A5A]">
            Процентная ставка
          </p>

          <Slider
            min={1}
            max={40}
            step={1}
            value={percent}
            onValueChange={updatePercent}
            // label={true}
            minMaxLabel={true}
            formatLabel={(val) => `${val}%`}
          />
        </div>

        <Input
          ref={inputRef4}
          onChange={handleInput4Change}
          value={`${percent} %`}
          className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A]"
        />
      </div>
    </div>
  );
};

export { LeasingCalculation };

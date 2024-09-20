"use client";

import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn, formatNumber } from "@/shared/lib/utils";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  step: number;
  label?: boolean;
  formatLabel?: (value: number) => string;
  value?: number | undefined;
  onValueChange?: (value: number) => void;
  marks?: number[]; // Добавляем массив отметок
  minMaxLabel?: boolean; // Добавляем метку для минимального и максимального значения
};

const Slider = React.forwardRef(
  (
    {
      className,
      min,
      max,
      step,
      formatLabel,
      value,
      onValueChange,
      label,
      marks,
      minMaxLabel,
      ...props
    }: SliderProps,
    ref,
  ) => {
    const [localValue, setLocalValue] = React.useState(value ?? min);

    React.useEffect(() => {
      setLocalValue(value ?? min);
    }, [min, max, value]);

    const handleValueChange = (newValues: number[]) => {
      const newValue = newValues[0];
      setLocalValue(newValue);
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    // Вычисление позиции числа под ползунком
    const getThumbPosition = (value: number) => {
      const percentage = ((value - min) / (max - min)) * 100;
      return `calc(${percentage}% - 10px)`; // Смещение числа для правильного позиционирования
    };

    // Вычисление позиции для отметки
    // const getMarkPosition = (mark: number) => {};
    const getMarkPosition = (mark: number) => {
      const percentage = ((mark - min) / (max - min)) * 100;
      // Учитываем динамическое смещение на основе позиции метки
      const offset = (8 * (percentage - 50)) / 50; // Смещение от -8 до +8

      return `calc(${percentage}% - ${offset}px)`;
    };

    return (
      <div className="relative w-full">
        <SliderPrimitive.Root
          ref={ref as React.RefObject<HTMLDivElement>}
          min={min}
          max={max}
          step={step}
          value={[localValue]}
          onValueChange={handleValueChange}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            className,
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-[2px] w-full grow cursor-pointer overflow-hidden rounded-full bg-[#DBDBDB]">
            <SliderPrimitive.Range
              className={cn("absolute h-full bg-[#D32E23]")}
            />
          </SliderPrimitive.Track>

          {/* Отображение отметок */}
          {marks?.map((mark) => (
            <React.Fragment key={mark}>
              <div
                className="absolute top-[2px] h-[7px] w-[1px] bg-[#7B7B7B]"
                style={{
                  left: mark === min ? `5px` : getMarkPosition(mark),
                }}
              />
              {/* Отображение цифр под отметками */}
              <div
                className="pointer-events-none absolute text-[12px] leading-[17px] text-[#5A5A5A]"
                style={{
                  left: mark === min ? `5px` : getMarkPosition(mark),
                  top: "11px", // Расстояние от отметки
                }}
              >
                {formatLabel ? formatLabel(mark) : mark}
              </div>
            </React.Fragment>
          ))}

          {/* Отображение минимальной и максимальной метки */}
          {minMaxLabel && (
            <>
              <div
                className="absolute text-[12px] leading-[17px] text-[#5A5A5A]"
                style={{
                  left: "5px", // Позиция для минимального значения
                  top: "10px", // Расстояние от отметок
                  transform: "translateX(0%)",
                }}
              >
                {formatLabel ? formatLabel(min) : min}
              </div>

              <div
                className="absolute text-[12px] leading-[17px] text-[#5A5A5A]"
                style={{
                  left: "calc(100% + 7px)", // Позиция для минимального значения
                  top: "10px", // Расстояние от отметок
                  transform: "translateX(-100%)",
                }}
              >
                {formatLabel ? formatLabel(max) : max}
              </div>
            </>
          )}

          <SliderPrimitive.Thumb
            className={cn(
              "relative block size-[16px] cursor-pointer rounded-full bg-[#D32E23] outline-none transition-colors after:absolute after:left-1/2 after:top-1/2 after:size-[6px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white disabled:pointer-events-none disabled:opacity-50",
            )}
          />
        </SliderPrimitive.Root>

        {/* Отображение значения под ползунком */}
        {label && (
          <div
            className="absolute text-sm"
            style={{
              left: getThumbPosition(localValue),
              top: "24px", // отступ снизу от полоски слайдера
            }}
          >
            {formatLabel ? formatLabel(localValue) : localValue}
          </div>
        )}
      </div>
    );
  },
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

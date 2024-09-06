"use client";

import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/shared/lib/utils";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  step: number;
  formatLabel?: (value: number) => string;
  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
};

const RangeSlider = React.forwardRef(
  (
    {
      className,
      min,
      max,
      step,
      formatLabel,
      value,
      onValueChange,
      ...props
    }: SliderProps,
    ref,
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = React.useState(initialValue);

    React.useEffect(() => {
      setLocalValues(Array.isArray(value) ? value : [min, max]);
    }, [min, max, value]);

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <SliderPrimitive.Root
        ref={ref as React.RefObject<HTMLDivElement>}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn(
          "relative mb-6 flex w-full touch-none select-none items-center",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-[1px] w-full grow overflow-hidden rounded-full bg-[#DCDCDC]">
          <SliderPrimitive.Range className="absolute h-full bg-[#D32E23]" />
        </SliderPrimitive.Track>

        {localValues.map((value, index) => (
          <React.Fragment key={index}>
            <div
              className="absolute text-center"
              style={{
                left: `calc(${((value - min) / (max - min)) * 100}% + 0px)`,
                top: `10px`,
              }}
            />
            {/* <span className="text-sm">
                {formatLabel ? formatLabel(value) : value}
              </span>
            </div> */}

            <SliderPrimitive.Thumb className="relative block size-[13px] cursor-pointer rounded-full bg-[#D32E23] outline-none transition-colors after:absolute after:left-1/2 after:top-1/2 after:size-[5px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white disabled:pointer-events-none disabled:opacity-50" />
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  },
);

RangeSlider.displayName = SliderPrimitive.Root.displayName;

export { RangeSlider };

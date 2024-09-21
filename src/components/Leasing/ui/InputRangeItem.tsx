import { Input } from "@/shared/ui/input";
import { Slider } from "./RangeSlider";
import { useInputRange } from "@/shared/hooks/useInputRange";

interface InputConfig {
  type: "price" | "contribution" | "term" | "percent";
  title: string;
  min: number;
  max: number;
  step: number;
  value: number;
  updateFn: (val: number) => void;
  formatLabel: (val: number) => string;
  minMaxLabel?: boolean;
  marks?: number[];
  formatLabelMarks?: (val: number) => string;
}

export const InputRangeItem = ({
  type,
  min,
  max,
  step,
  marks,
  value,
  updateFn,
  formatLabel,
  formatLabelMarks,
  minMaxLabel,
  title,
}: InputConfig) => {
  const { inputRef, handleInputChange, handleFocus, handleBlur } =
    useInputRange(type, min, updateFn);

  return (
    <div className="flex items-center justify-between gap-[36px] max-mobile:flex-col max-mobile:items-start max-mobile:gap-[46px]">
      <div className="flex w-full flex-col gap-[24px]">
        <p className="text-[17px] leading-[24px] text-[#5A5A5A]">{title}</p>

        <Slider
          min={min}
          max={max}
          step={step}
          value={value}
          onValueChange={updateFn}
          marks={marks}
          formatLabel={formatLabelMarks}
          minMaxLabel={minMaxLabel}
        />
      </div>

      <Input
        onBlur={handleBlur}
        onFocus={handleFocus}
        ref={inputRef}
        onChange={handleInputChange}
        value={`${value === -1 ? "" : formatLabel(value)}`}
        className="h-[56px] max-w-[184px] rounded-[2px] border-[#CBCBCB] bg-[#F3F3F3] text-center text-[17px] leading-[24px] text-[#5A5A5A] max-mobile:max-w-full"
      />
    </div>
  );
};

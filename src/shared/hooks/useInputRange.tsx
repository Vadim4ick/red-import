import { ChangeEvent, useRef, useState } from "react";
import { parsePrice } from "@/shared/lib/utils";

type InputType = "price" | "contribution" | "term" | "percent";

export const useInputRange = (
  type: InputType,
  min: number,
  updateFn: (val: number) => void,
) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let parsedValue = 0;

    switch (type) {
      case "price":
        parsedValue = parsePrice(inputValue.replace(/\s?руб\./, "")) || -1;
        break;
      case "contribution":
        parsedValue = parsePrice(inputValue.replace(/\s?%/, "")) || -1;
        parsedValue = Math.min(parsedValue, 99);
        break;
      case "term":
        parsedValue = parseInt(inputValue.replace(/\s?месяцев/, ""), 10) || -1;
        break;
      case "percent":
        parsedValue = parseFloat(inputValue.replace(/\s?%/, "")) || -1;
        break;
    }

    updateFn(parsedValue);
    const cursorPosition = e.target.selectionStart;

    setTimeout(() => {
      inputRef.current?.setSelectionRange(cursorPosition, cursorPosition);
    }, 0);
  };

  const handleFocus = () => {
    if (!isFocused) {
      updateFn(-1);
      setIsFocused(true);
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    if (parsePrice(e.target.value) < min) {
      updateFn(min);
    }
  };

  return { inputRef, handleInputChange, handleFocus, handleBlur };
};

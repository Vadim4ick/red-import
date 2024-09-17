"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const useScroll = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [isScrollLocked, setIsScrollLocked] = useState(true); // Заблокирован (Да, нет)
  const [hasScrolled, setHasScrolled] = useState(false); // Проскроллен (Да, нет)

  const isInView = useInView(sliderRef, {
    amount: "all",
  });

  useEffect(() => {
    if (hasScrolled) {
      sliderRef.current = null;
    }
  }, [hasScrolled]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollLocked && !hasScrolled && sliderRef.current && isInView) {
        sliderRef.current.scrollLeft += e.deltaY;
      }
    };

    if (isScrollLocked && !hasScrolled && isInView) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", handleWheel);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrollLocked, isInView, hasScrolled]);

  // Проверка, находится ли элемент вне видимой области при загрузке
  useEffect(() => {
    const rect = sliderRef.current?.getBoundingClientRect();

    if (!rect) return;

    if (rect.y < 0) {
      setHasScrolled(true);
    }
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    console.log(scrollbarWidth);

    if (scrollLeft === 0 || scrollLeft + clientWidth >= scrollWidth) {
      setIsScrollLocked(false);
      document.body.style.overflow = "auto";
      setHasScrolled(true);
      document.body.style.paddingRight = "0";

      if (scrollLeft === 0) {
        setIsScrollLocked(true);
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      if (scrollLeft + clientWidth < scrollWidth) {
        setHasScrolled(false);
      }
    } else {
      setIsScrollLocked(true);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // Установить padding при блокировке
    }
  };

  return {
    ref: sliderRef,
    handleScroll,
  };
};

export { useScroll };

import { useEffect, useRef, useState } from "react";
import { advantagesData } from "../model/mockData";
import { AdvantagesScrollSlide } from "./AdvantagesScrollSlide";
import { motion, useInView } from "framer-motion";

const AdvantagesScrollSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [isScrollLocked, setIsScrollLocked] = useState(true); // Заблокирован (Да, нет)
  const [hasScrolled, setHasScrolled] = useState(false); // Проскроллен (Да, нет)

  const isInView = useInView(sliderRef, {
    amount: "all",
  });

  useEffect(() => {
    // Если проскролен, то удаляем элемент и больше не дергаем
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

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    if (scrollLeft === 0 || scrollLeft + clientWidth >= scrollWidth) {
      setIsScrollLocked(false);
      document.body.style.overflow = "auto";
      setHasScrolled(true);

      if (scrollLeft === 0) {
        setIsScrollLocked(true);
      }

      if (scrollLeft + clientWidth < scrollWidth) {
        setHasScrolled(false);
      }
    } else {
      setIsScrollLocked(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <motion.div
      onScroll={handleScroll}
      ref={sliderRef}
      className="custom-scrollbar flex gap-[20px] overflow-x-auto"
    >
      {advantagesData.map((el) => {
        return <AdvantagesScrollSlide key={el.id} item={el} />;
      })}
    </motion.div>
  );
};

export { AdvantagesScrollSlider };

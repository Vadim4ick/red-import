import { useEffect, useRef, useState } from "react";
import { advantagesData } from "../model/mockData";
import { AdvantagesScrollSlide } from "./AdvantagesScrollSlide";
import { motion, useInView } from "framer-motion";

const AdvantagesScrollSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const isInView = useInView(sliderRef, {
    amount: "all",
  });

  // Блокировка вертикального скролла и автоматический горизонтальный скролл
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollLocked && sliderRef.current && isInView) {
        e.preventDefault(); // предотвращаем стандартное поведение
        sliderRef.current.scrollLeft += e.deltaY; // прокрутка горизонтально при вертикальном скролле
      }
    };

    if (isScrollLocked && isInView) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", handleWheel);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isInView, isScrollLocked]);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      if (scrollLeft + clientWidth >= scrollWidth) {
        setIsScrollLocked(false);
      }
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

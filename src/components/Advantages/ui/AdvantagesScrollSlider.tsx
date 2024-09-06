"use client";

import { advantagesData } from "../model/mockData";
import { AdvantagesScrollSlide } from "./AdvantagesScrollSlide";
import { motion } from "framer-motion";
import { useScroll } from "@/shared/hooks/useScroll";
import { useMedia } from "@/shared/hooks/useMedia";

const AdvantagesScrollSlider = () => {
  const { handleScroll, ref } = useScroll();

  const isMobile = useMedia(768);

  return (
    <motion.div
      onScroll={!isMobile ? handleScroll : undefined}
      ref={!isMobile ? ref : undefined}
      className="custom-scrollbar flex gap-[20px] max-mobile:flex-col max-mobile:items-center mobile:overflow-x-auto"
    >
      {advantagesData.map((el) => {
        return <AdvantagesScrollSlide key={el.id} item={el} />;
      })}
    </motion.div>
  );
};

export { AdvantagesScrollSlider };

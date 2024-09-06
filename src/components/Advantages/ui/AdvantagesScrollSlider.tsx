import { advantagesData } from "../model/mockData";
import { AdvantagesScrollSlide } from "./AdvantagesScrollSlide";
import { motion } from "framer-motion";
import { useScroll } from "@/shared/hooks/useScroll";

const AdvantagesScrollSlider = () => {
  const { handleScroll, ref } = useScroll();

  return (
    <motion.div
      onScroll={handleScroll}
      ref={ref}
      className="custom-scrollbar flex gap-[20px] overflow-x-auto"
    >
      {advantagesData.map((el) => {
        return <AdvantagesScrollSlide key={el.id} item={el} />;
      })}
    </motion.div>
  );
};

export { AdvantagesScrollSlider };

import { Container } from "@/shared/ui/container";
import { AdvantagesScrollSlider } from "./AdvantagesScrollSlider";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { motionConfigAnimate } from "@/shared/const/motion";

const Advantages = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.section
      data-observe="true"
      id="advantages"
      className="overflow-hidden bg-white pb-[104px] pt-[88px] max-mobile:pb-[64px] max-mobile:pt-[32px]"
      ref={ref}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
    >
      <Container className="relative max-mobile:px-0 mobile:ml-auto">
        <h2 className="heading-two max-mobile:px-[20px]">
          Почему выбирают <span className="text-buttonColor">Red </span>Import?
        </h2>

        <div className="pt-[64px] max-mobile:pt-[32px]">
          <AdvantagesScrollSlider />
        </div>

        <p className="pt-[36px] text-[13px] font-light leading-[15.5px] text-[#505050] max-mobile:px-[20px] max-mobile:pt-[20px] max-mobile:text-[16px] max-mobile:leading-[19.2px]">
          Параллельный импорт спецтехники без посредников. Лучшие цены,
          качественная продукция и оперативная доставка — вот почему нас
          выбирают!
        </p>
      </Container>
    </motion.section>
  );
};

export { Advantages };

// import { Container } from "@/shared/ui/container";
// import { AdvantagesScrollSlider } from "./AdvantagesScrollSlider";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { motionConfigAnimate } from "@/shared/const/motion";

// const Advantages = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref);

//   return (
//     <motion.section
//       id="advantages"
//       className="bg-white pb-[104px] pt-[88px] max-mobile:pb-[64px] max-mobile:pt-[32px]"
//       ref={ref}
//       {...motionConfigAnimate}
//       animate={
//         inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
//       }
//     >
//       <Container className="max-mobile:px-0 mobile:ml-auto mobile:mr-0 mobile:max-w-[1440px]">
//         <h2 className="heading-two max-mobile:px-[20px]">
//           Почему выбирают <span className="text-buttonColor">Red</span>Import?
//         </h2>

//         <div className="pt-[64px] max-mobile:pt-[32px]">
//           <AdvantagesScrollSlider />
//         </div>

//         <p className="pt-[36px] text-[13px] font-light leading-[15.5px] text-[#505050] max-mobile:px-[20px] max-mobile:pt-[20px] max-mobile:text-[16px] max-mobile:leading-[19.2px]">
//           Параллельный импорт спецтехники без посредников. Лучшие цены,
//           качественная продукция и оперативная доставка — вот почему нас
//           выбирают!
//         </p>
//       </Container>
//     </motion.section>
//   );
// };

// export { Advantages };

import { Container } from "@/shared/ui/container";
import { AdvantagesScrollSlider } from "./AdvantagesScrollSlider";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motionConfigAnimate } from "@/shared/const/motion";

const Advantages = () => {
  const ref = useRef(null);
  const ref2 = useRef<any>(null);
  const inView = useInView(ref);

  // Состояние для хранения расстояния до правого края экрана
  const [distanceToRight, setDistanceToRight] = useState(0);

  // Функция для расчета расстояния до правого края экрана
  const calculateDistance = () => {
    if (ref2.current) {
      const elementRect = ref2.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const distance = windowWidth - elementRect.right; // Расстояние до правого края экрана

      setDistanceToRight(distance);
    }
  };

  // Вызываем расчет при первом рендере и при изменении размера окна
  useEffect(() => {
    calculateDistance();
    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance); // Очистка слушателя при размонтировании
    };
  }, []);

  return (
    <motion.section
      id="advantages"
      className="bg-white pb-[104px] pt-[88px] max-mobile:pb-[64px] max-mobile:pt-[32px]"
      ref={ref}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
    >
      <Container className="max-mobile:px-0 mobile:ml-auto">
        <h2 className="heading-two max-mobile:px-[20px]">
          Почему выбирают <span className="text-buttonColor">Red</span>Import?
        </h2>

        <div
          ref={ref2}
          style={{ width: `${distanceToRight}px` }}
          className="pt-[64px] max-mobile:pt-[32px]"
        >
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

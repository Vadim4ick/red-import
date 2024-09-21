"use client";

import { AdvantagesScrollSlide } from "./AdvantagesScrollSlide";
import { useMedia } from "@/shared/hooks/useMedia";
import { useGetAdvantagesQuery } from "@/graphql/__generated__";
import { A11y, Grid, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import { useSwiper } from "@/shared/hooks/useSwiper";

const AdvantagesScrollSlider = () => {
  const { data, isLoading } = useGetAdvantagesQuery();

  const ref = useRef<HTMLDivElement | null>(null);

  const isMobile = useMedia(768);

  useSwiper({
    ref: ref,
    options: {
      modules: [A11y, Mousewheel],
      direction: "horizontal",
      spaceBetween: 20,
      speed: 800,
      mousewheel: {
        releaseOnEdges: true,
      },
    },
  });

  return (
    <div
      ref={isMobile ? null : ref}
      className="custom-scrollbar swiper w-[81vw]"
    >
      <div className="swiper-wrapper max-mobile:flex-col max-mobile:items-center max-mobile:gap-[20px]">
        {data &&
          !isLoading &&
          data.advantages.map((el) => {
            return (
              <AdvantagesScrollSlide
                key={el.id}
                className="swiper-slide h-auto"
                item={el}
              />
            );
          })}
      </div>
    </div>
  );
};

export { AdvantagesScrollSlider };
// "use client";

// import { AdvantagesScrollSlide } from "./AdvantagesScrollSlide";
// import { motion } from "framer-motion";
// import { useScroll } from "@/shared/hooks/useScroll";
// import { useMedia } from "@/shared/hooks/useMedia";
// import { useGetAdvantagesQuery } from "@/graphql/__generated__";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Grid, Mousewheel } from "swiper/modules";

// const AdvantagesScrollSlider = () => {
//   // const { handleScroll, ref } = useScroll();
//   const { data, isLoading } = useGetAdvantagesQuery();

//   const isMobile = useMedia(768);

//   return (
//     // <motion.div
//     //   // onScroll={!isMobile ? handleScroll : undefined}
//     //   // ref={!isMobile ? ref : undefined}
//     //   className="custom-scrollbar flex gap-[20px] max-mobile:flex-col max-mobile:items-center"
//     // >
//     <Swiper
//       // className="h-[215px]"
//       className="custom-scrollbar flex h-[255px] gap-[20px] max-mobile:flex-col max-mobile:items-center"
//       // install Swiper modules
//       modules={[A11y, Mousewheel]}
//       spaceBetween={20}
//       // grid={{ rows: 1, fill: "column" }}
//       speed={800}
//       mousewheel={{
//         releaseOnEdges: true,
//       }}
//       // observer={true}
//       // observeParents={true}
//       slidesPerView={3.15}
//     >
//       {data &&
//         !isLoading &&
//         data.advantages.map((el) => {
//           return (
//             <SwiperSlide key={el.id}>
//               <AdvantagesScrollSlide className="h-full" item={el} />
//             </SwiperSlide>
//           );
//         })}
//     </Swiper>
//     // </motion.div>
//   );
// };

// export { AdvantagesScrollSlider };

"use client";

import { useRef } from "react";
import { Container } from "@/shared/ui/container";
import { CasesItem } from "./CasesItem";
import { useMedia } from "@/shared/hooks/useMedia";
import { useGetSuccessfulCasesQuery } from "@/graphql/__generated__";
import { motion, useInView } from "framer-motion";
import { motionConfigAnimate } from "@/shared/const/motion";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { A11y, Mousewheel } from "swiper/modules";

const Cases = () => {
  const { data, isLoading } = useGetSuccessfulCasesQuery();

  const refMotion = useRef(null);
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

  const inView = useInView(refMotion);

  return (
    <motion.section
      id="cases"
      ref={refMotion}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
      className="overflow-hidden pb-[96px] pt-[72px] max-mobile:pb-[64px] max-mobile:pt-[32px]"
    >
      <Container className="relative max-mobile:px-[20px] mobile:ml-auto">
        <h2 className="heading-two">Успешные кейсы</h2>

        <div className="pt-[48px] max-mobile:pt-[24px]">
          <div
            ref={isMobile ? null : ref}
            className="custom-scrollbar swiper flex w-[81vw] gap-[20px] max-desktop:w-[100vw] max-mobile:w-full max-mobile:flex-col max-mobile:items-center"
          >
            <div className="swiper-wrapper max-mobile:flex-col max-mobile:gap-[48px]">
              {data &&
                !isLoading &&
                data.successfulCases.map((el) => (
                  <CasesItem key={el.id} item={el} />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export { Cases };

"use client";

import { Container } from "@/shared/ui/container";
import { CasesItem } from "./CasesItem";
import { useMedia } from "@/shared/hooks/useMedia";
import { useScroll } from "@/shared/hooks/useScroll";
import { useGetSuccessfulCasesQuery } from "@/graphql/__generated__";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { motionConfigAnimate } from "@/shared/const/motion";

const Cases = () => {
  const { handleScroll, ref } = useScroll();

  const { data, isLoading } = useGetSuccessfulCasesQuery();

  const isMobile = useMedia(768);
  const refMotion = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.section
      ref={refMotion}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
      className="pb-[96px] pt-[72px] max-mobile:pb-[64px] max-mobile:pt-[32px]"
    >
      <Container className="mobile:ml-auto mobile:mr-0 mobile:max-w-[1440px]">
        <h2 className="heading-two">Успешные кейсы</h2>

        <div className="pt-[48px] max-mobile:pt-[24px]">
          <div
            onScroll={!isMobile ? handleScroll : undefined}
            ref={!isMobile ? ref : undefined}
            className="custom-scrollbar flex gap-[20px] max-mobile:flex-col max-mobile:items-center mobile:overflow-x-auto"
          >
            {data &&
              !isLoading &&
              data.successfulCases.map((el) => (
                <CasesItem key={el.id} item={el} />
              ))}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export { Cases };

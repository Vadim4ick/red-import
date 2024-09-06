"use client";

import { Container } from "@/shared/ui/container";
// import { motion } from "framer-motion";
import { casesData } from "../model/mockData";
import { CasesItem } from "./CasesItem";
import { useMedia } from "@/shared/hooks/useMedia";
import { useScroll } from "@/shared/hooks/useScroll";

const Cases = () => {
  const { handleScroll, ref } = useScroll();

  const isMobile = useMedia(768);

  return (
    <section className="pb-[96px] pt-[72px] max-mobile:pb-[64px] max-mobile:pt-[32px]">
      <Container className="mobile:ml-auto mobile:mr-0 mobile:max-w-[1440px]">
        <h2 className="heading-two">Успешные кейсы</h2>

        <div className="pt-[48px] max-mobile:pt-[24px]">
          <div
            onScroll={!isMobile ? handleScroll : undefined}
            ref={!isMobile ? ref : undefined}
            className="custom-scrollbar flex gap-[20px] max-mobile:flex-col max-mobile:items-center mobile:overflow-x-auto"
          >
            {casesData.map((el) => (
              <CasesItem key={el.id} item={el} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Cases };

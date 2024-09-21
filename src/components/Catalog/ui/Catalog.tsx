import { Container } from "@/shared/ui/container";
import { Filters } from "./Filters/Filters";
import { CatalogItems } from "./CatalogItems/CatalogItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { motionConfigAnimate } from "@/shared/const/motion";

const Catalog = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.section
      id="catalog"
      className="bg-[#F5F5F5] pb-[96px] pt-[64px] max-mobile:pb-[64px] max-mobile:pt-[32px]"
      ref={ref}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
    >
      <Container>
        <h2 className="heading-two text-center max-mobile:text-start">
          Каталог техники
        </h2>

        <div className="pt-[64px] max-mobile:pt-[32px]">
          <Filters />
        </div>

        <CatalogItems />
      </Container>
    </motion.section>
  );
};

export { Catalog };

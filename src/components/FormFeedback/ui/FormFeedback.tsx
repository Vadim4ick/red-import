import { Container } from "@/shared/ui/container";
import Image from "next/image";
import { FormFeedbackForm } from "./FormFeedbackForm";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { motionConfigAnimate } from "@/shared/const/motion";
import { useGetSectionFormSendQuery } from "@/graphql/__generated__";

const FormFeedback = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const { data, isLoading } = useGetSectionFormSendQuery();

  return (
    <section className="rounded-[2px] bg-white mobile:pb-[128px]">
      <Container className="max-w-[1258px] max-mobile:px-0">
        <motion.div
          ref={ref}
          {...motionConfigAnimate}
          animate={
            inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
          }
        >
          <div className="flex justify-between gap-2 bg-[#EDEDED] pb-[28px] pl-[68px] pr-[98px] pt-[44px] max-desktop:px-[45px] max-mobile:flex-col max-mobile:items-center max-mobile:gap-[24px] max-mobile:px-[20px] max-mobile:pb-[64px] max-mobile:pt-[32px]">
            <div className="flex max-w-[596px] flex-col justify-between gap-[36px]">
              <div className="flex flex-col gap-[24px] max-mobile:gap-[48px]">
                {data?.sectionFormSend && (
                  <h2 className="heading-two max-mobile:max-w-[246px]">
                    {data.sectionFormSend.title}
                  </h2>
                )}

                {data?.sectionFormSend && (
                  <p className="max-w-[491px] leading-[19px] text-[#5A5A5A] max-tablet:hidden">
                    {data.sectionFormSend.description}
                  </p>
                )}
              </div>

              <div className="max-mobileSmall:flex max-mobileSmall:justify-center">
                <Image
                  src={"/img/formFeedback/1.png"}
                  alt="img"
                  width={322}
                  height={197}
                />
              </div>
            </div>

            <FormFeedbackForm />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export { FormFeedback };

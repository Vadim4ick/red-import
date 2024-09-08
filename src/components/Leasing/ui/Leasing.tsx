import { Container } from "@/shared/ui/container";
import { LeasingCalculation } from "./LeasingCalculation";
import { LeasingForm } from "./LeasingForm";

const Leasing = () => {
  return (
    <section className="bg-white pb-[128px] pt-[96px] max-mobile:pb-[64px] max-mobile:pt-[32px]">
      <Container>
        <div className="flex flex-col gap-[60px] max-mobile:gap-[48px]">
          <div className="flex flex-col gap-[24px] max-mobile:gap-[12px]">
            <h2 className="heading-two">Рассчитайте лизинг</h2>

            <p className="text-[17px] font-light leading-[24px] text-[#5A5A5A]">
              Укажите все параметры и получите точный расчёт
            </p>
          </div>

          <div className="flex justify-between gap-2 max-tablet:flex-col max-tablet:gap-[80px] max-mobile:gap-[64px]">
            <LeasingCalculation className="w-full tablet:max-w-[625px]" />

            <LeasingForm className="w-full rounded-[2px] tablet:max-w-[368px]" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Leasing };

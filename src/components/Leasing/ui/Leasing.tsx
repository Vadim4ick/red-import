import { Container } from "@/shared/ui/container";
import { LeasingForm } from "./LeasingForm";

const Leasing = () => {
  return (
    <section className="bg-white pb-[128px] pt-[96px]">
      <Container>
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[24px]">
            <h2 className="heading-two">Рассчитайте лизинг</h2>

            <p className="text-[17px] font-light leading-[24px] text-[#5A5A5A]">
              Укажите все параметры и получите точный расчёт
            </p>
          </div>

          <div>
            <LeasingForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Leasing };

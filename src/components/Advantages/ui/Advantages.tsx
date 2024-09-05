import { Container } from "@/shared/ui/container";
import { AdvantagesScrollSlider } from "./AdvantagesScrollSlider";

const Advantages = () => {
  return (
    <section className="pb-[104px] pt-[88px]">
      <Container className="ml-auto mr-0 max-w-[1440px]">
        <h2 className="text-[36px] font-medium leading-[43px]">
          Почему выбирают <span className="text-buttonColor">Red</span>Import?
        </h2>

        <div className="pt-[64px]">
          <AdvantagesScrollSlider />
        </div>

        <p className="pt-[36px] text-[12px] font-light leading-[14px] text-[#505050]">
          Параллельный импорт спецтехники без посредников. Лучшие цены,
          качественная продукция и оперативная доставка — вот почему нас
          выбирают!
        </p>
      </Container>
    </section>
  );
};

export { Advantages };

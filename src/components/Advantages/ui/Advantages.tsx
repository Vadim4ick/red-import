import { Container } from "@/shared/ui/container";
import { AdvantagesScrollSlider } from "./AdvantagesScrollSlider";

const Advantages = () => {
  return (
    <section className="bg-white pb-[104px] pt-[88px] max-mobile:pb-[64px] max-mobile:pt-[32px]">
      <Container className="mobile:ml-auto mobile:mr-0 mobile:max-w-[1440px]">
        <h2 className="heading-two">
          Почему выбирают <span className="text-buttonColor">Red</span>Import?
        </h2>

        <div className="pt-[64px] max-mobile:pt-[32px]">
          <AdvantagesScrollSlider />
        </div>

        <p className="pt-[36px] text-[13px] font-light leading-[15.5px] text-[#505050] max-mobile:pt-[20px]">
          Параллельный импорт спецтехники без посредников. Лучшие цены,
          качественная продукция и оперативная доставка — вот почему нас
          выбирают!
        </p>
      </Container>
    </section>
  );
};

export { Advantages };

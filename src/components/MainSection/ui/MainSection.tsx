import { Container } from "@/shared/ui/container";
import { MainSlider } from "./MainSlider";

const MainSection = () => {
  return (
    <section className="pt-[61px] max-mobile:pt-[32px]">
      <Container>
        <div className="flex flex-col gap-6 pb-[90px] max-mobile:gap-4 max-mobile:pb-[62px]">
          <h1 className="max-w-[600px] text-[48px] font-medium leading-[48px] max-mobile:text-[27px] max-mobile:leading-[27px]">
            Надежная спецтехника для вашего бизнеса
          </h1>

          <div className="flex flex-col">
            <p className="text-[18px] font-light leading-[22px] max-mobile:text-[14px] max-mobile:leading-[16px] max-mobile:text-[#6C6C6C]">
              Импортируем, доставляем, обеспечиваем качество.
            </p>
            <p className="text-[18px] font-light leading-[22px] max-mobile:text-[14px] max-mobile:leading-[16px] max-mobile:text-[#6C6C6C]">
              Спецтехника напрямую от производителей по лучшим ценам!
            </p>
          </div>
        </div>
      </Container>

      <MainSlider />

      <div className="bg-[#D3961F]">
        <Container className="w-full desktop:max-w-[1200px] desktop:pl-[55px]">
          <p className="w-full py-2 text-[13px] font-light leading-[15px] text-white max-mobile:py-3 max-mobile:text-[12px] max-mobile:leading-[16px]">
            Спецтехника для любых задач — от экскаваторов до бульдозеров.
            Импортируем напрямую, исключая посредников. Высокое качество и
            быстрая доставка по всей России.
          </p>
        </Container>
      </div>
    </section>
  );
};

export { MainSection };

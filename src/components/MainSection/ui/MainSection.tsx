import { Container } from "@/shared/ui/container";
import { MainSlider } from "./MainSlider";

const MainSection = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-6 pb-[57px]">
          <h1 className="max-w-[600px] text-[48px] font-medium leading-[48px]">
            Надежная спецтехника для вашего бизнеса
          </h1>

          <div className="flex flex-col">
            <p className="text-[18px] font-light leading-[22px]">
              Импортируем, доставляем, обеспечиваем качество.
            </p>
            <p className="text-[18px] font-light leading-[22px]">
              Спецтехника напрямую от производителей по лучшим ценам!
            </p>
          </div>
        </div>

        <MainSlider />
      </Container>

      <div className="bg-[#D3961F]">
        <Container className="w-full max-w-[1150px] pl-[25px]">
          <p className="w-full py-2 text-[13px] leading-[15px] text-white">
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

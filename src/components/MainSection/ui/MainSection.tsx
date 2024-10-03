import { Container } from "@/shared/ui/container";
import { MainSlider } from "./MainSlider";
import { useGetSectionMainSliderQuery } from "@/graphql/__generated__";
import ReactMarkdown from "react-markdown";

const MainSection = () => {
  const { data, isLoading } = useGetSectionMainSliderQuery();
  return (
    <section className="pt-[64px] max-mobile:pt-[32px]">
      <Container>
        <div className="flex flex-col gap-6 pb-[69px] max-mobile:gap-4 max-mobile:pb-[62px]">
          {data?.sectionMainSlider && (
            <h1 className="max-w-[600px] text-[48px] font-medium leading-[48px] max-mobile:text-[27px] max-mobile:leading-[27px]">
              {data.sectionMainSlider.title}
            </h1>
          )}

          <ReactMarkdown
            components={{
              li: ({ children }) => {
                return <li>{children}</li>;
              },

              ul: ({ children }) => {
                return (
                  <ul className="text-[18px] font-light leading-[22px] max-mobile:text-[16px] max-mobile:leading-[19px] max-mobile:text-[#6C6C6C]">
                    {children}
                  </ul>
                );
              },
            }}
          >
            {data?.sectionMainSlider.description}
          </ReactMarkdown>
        </div>
      </Container>

      <MainSlider />

      <div className="bg-[#D3961F]">
        <Container className="w-full desktop:max-w-[1200px] desktop:pl-[55px]">
          <p className="w-full py-2 text-[13px] font-light leading-[15px] text-white max-mobile:py-3 max-mobile:text-[14px] max-mobile:leading-[16px]">
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

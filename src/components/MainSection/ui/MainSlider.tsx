import { Button } from "@/shared/ui/button";
import { sliderData } from "../model/mockData";
import { Phone } from "@/shared/icons/Phone";

const MainSlider = () => {
  return (
    <div className="bg-white">
      {sliderData.map((slide) => {
        return (
          <article key={slide.id} className="relative grid h-full grid-cols-2">
            <div className="pb-[49px] pl-[57px] pt-[30px]">
              <div className="flex flex-col gap-[7px]">
                <p className="font-medium leading-[19px]">{slide.title}</p>

                <p className="text-[14px] leading-[16px] text-[#7B7B7B]">
                  {slide.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-[3px] pt-4 text-buttonColor">
                <div className="flex items-end gap-[3px] font-medium">
                  <p className="text-[24px] leading-[28px]">{slide.price}</p>

                  <span className="pb-[4px] text-[14px] leading-[16px]">
                    руб.
                  </span>
                </div>

                {slide.nds && (
                  <div className="text-[12px] leading-[14px]">
                    Цена с НДС {slide.nds}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 pt-[27px]">
                {slide.parameters.map((param) => {
                  return (
                    <p
                      key={param.id}
                      className="flex items-center gap-2 text-[14px] leading-[16px]"
                    >
                      <span className="font-light text-[#7B7B7B]">
                        {param.text}
                      </span>
                      <b>{param.value}</b>
                    </p>
                  );
                })}
              </div>

              <div className="flex items-center gap-[10px] pt-[20px]">
                <Button
                  variant={"secondary"}
                  className="h-[42px] w-full max-w-[155px]"
                >
                  Подробнее
                </Button>

                <Button
                  addonLeft={<Phone className="mr-[7.6px] size-[16px]" />}
                  className="h-[42px] w-full max-w-[155px]"
                >
                  Позвонить
                </Button>
              </div>
            </div>

            <div className="h-full w-full">
              <img
                className="absolute bottom-0 right-0"
                src={slide.img}
                alt={slide.title}
              />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export { MainSlider };

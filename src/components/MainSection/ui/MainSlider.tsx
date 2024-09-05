"use client";

import { Button } from "@/shared/ui/button";
import { sliderData } from "../model/mockData";
import { Phone } from "@/shared/icons/Phone";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { Arrow } from "@/shared/icons/Arrow";
import { useState } from "react";
import Swiper from "swiper";
import { numberSlide } from "@/shared/lib/numberSlide";

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Индекс текущего слайда (начинается с 1)
  const [totalSlides, setTotalSlides] = useState(0); // Общее количество слайдов

  const handleSlideChange = (swiper: Swiper) => {
    setCurrentSlide(swiper.realIndex + 1); // Обновляем текущий слайд
  };

  const handleSwiperInit = (swiper: Swiper) => {
    setTotalSlides(swiper.slides.length); // Устанавливаем общее количество слайдов
  };

  return (
    <div className="relative">
      <SwiperContainer
        spaceBetween={25}
        slidesPerView={1}
        modules={[Navigation]}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiperInit}
        navigation={{
          nextEl: "#mainSlider-next",
          prevEl: "#mainSlider-prev",
        }}
      >
        {sliderData.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <article className="relative grid h-full grid-cols-[352px_1fr] rounded-t-[6px] bg-white pl-[57px]">
                <div className="pb-[49px] pt-[30px]">
                  <div className="flex flex-col gap-[7px]">
                    <p className="font-medium leading-[19px]">{slide.title}</p>

                    <p className="text-[14px] leading-[16px] text-[#7B7B7B]">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col gap-[3px] pt-4 text-buttonColor">
                    <div className="flex items-end gap-[3px] font-medium">
                      <p className="text-[24px] leading-[28px]">
                        {slide.price}
                      </p>

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
                          className="flex gap-2 text-[14px] leading-[16px]"
                        >
                          <span className="font-light text-[#7B7B7B]">
                            {param.text}
                          </span>
                          <span>{param.value}</span>
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

                <div className="flex h-full w-full items-end justify-end">
                  <img src={slide.img} alt={slide.title} />
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </SwiperContainer>

      <div className="absolute right-0 top-[-12px] z-10 -translate-y-full">
        <div className="flex items-center justify-between gap-3 text-white">
          <button
            id="mainSlider-prev"
            className="backdrop relative flex size-[30px] items-center justify-center rounded-full border-[2px] border-[#f1f1f1] bg-white"
          >
            <Arrow />
          </button>

          <div className="flex text-defaultTextColor">
            <div className="pr-[2px] leading-[19px]">
              {numberSlide(currentSlide)}
            </div>
            <span className="leading-[19px] text-[#A7A7A7]">/</span>

            {Boolean(totalSlides) ? (
              <div className="leading-[19px] text-[#A7A7A7]">
                {numberSlide(totalSlides)}
              </div>
            ) : (
              <div className="h-[19px] w-[20px] animate-pulse rounded bg-gray-200"></div>
            )}
          </div>

          <button
            id="mainSlider-next"
            className="backdrop relative flex size-[30px] items-center justify-center rounded-full border-[2px] border-[#f1f1f1] bg-white"
          >
            <Arrow className="rotate-180" />
          </button>
        </div>
      </div>

      <div className="absolute left-[7px] top-0 -translate-y-full rounded-t-[6px] bg-[#181818] px-[57px] py-[7px] uppercase leading-[19px] text-white">
        УЖЕ В ПРОДАЖЕ
      </div>
    </div>
  );
};

export { MainSlider };

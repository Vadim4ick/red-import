"use client";

import { Button } from "@/shared/ui/button";
import { sliderData } from "../model/mockData";
import { Phone } from "@/shared/icons/Phone";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { Arrow } from "@/shared/icons/Arrow";
import React, { useState } from "react";
import Swiper from "swiper";
import { numberSlide } from "@/shared/lib/numberSlide";
import { useMedia } from "@/shared/hooks/useMedia";
import { Container } from "@/shared/ui/container";

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Индекс текущего слайда (начинается с 1)
  const [totalSlides, setTotalSlides] = useState(0); // Общее количество слайдов

  const handleSlideChange = (swiper: Swiper) => {
    setCurrentSlide(swiper.realIndex + 1); // Обновляем текущий слайд
  };

  const handleSwiperInit = (swiper: Swiper) => {
    setTotalSlides(swiper.slides.length); // Устанавливаем общее количество слайдов
  };

  const isMobile = useMedia(768);

  const ContainerSlider = !isMobile ? Container : React.Fragment;

  return (
    <ContainerSlider>
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
          speed={800}
        >
          {sliderData.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <article className="rounded:rounded-t-[6px] relative grid h-full bg-white pl-[57px] max-tablet:pl-[20px] mobile:grid-cols-[352px_1fr]">
                  <div className="pb-[49px] pt-[30px] max-mobile:pb-[22.5px] max-mobile:pt-[34px]">
                    <div className="flex flex-col gap-[7px] max-mobile:gap-0.5">
                      <p className="font-medium leading-[19px]">
                        {slide.title}
                      </p>

                      <p className="text-[14px] leading-[16px] text-[#7B7B7B] max-mobile:text-[12px] max-mobile:leading-[14px]">
                        {slide.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-col pt-4 text-buttonColor max-mobile:pt-3 mobile:gap-[3px]">
                      <div className="flex items-end gap-[3px] font-medium">
                        <p className="text-[24px] leading-[28p] max-mobile:text-[20px] max-mobile:leading-[24px]">
                          {slide.price}
                        </p>

                        <span className="pb-[4px] text-[14px] leading-[16px] max-mobile:pb-[2px]">
                          руб.
                        </span>
                      </div>

                      {slide.nds && (
                        <div className="text-[12px] leading-[14px]">
                          Цена с НДС {slide.nds}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 pt-[27px] max-mobile:pt-[31px]">
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

                    <div className="flex w-full items-center gap-[10px] pt-[20px] max-mobile:absolute max-mobile:bottom-8 max-mobile:justify-center max-mobile:pr-[20px]">
                      <Button
                        variant={"secondary"}
                        className="h-[42px] w-full max-w-[155px] max-mobile:h-[40px]"
                      >
                        Подробнее
                      </Button>

                      <Button
                        addonLeft={<Phone className="mr-[7.6px] size-[16px]" />}
                        className="h-[42px] w-full max-w-[155px] max-mobile:h-[40px]"
                      >
                        Позвонить
                      </Button>
                    </div>
                  </div>

                  <div className="flex h-full w-full items-end justify-end">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="object-cover max-mobile:h-full"
                    />
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </SwiperContainer>

        <div className="absolute right-0 top-[-12px] z-10 -translate-y-full max-mobile:top-[-5px]">
          <div className="flex items-center justify-between gap-3 text-white max-mobile:gap-2 max-mobile:pr-[22px]">
            <button
              id="mainSlider-prev"
              className="relative flex size-[30px] items-center justify-center rounded-full border-[2px] border-[#f1f1f1] bg-white transition-colors hover:bg-[#F1F1F1] disabled:pointer-events-none disabled:opacity-40 max-mobile:size-[26px]"
            >
              <Arrow className="max-mobile:size-[7.2px]" />
            </button>

            <div className="flex text-defaultTextColor max-mobile:hidden">
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
              className="relative flex size-[30px] items-center justify-center rounded-full border-[2px] border-[#f1f1f1] bg-white transition-colors hover:bg-[#F1F1F1] disabled:pointer-events-none disabled:opacity-40 max-mobile:size-[26px]"
            >
              <Arrow className="rotate-180 max-mobile:size-[7.2px]" />
            </button>
          </div>
        </div>

        <div className="absolute left-[7px] top-0 -translate-y-full rounded-t-[6px] bg-[#181818] px-[57px] py-[7px] uppercase leading-[19px] text-white max-mobile:left-[20px] max-mobile:px-[32px] max-mobile:text-[14px] max-mobile:leading-[16px]">
          УЖЕ В ПРОДАЖЕ
        </div>
      </div>
    </ContainerSlider>
  );
};

export { MainSlider };

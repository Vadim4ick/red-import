/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/shared/ui/button";
import { Phone } from "@/shared/icons/Phone";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { Arrow } from "@/shared/icons/Arrow";
import React, { useContext, useState } from "react";
import Swiper from "swiper";
import { numberSlide } from "@/shared/lib/numberSlide";
import { useMedia } from "@/shared/hooks/useMedia";
import { Container } from "@/shared/ui/container";
import ReactMarkdown from "react-markdown";
import { GoodsFragment, useGetMainSliderQuery } from "@/graphql/__generated__";
import { formatPrice, pathImage } from "@/shared/lib/utils";
import { Skeleton } from "@/shared/ui/skeleton";
import { CatalogModalProviderContext } from "@/shared/providers/catalogModal";
import { toggleBidOpen } from "@/store/bidModal";

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Индекс текущего слайда (начинается с 1)
  const [totalSlides, setTotalSlides] = useState(0); // Общее количество слайдов

  const { data, isLoading } = useGetMainSliderQuery();

  const handleSlideChange = (swiper: Swiper) => {
    setCurrentSlide(swiper.realIndex + 1); // Обновляем текущий слайд
  };

  const handleSwiperInit = (swiper: Swiper) => {
    setTotalSlides(swiper.slides.length); // Устанавливаем общее количество слайдов
  };

  const isMobile = useMedia(768);

  const ContainerSlider = !isMobile ? Container : React.Fragment;

  const { setOpen, setSelectedItem } = useContext(CatalogModalProviderContext);

  const handleClickDescription = (item: GoodsFragment) => {
    setOpen(true);
    setSelectedItem(item);
  };

  if (isLoading) {
    return (
      <ContainerSlider>
        <div className="relative">
          <Skeleton className="h-[391px] w-full" />

          <div className="absolute right-0 top-[-12px] z-10 -translate-y-full max-mobile:top-[-5px]">
            <Skeleton className="h-[30px] w-[130px]" />
          </div>
        </div>
      </ContainerSlider>
    );
  }

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
          {data &&
            data.mainSlider.map((slide) => {
              return (
                <SwiperSlide key={slide.id}>
                  <article className="rounded:rounded-t-[6px] relative grid h-full bg-white pl-[57px] max-tablet:pl-[20px] mobile:grid-cols-[352px_1fr]">
                    <div className="pb-[49px] pt-[30px] max-mobile:pb-[22.5px] max-mobile:pt-[34px]">
                      <div className="flex flex-col gap-[7px] max-mobile:gap-0.5">
                        <p className="font-medium leading-[19px]">
                          {slide.goods.title}
                        </p>

                        <p className="text-[14px] leading-[16px] text-[#7B7B7B] max-mobile:text-[14px] max-mobile:leading-[16.8px]">
                          {slide.goods.subtitle}
                        </p>
                      </div>

                      <div className="flex flex-col pt-4 text-buttonColor max-mobile:pt-3 mobile:gap-[3px]">
                        <div className="flex items-end gap-[3px] font-medium">
                          <p className="text-[24px] leading-[29px] max-mobile:text-[22px] max-mobile:leading-[26px]">
                            {formatPrice(slide.goods.price)}
                          </p>

                          <span className="pb-[4px] text-[14px] leading-[16px] max-mobile:pb-[2px]">
                            руб.
                          </span>
                        </div>

                        {slide.goods.nds && (
                          <div className="text-[12px] leading-[14px] max-mobile:text-[14px] max-mobile:leading-[16.8px]">
                            Цена с НДС {slide.goods.nds}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 pt-[27px] max-mobile:pt-[31px]">
                        <ReactMarkdown
                          components={{
                            li: ({ children }) => {
                              return (
                                <li>
                                  <div className="text-[#7B7B7B]">
                                    <p className="mr-2 text-[14px] font-light leading-[16px] max-mobile:text-[16px] max-mobile:leading-[19px]">
                                      {children}
                                    </p>
                                  </div>
                                </li>
                              );
                            },

                            ul: ({ children }) => {
                              return (
                                <ul className="flex w-full flex-col gap-2">
                                  {children}
                                </ul>
                              );
                            },

                            strong: ({ children }) => {
                              return (
                                <span className="pl-2 font-normal text-defaultTextColor">
                                  {children}
                                </span>
                              );
                            },
                          }}
                        >
                          {slide.goods.description}
                        </ReactMarkdown>
                      </div>

                      <div className="flex w-full items-center gap-[10px] pt-[20px] max-mobile:absolute max-mobile:bottom-8 max-mobile:left-0 max-mobile:justify-center">
                        <Button
                          onClick={() => handleClickDescription(slide.goods)}
                          variant={"secondary"}
                          className="h-[42px] w-full max-w-[155px] max-mobile:h-[40px]"
                        >
                          Подробнее
                        </Button>

                        <Button
                          onClick={() => toggleBidOpen()}
                          addonLeft={
                            <Phone className="mr-[7.6px] size-[16px]" />
                          }
                          className="h-[42px] w-full max-w-[155px] max-mobile:h-[40px]"
                        >
                          Позвонить
                        </Button>
                      </div>
                    </div>

                    <div className="flex h-full w-full items-end justify-end">
                      <img
                        src={pathImage(slide.img.id)}
                        alt={slide.goods.title}
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
              <Arrow className="text-defaultTextColor max-mobile:size-[7.2px]" />
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
              <Arrow className="rotate-180 text-defaultTextColor max-mobile:size-[7.2px]" />
            </button>
          </div>
        </div>

        <div className="absolute left-[7px] top-0 -translate-y-full rounded-t-[6px] bg-[#181818] px-[57px] py-[7px] uppercase leading-[19px] text-white max-mobile:left-[20px] max-mobile:px-[32px] max-mobile:text-[14px] max-mobile:leading-[16px]">
          В НАЛИЧИИ
        </div>
      </div>
    </ContainerSlider>
  );
};

export { MainSlider };

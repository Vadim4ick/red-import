"use client";

import { useMedia } from "@/shared/hooks/useMedia";
import { Arrow } from "@/shared/icons/Arrow";
import { formatPrice, pathImage } from "@/shared/lib/utils";
import { CatalogModalProviderContext } from "@/shared/providers/catalogModal";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { useContext, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { GoodsFragment } from "@/graphql/__generated__";

const CatalogItem = ({ item }: { item: GoodsFragment }) => {
  const { setOpen, setSelectedItem } = useContext(CatalogModalProviderContext);

  const [descOpen, setDescOpen] = useState(false);

  const isMobile = useMedia(768);

  const handleClickDescription = () => {
    if (!isMobile) {
      setOpen(true);
      setSelectedItem(item);
    } else {
      handleClickDesc();
    }
  };

  const handleClickDesc = () => setDescOpen(!descOpen);

  return (
    <article className="grid w-full grid-cols-[336px_1fr] gap-[30px] object-cover py-[32px] max-mobile:mt-[32px] max-mobile:grid-cols-1 max-mobile:gap-3 max-mobile:rounded-[4px] max-mobile:bg-white max-mobile:p-[6px] mobile:border-b mobile:border-[#8F8F8F]">
      <div className="relative h-[264px] max-mobile:h-[231px]">
        <Image
          src={pathImage(item.mainImage.id)}
          className="object-cover"
          alt={item.title}
          fill
        />
      </div>

      <div className="flex flex-col justify-between gap-2 max-mobile:gap-4">
        <div className="flex items-center justify-between gap-2 max-mobile:flex-col max-mobile:gap-[20px]">
          <div className="flex flex-col gap-[6px] max-mobile:items-center max-mobile:gap-[2px]">
            <h3 className="heading-three max-mobile:text-[18px] max-mobile:leading-[22px]">
              {item.title}
            </h3>

            <p className="text-[14px] leading-[16px] text-[#5A5A5A]">
              {item.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-[6px] max-mobile:items-center max-mobile:gap-[2px] mobile:items-end">
            <div className="heading-three">
              {formatPrice(item.price)}{" "}
              <span className="text-[14px] leading-[16px]">руб.</span>
            </div>

            {item.nds && (
              <div className="text-[12px] leading-[14px] text-[#5A5A5A]">
                Цена с НДС {item.nds}%
              </div>
            )}
          </div>
        </div>

        <div className="flex w-full items-end justify-between gap-2">
          <ReactMarkdown
            components={{
              li: ({ children }) => {
                return (
                  <li>
                    <div className="text-[#7B7B7B]">
                      <p className="flex gap-2 text-[14px] font-light leading-[16px]">
                        {children}
                      </p>
                    </div>
                  </li>
                );
              },

              ul: ({ children }) => {
                return (
                  <ul className="flex w-full flex-col gap-2 max-tablet:hidden">
                    {children}
                  </ul>
                );
              },

              strong: ({ children }) => {
                return (
                  <span className="font-normal text-defaultTextColor">
                    {children}
                  </span>
                );
              },
            }}
          >
            {item.description}
          </ReactMarkdown>

          <div className="flex w-full flex-col items-end justify-end gap-2 max-mobile:items-center">
            {/* <AnimatePresence mode="wait">
              {descOpen ? (
                <>
                  <motion.div
                    key="description-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-[12px]">
                      <div className="flex w-full flex-col gap-2">
                        <ReactMarkdown
                          components={{
                            li: ({ children }) => {
                              return (
                                <li>
                                  <div className="text-[#5A5A5A]">
                                    <p className="flex gap-2 text-[14px] font-light leading-[16px]">
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
                                <span className="font-normal text-defaultTextColor">
                                  {children}
                                </span>
                              );
                            },
                          }}
                        >
                          {item.description}
                        </ReactMarkdown>
                      </div>

                      {item.dopDescription && (
                        <div className="text-[14px]">
                          <p className="pb-[12px] pt-[24px] leading-[16px]">
                            Дополнительные опции:
                          </p>

                          <ReactMarkdown
                            components={{
                              li: ({ children }) => {
                                return (
                                  <li className="text-[14px] font-light leading-[16px] text-[#5A5A5A]">
                                    - {children}
                                  </li>
                                );
                              },

                              ul: ({ children }) => {
                                return (
                                  <ul className="flex flex-col gap-2">
                                    {children}
                                  </ul>
                                );
                              },
                            }}
                          >
                            {item.dopDescription}
                          </ReactMarkdown>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={handleClickDesc}
                      className="flex w-full items-center justify-center gap-[5px] text-[#5A5A5A]"
                    >
                      <p className="text-[13px] font-light leading-[17px]">
                        Скрыть
                      </p>

                      <Arrow className="size-[7px] rotate-90" />
                    </button>
                  </motion.div>

                  <p className="px-[44px] py-[8px] text-center text-[14px] leading-[16px]">
                    Гарантия 1500 м*ч или 18 мес., что наступит раньше.
                  </p>
                </>
              ) : (
                <motion.div
                  key="description-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Button
                    onClick={handleClickDescription}
                    addonRight={
                      <Arrow className="mt-0.5 size-[6.5px] rotate-180" />
                    }
                    className="h-[42px] w-[220px] items-center gap-[7px] text-[13px] leading-[15px]"
                    variant={"secondary"}
                  >
                    Описание модели
                  </Button>
                </motion.div>
              )}
            </AnimatePresence> */}

            <AnimatePresence mode="wait">
              {descOpen ? (
                <motion.div
                  key="description-content"
                  initial={{ maxHeight: 0, opacity: 0 }}
                  animate={{ maxHeight: "100%", opacity: 1 }} // Use maxHeight for smoother transitions
                  exit={{ maxHeight: 0, opacity: 0 }}
                  transition={{
                    duration: 0.5, // Increase duration for smoother transitions
                    ease: "easeInOut", // Use easeInOut for smoother start and end
                  }}
                  className="overflow-hidden"
                >
                  <>
                    <div className="rounded-[2px] bg-[#F5F5F5] p-[16px]">
                      <div className="pb-[12px]">
                        <div className="flex w-full flex-col gap-2">
                          <ReactMarkdown
                            components={{
                              li: ({ children }) => {
                                return (
                                  <li>
                                    <div className="text-[#5A5A5A]">
                                      <p className="flex gap-2 text-[14px] font-light leading-[16px]">
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
                                  <span className="font-normal text-defaultTextColor">
                                    {children}
                                  </span>
                                );
                              },
                            }}
                          >
                            {item.description}
                          </ReactMarkdown>
                        </div>

                        {item.dopDescription && (
                          <div className="text-[14px]">
                            <p className="pb-[12px] pt-[24px] leading-[16px]">
                              Дополнительные опции:
                            </p>

                            <ReactMarkdown
                              components={{
                                li: ({ children }) => {
                                  return (
                                    <li className="text-[14px] font-light leading-[16px] text-[#5A5A5A]">
                                      - {children}
                                    </li>
                                  );
                                },
                                ul: ({ children }) => {
                                  return (
                                    <ul className="flex flex-col gap-2">
                                      {children}
                                    </ul>
                                  );
                                },
                              }}
                            >
                              {item.dopDescription}
                            </ReactMarkdown>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={handleClickDesc}
                        className="flex w-full items-center justify-center gap-[5px] text-[#5A5A5A]"
                      >
                        <p className="text-[13px] font-light leading-[17px]">
                          Скрыть
                        </p>
                        <Arrow className="size-[7px] rotate-90" />
                      </button>
                    </div>

                    {item.guarant && (
                      <p className="px-[44px] py-[8px] text-center text-[14px] leading-[16px]">
                        {item.guarant}
                      </p>
                    )}
                  </>
                </motion.div>
              ) : (
                <motion.div
                  key="description-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Button
                    onClick={handleClickDescription}
                    addonRight={
                      <Arrow className="mt-0.5 size-[6.5px] rotate-180" />
                    }
                    className="h-[42px] w-[220px] items-center gap-[7px] text-[13px] leading-[15px]"
                    variant={"secondary"}
                  >
                    Описание модели
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              className="h-[42px] w-[220px] bg-transparent"
              variant={"reverseDefault"}
            >
              Купить сейчас
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export { CatalogItem };

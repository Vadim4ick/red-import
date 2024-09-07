"use client";

import { pathImage } from "@/shared/lib/utils";
import { CatalogModalProviderContext } from "@/shared/providers/catalogModal";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import Image from "next/image";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";

const CatalogModal = () => {
  const { open, onClickCatalogModal, selectedItem } = useContext(
    CatalogModalProviderContext,
  );

  if (!selectedItem) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onClickCatalogModal}>
      <DialogContent className="flex h-[725px] w-full max-w-[482px] flex-col justify-between rounded-[2px] border-none p-[20px]">
        <div>
          <DialogHeader className="flex flex-row gap-[18px] pb-[16px]">
            <div>
              <Image
                src={pathImage(selectedItem.mainImage.id)}
                alt={selectedItem.title}
                width={169}
                height={101}
                className="max-h-[101px] max-w-[170px] object-cover"
              />
            </div>

            <div className="flex flex-col items-start gap-[6px]">
              <DialogTitle className="heading-three max-mobile:text-[18px] max-mobile:leading-[22px]">
                {selectedItem.title}
              </DialogTitle>

              <p className="text-[14px] leading-[16px] text-[#5A5A5A]">
                {selectedItem.subtitle}
              </p>

              <div className="flex flex-col items-start gap-[6px] max-mobile:gap-[2px]">
                <div className="heading-three">
                  {selectedItem.price}{" "}
                  <span className="text-[14px] leading-[16px]">руб.</span>
                </div>

                {selectedItem.nds && (
                  <div className="text-[12px] leading-[14px] text-[#5A5A5A]">
                    Цена с НДС {selectedItem.nds}
                  </div>
                )}
              </div>
            </div>
          </DialogHeader>

          <div className="rounded-[2px] bg-[#F5F5F5] py-[2px] pl-[20px] pr-[4px]">
            <div className="custom-scrollbar__catalog h-[469px] overflow-y-scroll pr-[12px]">
              {/* Виртуальные паддинги сверху */}
              <div className="sticky top-0 h-[18px] w-full bg-[#F5F5F5]"></div>

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
                  {selectedItem.description}
                </ReactMarkdown>
              </div>

              {selectedItem.dopDescription && (
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
                          <ul className="flex flex-col gap-2">{children}</ul>
                        );
                      },
                    }}
                  >
                    {selectedItem.dopDescription}
                  </ReactMarkdown>
                </div>
              )}

              {/* Виртуальные паддинги снизу */}
              <div className="sticky bottom-0 h-[18px] w-full bg-[#F5F5F5]"></div>
            </div>
          </div>
        </div>

        <p className="text-center text-[14px] leading-[16px]">
          Гарантия 1500 м*ч или 18 мес., что наступит раньше.
        </p>

        <Button
          variant={"reverseDefault"}
          className="h-[42px] w-full font-normal"
        >
          Купить сейчас
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export { CatalogModal };

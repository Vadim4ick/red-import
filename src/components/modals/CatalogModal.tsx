"use client";

import { useMedia } from "@/shared/hooks/useMedia";
import { formatPrice, pathImage } from "@/shared/lib/utils";
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

  const isMobile = useMedia(768);

  if (!selectedItem) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onClickCatalogModal}>
      <DialogContent className="flex h-[725px] w-full max-w-[482px] flex-col justify-between rounded-[2px] border-none p-[20px] max-mobile:h-[583px] max-mobile:max-w-[320px] max-mobile:gap-[15px] max-mobile:rounded-[4px] max-mobile:p-[12px]">
        <div>
          <DialogHeader className="flex flex-row gap-[18px] space-y-0 pb-[16px] max-mobile:gap-[12px]">
            <div>
              <Image
                src={pathImage(selectedItem.mainImage.id)}
                alt={selectedItem.title}
                width={!isMobile ? 170 : 120}
                height={!isMobile ? 127 : 90}
                className="max-h-[127px] max-w-[170px] object-cover max-mobile:max-h-[90px] max-mobile:max-w-[120px]"
              />
            </div>

            <div className="flex flex-col items-start justify-between gap-[6px]">
              <div className="flex flex-col items-start gap-[6px] max-mobile:gap-[2px]">
                <DialogTitle className="heading-three text-start text-[20px] font-medium leading-[24px] max-mobile:text-[13px] max-mobile:leading-[17px]">
                  {selectedItem.title}
                </DialogTitle>

                <p className="text-[14px] leading-[16px] text-[#5A5A5A] max-mobile:text-[11px] max-mobile:leading-[13px]">
                  {selectedItem.subtitle}
                </p>
              </div>

              <div className="flex flex-col items-start gap-[6px] max-mobile:gap-[2px]">
                {selectedItem.nds && (
                  <div className="text-[12px] leading-[14px] text-[#5A5A5A] max-mobile:text-[10px] max-mobile:leading-[12px]">
                    Цена с НДС {selectedItem.nds}%
                  </div>
                )}

                <div className="heading-three max-mobile:text-[13px] max-mobile:leading-[15px]">
                  {formatPrice(selectedItem.price)}{" "}
                  <span className="text-[14px] leading-[16px] max-mobile:text-[11px] max-mobile:leading-[13px]">
                    руб.
                  </span>
                </div>
              </div>
            </div>
          </DialogHeader>

          <div className="rounded-[2px] bg-[#F5F5F5] py-[2px] pl-[20px] pr-[4px] max-mobile:pl-4">
            <div className="custom-scrollbar__catalog h-[440px] overflow-y-scroll pr-[12px] max-mobile:h-[345px] max-mobile:pr-[8px]">
              {/* Виртуальные паддинги сверху */}
              <div className="sticky top-0 h-[18px] w-full bg-[#F5F5F5] max-mobile:h-[16px]"></div>

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
              <div className="sticky bottom-0 h-[18px] w-full bg-[#F5F5F5] max-mobile:h-[16px]"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          {selectedItem.guarant && (
            <p className="text-center text-[14px] leading-[16px] max-mobile:max-w-[220px]">
              {selectedItem.guarant}
            </p>
          )}
        </div>

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

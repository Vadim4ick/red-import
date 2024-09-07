"use client";

import { GetGoodsQuery } from "@/graphql/__generated__";
import { Arrow } from "@/shared/icons/Arrow";
import { pathImage } from "@/shared/lib/utils";
import { CatalogModalProviderContext } from "@/shared/providers/catalogModal";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";

const CatalogItem = ({ item }: { item: GetGoodsQuery["goods"][0] }) => {
  const { setOpen, setSelectedItem } = useContext(CatalogModalProviderContext);

  return (
    <article className="grid w-full grid-cols-[336px_1fr] gap-[30px] object-cover py-[32px] max-mobile:mt-[38px] max-mobile:grid-cols-1 max-mobile:gap-3 max-mobile:rounded-[4px] max-mobile:bg-white max-mobile:p-[6px] mobile:border-b mobile:border-[#8F8F8F]">
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
              {item.price}{" "}
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
          <div className="flex w-full flex-col gap-2 pt-[27px] max-tablet:hidden max-mobile:pt-[31px]">
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
                    <ul className="flex w-full flex-col gap-2 pt-[27px] max-tablet:hidden max-mobile:pt-[31px]">
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

          <div className="flex w-full flex-col items-end justify-end gap-2 max-mobile:items-center">
            <Button
              onClick={() => {
                setOpen(true);
                setSelectedItem(item);
              }}
              addonRight={<Arrow className="mt-0.5 size-[6.5px] rotate-180" />}
              className="h-[42px] w-[220px] items-center gap-[7px] text-[13px] leading-[15px]"
              variant={"secondary"}
            >
              Описание модели
            </Button>

            <Button className="h-[42px] w-[220px]" variant={"reverseDefault"}>
              Купить сейчас
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export { CatalogItem };

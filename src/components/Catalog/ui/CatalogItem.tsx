import { MockDataItem } from "@/shared/const";
import { Arrow } from "@/shared/icons/Arrow";
import { Button } from "@/shared/ui/button";
import Image from "next/image";

const CatalogItem = ({ item }: { item: MockDataItem }) => {
  return (
    <article className="grid w-full grid-cols-[336px_1fr] gap-[30px] object-cover py-[32px] max-mobile:mt-[38px] max-mobile:grid-cols-1 max-mobile:gap-3 max-mobile:rounded-[4px] max-mobile:bg-white max-mobile:p-[6px] mobile:border-b mobile:border-[#8F8F8F]">
      <div className="relative h-[264px] max-mobile:h-[231px]">
        <Image
          src={item.imgCatalog}
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
                Цена с НДС {item.nds}
              </div>
            )}
          </div>
        </div>

        <div className="flex w-full items-end justify-between gap-2">
          <div className="flex w-full flex-col gap-2 pt-[27px] max-tablet:hidden max-mobile:pt-[31px]">
            {item.parameters.map((param) => {
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

          <div className="flex w-full flex-col items-end justify-end gap-2 max-mobile:items-center">
            <Button
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

"use client";

import { Container } from "@/shared/ui/container";
import { Filters } from "./Filters";
import { CatalogItem } from "./CatalogItem";
import { Button } from "@/shared/ui/button";
import { useGetGoods } from "@/shared/services/getGoods";

const Catalog = () => {
  const { data, isLoading } = useGetGoods();

  if (isLoading) {
    return <div>load...</div>;
  }

  return (
    <section className="bg-[#F5F5F5] pb-[96px] pt-[64px] max-mobile:pb-[64px] max-mobile:pt-[32px]">
      <Container>
        <h2 className="heading-two text-center">Каталог техники</h2>

        <div className="pt-[64px] max-mobile:pt-[32px]">
          <Filters />
        </div>

        <div className="flex w-full flex-col items-center mobile:gap-[48px]">
          {data?.goods &&
            data.goods.map((item) => <CatalogItem key={item.id} item={item} />)}

          <Button
            className="flex h-[42px] w-[210px] text-[13px] leading-[16px] max-mobile:mt-[32px]"
            variant={"secondary"}
          >
            Показать еще
          </Button>
        </div>
      </Container>
    </section>
  );
};

export { Catalog };

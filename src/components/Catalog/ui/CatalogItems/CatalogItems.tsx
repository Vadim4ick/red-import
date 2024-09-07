"use client";

import { useGetGoodsQuery } from "@/graphql/__generated__";
import { CatalogItem } from "./CatalogItem";
import { Button } from "@/shared/ui/button";

const CatalogItems = () => {
  const { data, isLoading } = useGetGoodsQuery();

  return (
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
  );
};

export { CatalogItems };

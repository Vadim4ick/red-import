"use client";

import { useGetGoodsQuery } from "@/graphql/__generated__";
import { CatalogItem } from "./CatalogItem";
import { Button } from "@/shared/ui/button";
import { SkeletonCatalogItem } from "./SkeletonCatalogItem";
import { useEffect } from "react";
import {
  $catalogItems,
  $filteredCatalogItems,
  setCatalogItems,
} from "@/store/catalogItems";
import { useUnit } from "effector-react";

const SkeletonCatalogItems = () => {
  return Array.from({ length: 3 }).map((_, index) => (
    <SkeletonCatalogItem key={index} />
  ));
};

const CatalogItems = () => {
  const { data, isLoading } = useGetGoodsQuery();

  const [catalogItems, filteredCatalogItems] = useUnit([
    $catalogItems,
    $filteredCatalogItems,
  ]);

  useEffect(() => {
    if (data && !isLoading) {
      setCatalogItems(data.goods);
    }
  }, [data, isLoading]);

  return (
    <div className="flex w-full flex-col items-center mobile:gap-[48px]">
      {catalogItems.length > 0 &&
        !isLoading &&
        filteredCatalogItems.map((item) => (
          <CatalogItem key={item.id} item={item} />
        ))}

      {isLoading && <SkeletonCatalogItems />}

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

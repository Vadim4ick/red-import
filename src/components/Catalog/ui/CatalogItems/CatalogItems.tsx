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
import { $showMore, setShowMore } from "@/store/filters";

const SkeletonCatalogItems = () => {
  return Array.from({ length: 3 }).map((_, index) => (
    <SkeletonCatalogItem key={index} />
  ));
};

const CatalogItems = () => {
  const { data, isLoading } = useGetGoodsQuery();

  const [catalogItems, filteredCatalogItems, showMore] = useUnit([
    $catalogItems,
    $filteredCatalogItems,
    $showMore,
  ]);

  useEffect(() => {
    if (data && !isLoading) {
      setCatalogItems(data.goods);
    }
  }, [data, isLoading]);

  const first = filteredCatalogItems.slice(0, 3);
  const other = filteredCatalogItems.slice(3);
  // const items = [...first, ...other];

  return (
    <div className="flex w-full flex-col items-center mobile:gap-[48px]">
      <div className="w-full">
        {catalogItems.length > 0 &&
          !isLoading &&
          (showMore ? filteredCatalogItems : first).map((item) => (
            <CatalogItem key={item.id} item={item} />
          ))}

        {filteredCatalogItems.length === 0 && !isLoading && (
          <p className="heading-three pt-[50px]">Товары не найдены</p>
        )}

        {isLoading && <SkeletonCatalogItems />}
      </div>

      {!showMore && other.length > 0 && (
        <Button
          onClick={() => {
            setShowMore(true);
          }}
          className="flex h-[42px] w-[210px] text-[13px] leading-[16px] max-mobile:mt-[32px]"
          variant={"secondary"}
        >
          Показать еще
        </Button>
      )}
    </div>
  );
};

export { CatalogItems };

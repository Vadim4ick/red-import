"use client";

import { Input } from "@/shared/ui/input";
import { RangeSlider } from "../RangeSlider";
import { useEffect } from "react";
import { useGetGoodsQuery } from "@/graphql/__generated__";
import { SkeletonFilters } from "./SkeletonFilters";
import { calculateRangePrice, cn } from "@/shared/lib/utils";
import {
  $activeBrands,
  $brands,
  $maxPrice,
  $maxYears,
  $minPrice,
  $minYears,
  $prices,
  $years,
  setActiveBrands,
  setBrands,
  setMaxPrice,
  setMaxYears,
  setMinPrice,
  setMinYears,
  setPrices,
  setYears,
} from "@/store/filters";
import { useUnit } from "effector-react";
import { Checkbox } from "@/shared/ui/checkbox";

const Filters = () => {
  const { isLoading, data } = useGetGoodsQuery();

  const [
    maxPrice,
    maxYears,
    minPrice,
    minYears,
    prices,
    years,
    brands,
    activeBrands,
  ] = useUnit([
    $maxPrice,
    $maxYears,
    $minPrice,
    $minYears,
    $prices,
    $years,
    $brands,
    $activeBrands,
  ]);

  const updatePrices = (prices: number[]) => {
    setPrices({
      priceFrom: prices[0],
    });
    setPrices({
      priceTo: prices[1],
    });
  };

  const updateYears = (year: number[]) => {
    setYears({
      from: year[0],
    });
    setYears({
      to: year[1],
    });
  };

  useEffect(() => {
    if (data?.goods) {
      const prices = data.goods.map((el) => el.price);
      const years = data.goods.map((el) => el.year);
      const brands = data.goods.map((el) => el.brand);

      const arrPrice = calculateRangePrice(prices);
      const arrYears = calculateRangePrice(years);

      setMinPrice(arrPrice[0]);
      setMaxPrice(arrPrice[1]);

      setMinYears(arrYears[0]);
      setMaxYears(arrYears[1]);

      setBrands(brands);
    }
  }, [data]);

  if (isLoading) {
    return <SkeletonFilters />;
  }

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-6 border-b border-[#8F8F8F] pb-[36px] max-tablet:grid-cols-2 max-mobile:grid-cols-1">
      <div className="flex flex-col gap-[12px] max-tablet:col-span-full">
        <h3 className="heading-three">Марка</h3>

        <div className="flex flex-wrap gap-[6px]">
          {brands.map((brand) => (
            <label key={brand}>
              <Checkbox
                className="hidden"
                checked={activeBrands.includes(brand)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setActiveBrands([...activeBrands, brand]);
                  } else {
                    const newActiveBrands = activeBrands.filter(
                      (activeBrand) => activeBrand !== brand,
                    );

                    setActiveBrands(newActiveBrands);
                  }
                }}
                id={brand}
              />

              <span
                className={cn(
                  "cursor-pointer rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] uppercase leading-[18px] text-[#5A5A5A]",
                  {
                    "bg-defaultTextColor text-white":
                      activeBrands.includes(brand),
                  },
                )}
              >
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="heading-three pb-[9px]">Цена</h3>

        <div className="flex items-center gap-[3px] pb-[13px]">
          <Input
            value={prices.priceFrom || ""}
            type="tel"
            min={minPrice}
            placeholder={String(minPrice)}
            onChange={(e) =>
              setPrices({
                priceFrom: Number(e.target.value),
              })
            }
          />

          <p className="text-[#999999]">-</p>

          <Input
            value={prices.priceTo || ""}
            type="tel"
            placeholder={String(maxPrice)}
            onChange={(e) =>
              setPrices({
                priceTo: Number(e.target.value),
              })
            }
          />
        </div>

        <RangeSlider
          min={minPrice}
          max={maxPrice}
          step={100000}
          value={
            Boolean(prices.priceFrom) && Boolean(prices.priceTo)
              ? [prices.priceFrom, prices.priceTo]
              : undefined
          }
          onValueChange={updatePrices}
        />
      </div>

      <div className="flex flex-col">
        <h3 className="heading-three pb-[9px]">Год выпуска</h3>

        <div className="flex items-center gap-[3px] pb-[13px]">
          <Input
            value={years.from || ""}
            type="tel"
            min={minYears}
            placeholder={String(minYears)}
            onChange={(e) =>
              setYears({
                from: Number(e.target.value),
              })
            }
          />

          <p className="text-[#999999]">-</p>

          <Input
            value={years.to || ""}
            type="tel"
            placeholder={String(maxYears)}
            onChange={(e) =>
              setYears({
                to: Number(e.target.value),
              })
            }
          />
        </div>

        <RangeSlider
          min={minYears}
          max={maxYears}
          value={
            Boolean(years.from) && Boolean(years.to)
              ? [years.from, years.to]
              : undefined
          }
          step={1}
          onValueChange={updateYears}
        />
      </div>
    </div>
  );
};

export { Filters };

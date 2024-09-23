"use client";

import { Input } from "@/shared/ui/input";
import { RangeSlider } from "../RangeSlider";
import { SkeletonFilters } from "./SkeletonFilters";
import { formatPrice, parsePrice } from "@/shared/lib/utils";
import { setPrices, setYears } from "@/store/filters";
import { FilterBrand } from "./FilterBrand";
import { useFilter } from "@/shared/hooks/useFilter";

const Filters = () => {
  const {
    isLoading,
    maxPrice,
    maxYears,
    minPrice,
    minYears,
    prices,
    updatePrices,
    updateYears,
    years,
  } = useFilter();

  if (isLoading) {
    return <SkeletonFilters />;
  }

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-6 border-b border-[#8F8F8F] pb-[36px] max-tablet:grid-cols-2 max-mobile:grid-cols-1">
      <FilterBrand />

      <div className="flex flex-col">
        <h3 className="heading-three pb-[9px]">Цена</h3>

        <div className="flex items-center gap-[3px] pb-[17px]">
          <Input
            value={
              parseInt(formatPrice(prices.priceFrom)) === 0
                ? ""
                : formatPrice(prices.priceFrom)
            }
            type="tel"
            min={minPrice}
            placeholder={formatPrice(minPrice)}
            onChange={(e) =>
              setPrices({
                priceFrom: parsePrice(e.target.value)
                  ? parsePrice(e.target.value)
                  : 0,

                priceTo: prices.priceTo === 0 ? maxPrice : prices.priceTo,
              })
            }
          />

          <p className="text-[#999999]">-</p>

          <Input
            value={
              parseInt(formatPrice(prices.priceTo)) === 0
                ? ""
                : formatPrice(prices.priceTo)
            }
            type="tel"
            placeholder={formatPrice(maxPrice)}
            onChange={(e) =>
              setPrices({
                priceFrom: prices.priceFrom === 0 ? minPrice : prices.priceFrom,

                priceTo: parsePrice(e.target.value)
                  ? parsePrice(e.target.value)
                  : 0,
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

        <div className="flex items-center gap-[3px] pb-[17px]">
          <Input
            value={years.from || ""}
            type="tel"
            min={minYears}
            placeholder={String(minYears)}
            onChange={(e) =>
              setYears({
                to: years.to === 0 ? maxYears : years.to,

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
                from: years.from === 0 ? minYears : years.from,

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

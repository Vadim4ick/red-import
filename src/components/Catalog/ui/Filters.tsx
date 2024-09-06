"use client";

import { Input } from "@/shared/ui/input";
import { RangeSlider } from "./RangeSlider";
import { useState } from "react";

const MIN_PRICE = 3500000;
const MAX_PRICE = 14900000;

const Filters = () => {
  const [prices, setPrices] = useState({
    priceFrom: MIN_PRICE,
    priceTo: MAX_PRICE,
  });

  const updatePrices = (prices: number[]) => {
    setPrices((prev) => ({ ...prev, priceFrom: prices[0] }));
    setPrices((prev) => ({ ...prev, priceTo: prices[1] }));
  };

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-6 border-b border-[#8F8F8F] pb-[36px] max-tablet:grid-cols-2 max-mobile:grid-cols-1">
      <div className="flex flex-col gap-[12px] max-tablet:col-span-full">
        <h3 className="heading-three">Марка</h3>

        <div className="flex flex-wrap gap-[6px]">
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            JCB
          </span>
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            VOLVO
          </span>
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            KOMATSU
          </span>
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            DEUTZ FAHR
          </span>
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            CLAAS
          </span>
          <span className="rounded-full bg-[#E9E9E9] px-[10px] py-[4px] text-[13px] leading-[18px] text-[#5A5A5A]">
            NEW HOLLAND
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="heading-three pb-[9px]">Цена</h3>

        <div className="flex items-center gap-[3px] pb-[13px]">
          <Input
            value={prices.priceFrom}
            type="tel"
            min={MIN_PRICE}
            placeholder="3 500 000"
            onChange={(e) =>
              setPrices((prev) => ({
                ...prev,
                priceFrom: Number(e.target.value),
              }))
            }
          />

          <p className="text-[#999999]">-</p>

          <Input
            value={prices.priceTo}
            type="tel"
            placeholder="14 900 000"
            onChange={(e) =>
              setPrices((prev) => ({
                ...prev,
                priceTo: Number(e.target.value),
              }))
            }
          />
        </div>

        <RangeSlider
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={100000}
          value={[prices.priceFrom || MIN_PRICE, prices.priceTo || MAX_PRICE]}
          onValueChange={updatePrices}
        />
      </div>

      <div className="flex flex-col">
        <h3 className="heading-three pb-[9px]">Год выпуска</h3>

        <div className="flex items-center gap-[3px] pb-[13px]">
          <Input type="tel" placeholder="2001" />

          <p className="text-[#999999]">-</p>

          <Input type="tel" placeholder="2016" />
        </div>

        <RangeSlider min={2001} max={2016} step={1} />
      </div>
    </div>
  );
};

export { Filters };

"use client";

import {
  $maxPrice,
  $maxYears,
  $minPrice,
  $minYears,
  $prices,
  $years,
  setBrands,
  setMaxPrice,
  setMaxYears,
  setMinPrice,
  setMinYears,
  setPrices,
  setYears,
} from "@/store/filters";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { calculateRangePrice } from "../lib/utils";
import { useGetGoodsQuery } from "@/graphql/__generated__";

const useFilter = () => {
  const { isLoading, data } = useGetGoodsQuery();

  const [maxPrice, maxYears, minPrice, minYears, prices, years] = useUnit([
    $maxPrice,
    $maxYears,
    $minPrice,
    $minYears,
    $prices,
    $years,
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

  return {
    updateYears,
    updatePrices,
    maxPrice,
    maxYears,
    minPrice,
    minYears,
    prices,
    years,
    isLoading,
  };
};

export { useFilter };

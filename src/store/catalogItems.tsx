import { GetGoodsQuery } from "@/graphql/__generated__";
import { combine, createDomain } from "effector";
import { $activeBrands, $prices, $years } from "./filters";

export const catalogItems = createDomain();

export const setCatalogItems =
  catalogItems.createEvent<GetGoodsQuery["goods"]>();

export const $catalogItems = catalogItems
  .createStore<GetGoodsQuery["goods"]>([])
  .on(setCatalogItems, (_, val) => {
    return val;
  });

export const $filteredCatalogItems = combine(
  [$catalogItems, $prices, $years, $activeBrands],
  ([catalogItems, prices, years, activeBrands]) => {
    let filtredData = catalogItems;

    if (activeBrands.length > 0) {
      filtredData = catalogItems.filter((item) => {
        return activeBrands.includes(item.brand);
      });
    }

    // Проверяем, нужно ли фильтровать
    const isPriceRangeDefault = prices.priceFrom === 0 && prices.priceTo === 0;
    const isYearRangeDefault = years.from === 0 && years.to === 0;

    const filteredCatalogItems = filtredData.filter((item) => {
      const isInPriceRange =
        isPriceRangeDefault ||
        (item.price >= prices.priceFrom && item.price <= prices.priceTo);
      const isInYearRange =
        isYearRangeDefault ||
        (item.year >= years.from && item.year <= years.to);

      return isInPriceRange && isInYearRange;
    });

    return filteredCatalogItems;
  },
);

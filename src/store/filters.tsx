import { createDomain } from "effector";

export const filters = createDomain();

export const setMinPrice = filters.createEvent<number>();
export const setMaxPrice = filters.createEvent<number>();

export const setMinYears = filters.createEvent<number>();
export const setMaxYears = filters.createEvent<number>();

export const setBrands = filters.createEvent<string[]>();

export const setActiveBrands = filters.createEvent<string[]>();

export const setShowMore = filters.createEvent<boolean>();

export const setYears = filters.createEvent<{
  from?: number;
  to?: number;
}>();

export const setPrices = filters.createEvent<{
  priceFrom?: number;
  priceTo?: number;
}>();

export const $minPrice = filters
  .createStore<number>(0)
  .on(setMinPrice, (_, price) => price);

export const $maxPrice = filters
  .createStore<number>(0)
  .on(setMaxPrice, (_, price) => price);

export const $minYears = filters
  .createStore<number>(0)
  .on(setMinYears, (_, price) => price);
export const $maxYears = filters
  .createStore<number>(0)
  .on(setMaxYears, (_, price) => price);

export const $brands = filters
  .createStore<string[]>([])
  .on(setBrands, (state, newBrands) => {
    // Создаем множество для быстрого поиска
    const brandSet = new Set(state);

    // Добавляем только те бренды, которые еще не присутствуют в списке
    const updatedBrands = [...state];

    for (const brand of newBrands) {
      if (!brandSet.has(brand)) {
        updatedBrands.push(brand);
        brandSet.add(brand);
      }
    }

    return updatedBrands;
  });

export const $showMore = filters
  .createStore<boolean>(false)
  .on(setShowMore, (_, val) => val);

export const $activeBrands = filters
  .createStore<string[]>([])
  .on(setActiveBrands, (_, newBrands) => {
    return newBrands;
  });

export const $years = filters
  .createStore<{
    from: number;
    to: number;
  }>({
    from: 0,
    to: 0,
  })
  .on(setYears, (state, years) => ({
    from: years.from !== undefined ? years.from : state.from,
    to: years.to !== undefined ? years.to : state.to,
  }));

export const $prices = filters
  .createStore<{
    priceFrom: number;
    priceTo: number;
  }>({
    priceFrom: 0,
    priceTo: 0,
  })
  .on(setPrices, (state, prices) => ({
    priceFrom:
      prices.priceFrom !== undefined ? prices.priceFrom : state.priceFrom,
    priceTo: prices.priceTo !== undefined ? prices.priceTo : state.priceTo,
  }));

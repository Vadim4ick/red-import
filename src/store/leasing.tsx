import { createDomain } from "effector";

export const leasing = createDomain();

export const updatePrice = leasing.createEvent<number>();
export const updateContribution = leasing.createEvent<number>();
export const updateTerm = leasing.createEvent<number>();
export const updatePercent = leasing.createEvent<number>();

export const $price = leasing
  .createStore<number>(500000)
  .on(updatePrice, (_, price) => price);

export const $contribution = leasing
  .createStore<number>(0)
  .on(updateContribution, (_, contribution) => contribution);

export const $term = leasing
  .createStore<number>(12)
  .on(updateTerm, (_, term) => term);

export const $percent = leasing
  .createStore<number>(1)
  .on(updatePercent, (_, percent) => percent);

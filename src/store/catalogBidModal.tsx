import { createDomain } from "effector";

const catalogBidOpen = createDomain();

export const toggleCatalogBidOpen = catalogBidOpen.createEvent();

export const $catalogBidOpen = catalogBidOpen
  .createStore<boolean>(false)
  .on(toggleCatalogBidOpen, (state) => {
    if (state) {
      return false;
    } else {
      return true;
    }
  });

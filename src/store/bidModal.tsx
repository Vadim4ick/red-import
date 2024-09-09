import { createDomain } from "effector";

const bidOpen = createDomain();

export const toggleBidOpen = bidOpen.createEvent();

export const $bidOpen = bidOpen
  .createStore<boolean>(false)
  .on(toggleBidOpen, (state) => {
    if (state) {
      return false;
    } else {
      return true;
    }
  });

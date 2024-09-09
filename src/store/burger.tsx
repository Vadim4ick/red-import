import { createDomain } from "effector";

const burgerOpen = createDomain();

export const toggleBurgerOpen = burgerOpen.createEvent();

export const $burgerOpen = burgerOpen
  .createStore<boolean>(false)
  .on(toggleBurgerOpen, (state) => {
    if (state) {
      return false;
    } else {
      return true;
    }
  });

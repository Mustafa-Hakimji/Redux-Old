import { BUY_ICECREAM, SELL_ICECREAM } from "./IceCreamTypes";

export const buyIceCream = (state = 1) => {
  return {
    type: BUY_ICECREAM,
  };
};

export const sellIceCream = (state = 1) => {
  return {
    type: SELL_ICECREAM,
  };
};

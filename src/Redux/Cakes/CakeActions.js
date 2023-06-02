import { BUY_CAKE, SELL_CAKE } from "./CakeTypes";

export const buyCake = (state = 1) => {
  return {
    type: BUY_CAKE,
    payload: state,
  };
};

export const sellCake = (state = 1) => {
  return {
    type: SELL_CAKE,
    payload: state,
  };
};

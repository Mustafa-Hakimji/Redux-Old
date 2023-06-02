import { BUY_ICECREAM, SELL_ICECREAM } from "./IceCreamTypes";

const iceCreamInitialState = {
  numOfIceCream: 20,
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream:
          state.numOfIceCream === 0
            ? (state.numOfIceCream = 0)
            : state.numOfIceCream - 1,
      };
    case SELL_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;

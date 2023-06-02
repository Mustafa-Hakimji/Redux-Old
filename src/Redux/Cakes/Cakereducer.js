import { BUY_CAKE, SELL_CAKE } from "./CakeTypes";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  // console.log("state --> ", state);
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes:
          state.numOfCakes >= action.payload
            ? state.numOfCakes - Number(action.payload)
            : state.numOfCakes !== 0
            ? state.numOfCakes - 1
            : (state.numOfCakes = 0),
      };

    case SELL_CAKE:
      return {
        ...state,
        numOfCakes: action.payload
          ? state.numOfCakes + Number(action.payload)
          : state.numOfCakes + 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;

import { combineReducers } from "redux";
import cakeReducer from "./Cakes/Cakereducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import userReducer from "./Users/UserReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default rootReducer;

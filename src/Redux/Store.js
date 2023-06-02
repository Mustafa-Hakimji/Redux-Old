import { createStore } from "redux";
import rootReducer from "./RootReducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// In the store I am applying the THUNK middleware so I can use it in My Redux to make the Async operations.
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;

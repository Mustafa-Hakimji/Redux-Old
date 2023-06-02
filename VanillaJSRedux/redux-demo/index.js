// here we are requiring the redux package
const redux = require("redux");
// here we are requiring the redux logger package
const reduxLogger = require("redux-logger");

// here we are getting the store method inside a variable.
const createStore = redux.createStore;

// here we are storing the applyMiddleware from the redux into a variable.
const applyMiddleware = redux.applyMiddleware;

// here we are storing the combineReducers from the redux into a variable.
const combineReducers = redux.combineReducers;

// here we are storing the logger from the reduxlogger into a variable.
const logger = reduxLogger.createLogger();

//Creating the constants for the Actions. to avoid the typing mistakes.
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Here defining the action with the help of the function which is returning the action.
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux Acton",
  };
};

// Here we are defining the second action for the Icecreams.
const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: "First redux Acton",
  };
};

//Reducers are Functions which accepts "(previousState,action) => newState" // takes the previousState and return the newState after making changes in it.
//here we are defining the initial state for the cakes.
const initialCakeState = {
  numOfcakes: 10,
};

//here we are defining the initial state for the iceCreams.
const initialIceCreamState = {
  numOfIceCreams: 20,
};

//Reducers are Functions which accepts "(previousState,action) => newState" // takes the previousState and return the newState after making changes in it.
// Here we are defining the reducer fro the cakes and inside this reducer we will write the logic to manipulate the state. and will define how the state should changes.
const cakeReducer = (state = initialCakeState, action) => {
  // Here we are using the Swith case to trigger the action according to its type. we can also allow to write our own logic with if and else statement as well.
  // here we are performing the switch on the behalf of the action types.
  switch (action.type) {
    case BUY_CAKE:
      return {
        // here we are taking the previous state and changing the only numOfCakes so because of that we can avoid to loose the other things present inside our State.
        // and can only change the property which we wanted to change.
        ...state,
        // here numOfCakes belongs to the state which we are taking using the spread operator and the value which we are taking that state belongs to the parameter one and we are subtracting one cake form the previous state count and assigning the new count to our new state and then returning the same from the function so it will return the new state.
        numOfcakes: state.numOfcakes - 1,
      };
    default:
      return state;
  }
};

// The same we are doing here with the iceCream State. and all the steps will remain same.
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// Here as we have the multiple reducers so we need to combine them togather so we can pass the single reducer inside the store as it can take only one reducer as an argument.
//We need to create a function combine reducer which will take an Object as an argument and inside that object we suppose to create keys for the reducers name whatever we wanted to and in the value we need to pass the reducers itself.
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//Here we are creating the store and passing the combined reducer inside it. and also passing the 2nd argument which is a middleware.
//Along with the reducer we are passing the second argument which is applymiddleware and inside the Middleware we are passing the logger middleware. and it will log each time when our state will chaneg.
const store = createStore(rootReducer, applyMiddleware(logger));

//here we are using the subscribe method of the redux-store and inside it we can do console of our state so whenever there will be any changes in the state this subscrimbe method will get triggered automatically and execute the code written inside it.
// and we are also taking the unsubscribe method from the subscribe method return by storing it into a variable.
//but when we use the logger we have no need to use the subscribe method for logging the State but we can use subscribe method for other reasons if there is any usecase available.
const unsubscribe = store.subscribe(() => {});

//Below we are dispatchin the action by using the dispatch method provided by the redux and whenever we want to trigger any action we have to trigger it by using the dispatch method only.
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

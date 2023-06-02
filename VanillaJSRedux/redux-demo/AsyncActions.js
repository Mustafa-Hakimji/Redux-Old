const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// Here we are cerating our initial state.
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// here we are creating the action type Constans to avoid the spelling mistakes.
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// Here is the first action for the Requesting the API call.
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

// Here is the 2nd Action fro the success request.
//I am passing an argument users here because the response data we will get here and I am setting this to payload.
//So later in the reducer we can give and pass its value to my users State.
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

// here is the 3rd action whern the API call will failed then this will get triggerd.
//here I am passing an argument error and passing it to the payload so lateron in the reducer I am able to pass the payload to the erroe state which will then change my error initial state with this arguments value.
const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

//Here I am creating the reducer whic will take 2 arguments as usual the state which is by default set to the initial state and action.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

// here i am creating an async function which will be responsible to call all the actions defined.
//It uses the thunkMiddleware which allow this function to return another function instead of an action. and inside taht return fucntion it will by default get the dispatch as a parameter which will be used to dispatch the action on the same way as dispatch method does.
const fetchUsers = () => {
  //So this is the return function i was talking about and the parameter is passed which is the dispatch method of the store. and will fucntion in the same way.
  return (dispatch) => {
    //here i am dispatching my first action which will set the loading to true.
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Response.data is Array of users
        const users = response.data.map((item) => item.name);
        // Here i am dispatching my 2nd action which will then set the users data to payload an dthen reducer will assign that paykload to the initial users state value. and then return the new state.
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        //Here I am dispatching my 3rd action in any case the API calls get failed then this will receive the error messahge and set to the payloand which will then be passed to the initial error state value by reducer as per the logic defined inside the reducer.
        dispatch(fetchUsersFailed(err.message));
      });
  };
};

//Here creating store and passing the reducer and thunkMiddleware as an argument.
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Here i am using the subscribe method to do console any changes in the state occurs.
store.subscribe(() => {
  console.log("State --> ", store.getState());
});

// Here i am dispatching the fetchuser fucntion as all the actions are getting dispatched from this function and this function is using the Thunk middleware by default.
store.dispatch(fetchUsers());

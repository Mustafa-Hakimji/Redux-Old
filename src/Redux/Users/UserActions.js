import {
  FETCH_USER_FAILED,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./UserTypes";
import axios from "axios";

export const userRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const userSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const userFailed = (error) => {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
};

// This function is also an action creator just beacuse of the THUNK middleware this action creator function is able to return another function instead of action.
//Its return function can also have access to the dispatch method of the redux by using which it can dispatch action on the basis of the API response as i am doing below.
export const fetchUsers = () => {
  // Return function which have the access to the dispatch method fo redux.
  return (dispatch) => {
    //It can also dispatch other action defined above on the basis of the API resposnse
    //As this action will only set the loading to true so I am calling it on the top of the API call.
    dispatch(userRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;

        //this action is reponsible to set the Response Data to the user state and manipulate it with the user Data receive by the API call so I am calling it here.
        dispatch(userSuccess(users));
      })
      .catch((error) => {
        //this action is responsible to set the error message if there is any error we get therefore I am calling this action here in the catch block.
        dispatch(userFailed(error.message));
      });
  };
};

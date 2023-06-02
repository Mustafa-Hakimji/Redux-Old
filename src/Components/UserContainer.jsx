import { connect } from "react-redux";
import React, { useEffect } from "react";
import { fetchUsers } from "../Redux/Users/UserActions";

const UserContainer = ({ getUsers, userData }) => {
  useEffect(() => {
    getUsers();
  }, []);
  return userData?.loading ? (
    <h1>Loading</h1>
  ) : userData?.error ? (
    <h2>Error = {userData.error}</h2>
  ) : (
    <div>
      <h1>User List </h1>

      {userData &&
        userData?.users &&
        userData?.users?.map((user) => {
          return <h1>{user.name}</h1>;
        })}
    </div>
  );
};

// Here I am creating this function to get the access to the users state available inside my user Reducer initial state.
const mapStatetoProps = (state) => {
  return {
    //Here I am assigning the whole state object to the userData as we need to access the error and the users array from the same variable or state we can say.
    // we will get this key as a props inside our component.
    userData: state.user,
  };
};

// Here I am dispatching the fetchUsers method which I created inside the userReducer file in which I am dispatching all the action based on the API response.
const mapDispatchToprops = (dispatch) => {
  return {
    // Here this key I will receive in the props of this component. in which I am dispatching the fetchUsers fucntion and just need to call this in the useeffect so the user Data will available inside the above state useData which i have created using the mapStateToProp.
    getUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStatetoProps, mapDispatchToprops)(UserContainer);

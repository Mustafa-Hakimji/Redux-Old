import { connect } from "react-redux";
import React from "react";
import { buyCake, buyIceCream } from "../Redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>
        {props?.cake ? "Number of cakes --> " : "Number of Ice-creams--> "}
        {props.item}
      </h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
};

//In this mapStateToprops function it has 2 parameter 1st is the state which we have in redux.
//And the 2nd one is the props which the existing component have.
//The benifit of this functionality s that we can comare or assign the value from the redux state to the component props and perform the action accordingly.
const mapStateToprops = (state, ownProps) => {
  //here i am checking if the cake props has been passed inside the compoennt or not then it will pass the values accordingly.
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  // It always returns an object with the value we want to pass as a props.
  return {
    item: itemState,
  };
};

//In this mapDispatchToprops function it has 2 parameter 1st is the state which we have in redux. same as mapStateToProps.
//And the 2nd one is the props which the existing component have.
//The benifit of this functionality s that we can comare or assign the value from the redux state to the component props and perform the action accordingly.
const mapDispatchtoprops = (dispatch, ownProps) => {
  // here we are checking for the ownprops.cake and then passing the dipatch function accordingly and we are also reusing the sam ecomponent for cakes and as well as for iceCreams.
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  // here we are retrung the object with the variable which will then get the dispatch function for cake or for iceCreams according to the codition we passed.
  return {
    buyItem: dispatchFunction,
  };
};

// now if we only wanted to pass the Dispatch function then we have to give the null to the connct methods 1st argument because somehow the connect function suppose to get the StateToProps as its 1st argument and in the 2nd argument only it wil take the DispatchToProps.
// like this we need to pass the DispatchToProps and if we only need to pass the StateToProps then its okay to pass it directly.
// export default connect(null, mapDispatchtoprops)(ItemContainer);
export default connect(mapStateToprops, mapDispatchtoprops)(ItemContainer);

// MapStateToProps only
// export default connect(mapStateToprops)(ItemContainer);

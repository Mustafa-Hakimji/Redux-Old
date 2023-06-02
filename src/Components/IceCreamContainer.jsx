import { connect } from "react-redux";
import React from "react";
import { buyIceCream, sellIceCream } from "../Redux";

const IceCreamContainer = ({ numOfIceCream, buyIceCream, sellIceCream }) => {
  return (
    <div>
      <h2>Number Of IceCreams = {numOfIceCream}</h2>
      <div>
        <button onClick={() => buyIceCream()}>Buy IceCream</button>
        <button onClick={() => sellIceCream()}>Sell IceCream</button>
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
    sellIceCream: () => dispatch(sellIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);

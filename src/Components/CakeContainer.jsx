import React from "react";
import { connect } from "react-redux";
import { buyCake, sellCake } from "../Redux";

const CakeContainer = (props) => {
  const { numOfCakes, buyCake, sellCake } = props;
  return (
    <div>
      <h2>Number Of cakes = {numOfCakes}</h2>
      <div>
        <button onClick={() => buyCake()}>Buy cake</button>
        <button onClick={() => sellCake()}>Sell cake</button>
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    sellCake: () => dispatch(sellCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

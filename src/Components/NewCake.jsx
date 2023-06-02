import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake, sellCake } from "../Redux";

const NewCake = (props) => {
  const [state, setState] = useState(1);
  const { numOfCakes, buyCake, sellCake } = props;
  return (
    <div>
      <h2>Number Of cakes = {numOfCakes}</h2>
      <div>
        <input
          type="text"
          placeholder="Number of cakes"
          onChange={(e) => setState(e.target.value)}
          value={state}
        />
        <button onClick={() => buyCake(state)}>Buy {state} cake</button>
        <button onClick={() => sellCake(state)}>Sell {state} cake</button>
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
    buyCake: (state) => dispatch(buyCake(state)),
    sellCake: (state) => dispatch(sellCake(state)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCake);

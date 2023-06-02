import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux";

const HooksCakeCintainer = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <h2>Number od Cakes - {numOfCakes} </h2>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy Cake
      </button>
      <hr />
    </div>
  );
};

export default HooksCakeCintainer;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, subtract, multiply } from "../actions/calculatorActions";
const Calculator = () => {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add(1));
  };

  const handleSubtract = () => {
    dispatch(subtract(1));
  };

  const handleMultiply = () => {
    dispatch(multiply(2));
  };
  return (
    <div>
      <h1>Calculator</h1>
      <p>Result: {result}</p>
      <button onClick={handleAdd}>Add 1</button>
      <button onClick={handleSubtract}>Subtract 1</button>
      <button onClick={handleMultiply}>multiply 2</button>
    </div>
  );
};

export default Calculator;

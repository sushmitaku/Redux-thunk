// src/reducers/rootReducer.js
import { combineReducers } from "redux";
import calculatorReducer from "./calculatorReducer"; // Your existing calculator reducer
import userReducer from "./userReducer"; // The new user reducer

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  user: userReducer
  // Add more reducers here if needed
});

export default rootReducer;

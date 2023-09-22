// src/actions.js
export const add = (value) => (dispatch) => {
  dispatch({ type: "ADD", payload: value });
};

export const subtract = (value) => (dispatch) => {
  dispatch({ type: "SUBTRACT", payload: value });
};

export const multiply = (value) => (dispatch) => {
  dispatch({ type: "MULTIPLY", payload: value });
};

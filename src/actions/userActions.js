// src/actions/userActions.js
// src/actions/userActions.js
export const login = (user) => (dispatch) => {
  // Simulate a login process or make an API call
  // For simplicity, we'll dispatch the action immediately
  dispatch({ type: "LOGIN", payload: user });
};

export const logout = () => (dispatch) => {
  // Simulate a logout process or make an API call
  // For simplicity, we'll dispatch the action immediately
  dispatch({ type: "LOGOUT" });
};

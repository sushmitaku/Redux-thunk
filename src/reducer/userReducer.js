// src/reducers/userReducer.js
const initialState = {
  user: null,
  isAuthenticated: false // Initial state should be false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default userReducer;

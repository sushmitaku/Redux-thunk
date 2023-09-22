// src/LoginComponent.js
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/userActions";
const Login = () => {
  console.log("hi");
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Simulate a login process
    const user = { username: "exampleUser" }; // Replace with actual user data

    // Dispatch the login action
    dispatch(login(user));
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

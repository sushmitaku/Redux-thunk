// src/App.js
import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Calculator from "./components/Calculator";

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  console.log(isAuthenticated);
  return (
    <div>
      <h1>My App</h1>
      {isAuthenticated ? (
        <Calculator />
      ) : (
        <>
          <p>Please log in to use the calculator.</p>
          <Login />
        </>
      )}
    </div>
  );
};

export default App;

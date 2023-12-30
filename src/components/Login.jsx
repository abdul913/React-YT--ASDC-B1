import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(true);
  function handleRegistration() {
    setLogin(!login);
  }
  return (
    <div>
      <form className="flex w-[25%] m-auto mt-[30vh] flex-col gap-3">
        <h1 className="text-4xl font-semibold">
          {login ? "Log In" : "Sign Up"}
        </h1>
        {!login && (
          <input
            className="border p-4 border-gray-500"
            type="text"
            placeholder="User Name"
          />
        )}
        <input
          className="border p-4 border-gray-500"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border p-4 border-gray-500"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-500 p-4 text-white">Log In</button>
        <p className="cursor-pointer" onClick={handleRegistration}>
          {login ? " Not Registered? Sign Up" : "Already Registered? Login"}
        </p>
      </form>
    </div>
  );
};

export default Login;

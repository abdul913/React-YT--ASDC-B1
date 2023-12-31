import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [login, setLogin] = useState(true);
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [errMessage, setErrMessage] = useState(null);
  function handleRegistration() {
    setLogin(!login);
  }

  function formHandler() {
    // console.log(email);
    let errmsg = validate(email, password);
    setErrMessage(errmsg);
    if (errmsg) return;

    if (!login) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          errMessage(errorCode, " ", errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode, " ", errorMessage);
        });
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex w-[25%] m-auto mt-[30vh] flex-col gap-3"
      >
        <h1 className="text-4xl font-semibold">
          {login ? "Log In" : "Sign Up"}
        </h1>
        {!login && (
          <input
            className="border p-4 border-gray-500"
            type="text"
            placeholder="User Name"
            // ref={username}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        )}
        <input
          className="border p-4 border-gray-500"
          type="email"
          placeholder="Email Address"
          // ref={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-4 border-gray-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // ref={password}
        />
        <button onClick={formHandler} className="bg-red-500 p-4 text-white">
          {login ? " Log In" : "Sign Up"}
        </button>
        <p className="text-red-500 font-bold">{errMessage}</p>
        <p className="cursor-pointer" onClick={handleRegistration}>
          {login ? " Not Registered? Sign Up" : "Already Registered? Login"}
        </p>
      </form>
    </div>
  );
};

export default Login;

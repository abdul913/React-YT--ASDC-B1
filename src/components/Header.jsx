import React from "react";
import Logo from "../assets/yt-logo.png";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useUserContext } from "../context/AddUserContext";

const Header = () => {
  let { user } = useUserContext();
  function handleSignOut() {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        // user = null;
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className=" p-5 flex justify-between items-center">
      <div>
        <img src={Logo} width="100" height="100" alt="" />
      </div>
      <div className="flex">
        <input
          className="border border-gray-400 rounded-l-full w-[28.5rem] h-8 "
          type="text"
          name="Search"
          id=""
        />
        <div className="border border-gray-400  h-8 w-[3rem] rounded-r-full"></div>
      </div>
      <div>
        {user && (
          <>
            <button onClick={handleSignOut} className=" bg-red-500 w-28 h-12">
              Sign Out
            </button>
            <div className=""></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

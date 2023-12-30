import React from "react";
import Logo from "../assets/yt-logo.png";
const Header = () => {
  return (
    <div className=" p-5 bg-gray-500">
      <img src={Logo} width="100" height="100" alt="" />
    </div>
  );
};

export default Header;

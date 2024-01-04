import React from "react";
import { useUserContext } from "../context/AddUserContext";
import LeftNavMenu from "./LeftNavMenu";
import VideoList from "./VideoList";

const Browse = () => {
  //   let { user } = useUserContext();
  //   console.log(user);
  return (
    <div className="flex w-full mt-5">
      <LeftNavMenu />
      <VideoList />
    </div>
  );
};

export default Browse;

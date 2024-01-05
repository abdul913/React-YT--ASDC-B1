import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Video = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramsKey = searchParams.get("v");

  useEffect(()=>{
    // let a = setInterval(()=>{
    //   console.log("object loaded")
    // },2000)
    // return ()=>{
    //   clearInterval(a)
    // }
  },[])

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${paramsKey}?si=6SBiTHU_tBFoF_w4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`}
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;

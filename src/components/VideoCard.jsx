import React from "react";

const VideoCard = ({ title, channelTitle, thumbnails }) => {
  // console.log(title, channelTitle, thumbnails);
  return (
    <div className="border p-7">
      {/* 
        img
        title
        description
        views
      */}
      <img src={thumbnails} />
      <h1>{title}</h1>
      <h3>{channelTitle}</h3>
    </div>
  );
};

export default VideoCard;

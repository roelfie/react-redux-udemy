import React from "react";

const VideoItem = (props) => {
  return (
    <div>
      <h6>{props.title}</h6>
      <img src={props.thumbnail} alt={props.title} />
    </div>
  );
};

export default VideoItem;

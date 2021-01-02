import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const videoItems = props.videos.map((v) => {
    return <VideoItem key={v.id.videoId} video={v} onVideoSelect={props.onVideoSelect} />;
  });
  return <div className='ui relaxed divided list'>{videoItems}</div>;
};

export default VideoList;

import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const videoItems = props.videos.map((v) => {
    return <VideoItem key={v.id.videoId} video={v} onClickThumbnail={props.onClickThumbnail} />;
  });
  return <div className='ui relaxed divided list'>{videoItems}</div>;
};

export default VideoList;

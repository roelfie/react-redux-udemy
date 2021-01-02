import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const videoItems = props.videos.map((v) => {
    return (
      <VideoItem
        key={v.id.videoId}
        title={v.snippet.title}
        thumbnail={v.snippet.thumbnails.default.url}
      />
    );
  });
  return <div>{videoItems}</div>;
};

export default VideoList;

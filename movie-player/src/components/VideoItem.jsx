import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onClickThumbnail }) => {
  return (
    <div className='item video-item' onClick={() => onClickThumbnail(video.id.videoId)}>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

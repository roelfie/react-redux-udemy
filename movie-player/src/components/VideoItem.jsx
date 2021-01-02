import React from "react";

const VideoItem = ({ video, onClickThumbnail }) => {
  return (
    <div>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        onClick={() => onClickThumbnail(video.id.videoId)}
      />
      <font size='10px'>{video.snippet.title}</font>
    </div>
  );
};

export default VideoItem;

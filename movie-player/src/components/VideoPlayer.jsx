import React from "react";
import Loader from "./Loader";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <Loader text='Please select a video' />;
  }

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSource} title='player'></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;

import React from "react";
import Youtube from "../api/Youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = { videos: [] };

  findVideos = (searchTerm) => {
    Youtube.findVideos(searchTerm)
      .catch((err) => console.log(err))
      .then((response) => {
        this.setState({ videos: response.data.items });
      });
  };

  playVideo = (videoId) => {
    console.log(videoId);
  };

  render() {
    return (
      <div className='ui container'>
        <h2>Movie Player</h2>
        <SearchBar onSubmit={(term) => this.findVideos(term)} />
        <VideoDetails />
        <VideoList
          videos={this.state.videos}
          onClickThumbnail={(videoId) => this.playVideo(videoId)}
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import Youtube from "../api/Youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  findVideos = (searchTerm) => {
    Youtube.findVideos(searchTerm)
      .catch((err) => console.log(err))
      .then((response) => {
        this.setState({ videos: response.data.items });
        if (this.state.videos.length > 0) {
          this.setState({ selectedVideo: this.state.videos[0] });
        }
      });
  };

  render() {
    return (
      <div className='ui container'>
        <h2>Movie Player</h2>
        <SearchBar onSubmit={(term) => this.findVideos(term)} />
        <VideoPlayer video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(video) => this.setState({ selectedVideo: video })}
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import Youtube from "../api/Youtube";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  findVideos = (searchTerm) => {
    Youtube.findVideos(searchTerm)
      .catch((err) => console.log(err))
      .then((response) => console.log(response));
  };

  render() {
    return (
      <div className='ui container'>
        <h2>Movie Player</h2>
        <SearchBar onSubmit={this.findVideos} />
        <VideoDetails />
        <VideoList />
      </div>
    );
  }
}

export default App;

import React from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <h2>Movie Player</h2>
        <SearchBar />
        <VideoDetails />
        <VideoList />
      </div>
    );
  }
}

export default App;

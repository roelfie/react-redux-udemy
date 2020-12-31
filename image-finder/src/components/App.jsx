import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  findImages(searchTerm) {
    console.log(`findImages(${searchTerm})`);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.findImages} />
      </div>
    );
  }
}

export default App;

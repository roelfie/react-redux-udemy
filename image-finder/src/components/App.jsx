import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  findImages = async (searchTerm) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: searchTerm },
      headers: { Authorization: "Client-ID nx6aTsWQ-I-yPt9Lbgue69MtRgn7PTVueQNkMRwb6rs" }
    });

    this.setState({ images: response.data.results });
    // NB: Instead of async/await we can also use a promise: axios.get().then((resp) => {...}))
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.findImages} />
        <div>Found: {this.state.images.length} images</div>
      </div>
    );
  }
}

export default App;

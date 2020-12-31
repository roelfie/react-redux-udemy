import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async findImages(searchTerm) {
    const response = await axios.get("https://api.unsplash.com/./search/photos", {
      params: {
        query: searchTerm
      },
      headers: {
        Authorization: "Client-ID nx6aTsWQ-I-yPt9Lbgue69MtRgn7PTVueQNkMRwb6rs"
      }
    });

    console.log(response.data.results);
    // Instead of async/await we can also use a promise like axios.get().then(...):
    //.then((response) => console.log(response.data.results));
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.findImages} />
      </div>
    );
  }
}

export default App;

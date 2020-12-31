import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    event.target.value;
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              name="search-term"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

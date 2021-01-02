import React, { useState, useEffect } from "react";
import Wikipedia from "../api/Wikipedia";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);

  // The following 'effect' is only executed when the searchTerm changes.
  useEffect(() => {
    if (searchTerm) {
      Wikipedia.search(searchTerm)
        .catch((err) => console.log(err))
        .then((response) => {
          console.log(response.data.query.search);
          setItems(response.data.query.search);
        });
    }
  }, [searchTerm]);

  const renderedItems = items.map((item) => {
    return (
      <div className='item' key={item.pageid}>
        <div className='content'>
          <div className='header'>{item.title}</div>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Search Wikipedia</label>
          <input
            className='input'
            value={searchTerm}
            onChange={(evt) => setSearchTerm(evt.target.value)}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedItems}</div>
    </div>
  );
};

export default Search;

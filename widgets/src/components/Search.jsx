import React, { useState, useEffect } from "react";
import Wikipedia from "../api/Wikipedia";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);

  // The following 'effect' is only executed when the searchTerm changes.
  useEffect(() => {
    if (searchTerm) {
      const timeoutId = setTimeout(() => {
        Wikipedia.search(searchTerm)
          .catch((err) => console.log(err))
          .then((response) => setItems(response.data.query.search));
      }, 500);

      // This 'cleanup function' will be executed as soon as this effect executes the next time.
      // The effect of this cleanup function is that no API call is done as long as user is typing.
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [searchTerm]);

  const renderedItems = items.map((item) => {
    return (
      <div className='item' key={item.pageid}>
        <div className='right floated content'>
          <a className='ui button' href={`https://en.wikipedia.org/wiki?curid=${item.pageid}`}>
            Open
          </a>
        </div>
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

import React from "react";
import SongDetails from "./components/SongDetails";
import SongList from "./components/SongList";

const App = () => {
  return (
    <div className='ui container'>
      <h2 className='ui header'>Songs</h2>
      <div className='ui container grid'>
        <div className='ui row'>
          <div className='ui column eight wide'>
            <SongList />
          </div>
          <div className='ui column eight wide'>
            <SongDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

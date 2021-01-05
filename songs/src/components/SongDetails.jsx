import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  const renderSong = (song) => {
    return (
      <div className='ui cards'>
        <div className='card'>
          <div className='content'>
            <em className='right floated small' data-emoji=':musical_score:'></em>
            <div className='header'>{song.title}</div>
            <div className='meta'>{song.duration}</div>
            <div className='description'>Lorem Ipsum blah dee blah ...</div>
          </div>
        </div>
      </div>
    );
  };

  return song ? renderSong(song) : null;
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetails);

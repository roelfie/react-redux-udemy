import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  renderSongs = (songs) => {
    return songs.map((s) => {
      return (
        <div className='item ' key={s.title}>
          <div className='right floated content'>
            <button className='ui button'>Listen</button>
          </div>
          <div className='content'>
            <div className='header'>{s.title}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className='ui divided list'>{this.renderSongs(this.props.songs)}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)(SongList);

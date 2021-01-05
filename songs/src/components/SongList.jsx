import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../redux/actions";

class SongList extends React.Component {
  renderSongs = (songs) => {
    return songs.map((s) => {
      return (
        <div className='item ' key={s.title}>
          <div className='right floated content'>
            {/* DO NOT call selectSong() directly. Call props.selectSong() instead.
             * This is a wrapper around selectSong() created when we passed it into 'connect()'.
             */}
            <button className='ui button' onClick={() => this.props.selectSong(s)}>
              Listen
            </button>
          </div>
          <div className='content'>
            <div className='header'>{s.title}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props);
    return <div className='ui divided list'>{this.renderSongs(this.props.songs)}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs
  };
};

export default connect(
  // Function used to make state available as props:
  mapStateToProps,
  // Action creators: Redux will wrap them and make them available as props.
  // The wrapper dispatches actions for us: store.dispatch(selectSong(song));
  { selectSong: selectSong }
)(SongList);

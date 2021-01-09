import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flvjs from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    // Reference to the videoplayer DOM element, needed by flv.js to set up a player inside it.
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.streamId);
    this.initPlayer();
  }

  componentDidUpdate() {
    this.initPlayer();
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.destroy();
    }
  }

  initPlayer() {
    if (!this.props.stream) {
      return; // Stream details not yet loaded. Can not create player.
    }
    if (this.player) {
      return; // Player already initialized.
    }

    console.log(this.videoRef.current);
    var player = flvjs.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.streamId}.flv`
    });
    player.attachMediaElement(this.videoRef.current);
    player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h2>{title}</h2>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    streamId: props.match.params.streamId,
    stream: state.streams[props.match.params.streamId]
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);

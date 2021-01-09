import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.fetchStream(this.props.streamId);
  }

  render() {
    console.log("render");
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>StreamShow {this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, props) => {
  console.log("mapStateToProps");
  console.log(props.match);
  return {
    streamId: props.match.params.streamId,
    stream: state.streams[props.match.params.streamId]
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);

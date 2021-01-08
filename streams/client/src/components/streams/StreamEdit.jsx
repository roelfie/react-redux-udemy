import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.streamId);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>StreamEdit {this.props.streamId}</div>;
  }
}

const mapStateToProps = (state, props) => {
  return {
    streamId: props.match.params.streamId,
    // On 1st visit stream may not be available in state yet; componentDidMount() takes care of that.
    stream: state.streams[props.match.params.streamId]
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);

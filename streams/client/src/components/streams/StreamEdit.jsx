import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, updateStream } from "../../actions";
import StreamForm from "./forms/StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.streamId);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit Stream {this.props.streamId}</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={(updatedFields) => this.props.updateStream(this.props.streamId, updatedFields)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    // Redux Form makes path parameters available under props.match.params.
    streamId: props.match.params.streamId,
    // On 1st visit stream may not be available in state yet; componentDidMount() takes care of that.
    stream: state.streams[props.match.params.streamId]
  };
};

export default connect(mapStateToProps, { fetchStream, updateStream })(StreamEdit);

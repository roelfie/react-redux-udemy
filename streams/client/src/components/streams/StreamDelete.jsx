import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.streamId);
  }

  deleteStream() {
    this.props.deleteStream(this.props.streamId);
  }

  renderActions = () => {
    return (
      <div>
        <button className='ui button negative' onClick={() => this.deleteStream()}>
          OK
        </button>
        <button className='ui button' onClick={() => history.goBack()}>
          Cancel
        </button>
      </div>
    );
  };

  render() {
    const content = this.props.stream
      ? `Are you sure you want to delete the stream "${this.props.stream.title}"?`
      : "Are you sure you want to delete the stream?";
    return <Modal header={`Delete Stream`} content={content} actions={this.renderActions()} />;
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

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);

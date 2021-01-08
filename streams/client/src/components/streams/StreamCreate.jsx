import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./forms/StreamForm";

class StreamCreate extends React.Component {
  render() {
    return (
      <div>
        <h2>Create Stream</h2>
        <StreamForm onSubmit={this.props.createStream} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

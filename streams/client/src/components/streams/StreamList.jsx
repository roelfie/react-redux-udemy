import React from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdminButtons() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to='/streams/new' className='ui button primary'>
            Create new Stream
          </Link>
        </div>
      );
    }
  }

  renderStreamButtons(stream) {
    console.log(this.props.currentUserId);
    if (this.props.currentUserId === stream.userid) {
      return (
        <div className='right floated content'>
          <button className='ui button primary'>Edit</button>
          <button className='ui button negative'>Delete</button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((s) => {
      return (
        <div className='item' key={s.id}>
          {this.renderStreamButtons(s)}
          <i className='large middle aligned camera icon' />
          <div className='content'>
            <div className='header'>{s.title}</div>
            <div className='description'>{s.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Streams</h2>
        <div className='ui celled list'>{this.renderList()}</div>
        {this.renderAdminButtons()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.authDetails.userid,
    isSignedIn: state.authDetails.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);

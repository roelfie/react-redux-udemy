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
    if (this.props.currentUserId === stream.userid) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui tiny button'>
            Edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className='ui tiny button'>
            Delete
          </Link>
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
            <Link to={`/streams/${s.id}`} className='header'>
              {s.title}
            </Link>
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
        <div className='ui relaxed divided list'>{this.renderList()}</div>
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

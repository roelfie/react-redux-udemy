import React from "react";
import { connect } from "react-redux";
import { loadPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div>
          {post.id}: {post.title}
        </div>
      );
    });
  }
  render() {
    console.log(this.props.posts);
    return <div>{this.renderPosts()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { loadPosts })(PostList);

import React from "react";
import { connect } from "react-redux";
import { loadPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    console.log(`PostsList.render(${this.props.posts.length})`);
    return <div className='ui relaxed divided list'>{this.renderPosts()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { loadPosts })(PostList);

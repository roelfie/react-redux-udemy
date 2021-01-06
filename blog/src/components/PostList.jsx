import React from "react";
import { connect } from "react-redux";
import { loadPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.loadPostsAndUsers();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      const user = this.props.users.find((user) => user.id === post.userId);

      return (
        <div className='item' key={post.id}>
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader user={user} />
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
    posts: state.posts,
    users: state.users
  };
};

export default connect(mapStateToProps, { loadPostsAndUsers })(PostList);

import { combineReducers } from "redux";

const postsReducer = (posts = [], action) => {
  if (action.type === "POSTS_UPDATED") {
    return action.payload;
  }
  return posts;
};

export default combineReducers({ posts: postsReducer });

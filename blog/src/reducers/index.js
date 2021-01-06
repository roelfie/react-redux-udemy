import { combineReducers } from "redux";

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case "LOAD_POSTS":
      return action.payload;
    default:
      return posts;
  }
};

export default combineReducers({ posts: postsReducer });

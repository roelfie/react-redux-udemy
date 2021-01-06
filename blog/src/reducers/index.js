import { combineReducers } from "redux";

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case "LOAD_POSTS":
      return action.payload;
    default:
      return posts;
  }
};

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case "LOAD_USER":
      return [...users, action.payload];
    default:
      return users;
  }
};

export default combineReducers({ posts: postsReducer, users: usersReducer });

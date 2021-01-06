import typicode from "../api/Typicode";
import _ from "lodash";

// This action creator returns a function instead of an object.
// Redux-Thunk will execute this function,
// and this function will then dispatch the result of the async API call.
export const loadPosts = () => {
  return async (dispatch, getState) => {
    const response = await typicode.get("/posts");
    dispatch({ type: "LOAD_POSTS", payload: response.data });
  };
};

export const loadUser = (id) => {
  return async (dispatch) => {
    console.log(`loadUser(${id})`);
    const response = await typicode.get(`/users/${id}`);
    dispatch({ type: "LOAD_USER", payload: response.data });
  };
};

export const loadPostsAndUsers = () => {
  return async (dispatch, getState) => {
    // LoadPosts() returns a function that will be executed by Thunk
    // (that kicks in as middleware as soon as dispatch() is called).
    // That function returns an object that will be sent to the reducers by Thunk.
    await dispatch(loadPosts());

    const userIds = _.uniq(_.map(getState().posts, "userId"));
    userIds.forEach((id) => dispatch(loadUser(id)));

    // Alternate solution with Lodash:
    // _.chain(getState().posts)
    //   .map("userId")
    //   .uniq()
    //   .forEach((id) => dispatch(loadUser(id)))
    //   .value();
  };
};

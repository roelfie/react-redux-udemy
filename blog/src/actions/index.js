import typicode from "../api/Typicode";

// This action creator returns a function instead of an object.
// Redux-Thunk will execute this function,
// and this function will then dispatch the result of the async API call.
export const loadPosts = () => {
  return async (dispatch, getState) => {
    const response = await typicode.get("/posts");
    dispatch({ type: "LOAD_POSTS", payload: response.data });
  };
};

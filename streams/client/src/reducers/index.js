import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authenticationReducer from "./authenticationReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  authDetails: authenticationReducer,
  streams: streamReducer,
  form: formReducer
});

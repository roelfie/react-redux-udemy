import { SIGN_IN, SIGN_OUT } from "./types";
import streamsApi from "../apis/streams";

// https://developers.google.com/identity/sign-in/web/reference#users
export const registerLogin = (googleUser) => {
  const profile = googleUser.getBasicProfile();
  return {
    type: SIGN_IN,
    payload: {
      userid: profile.getId(),
      username: profile.getName(),
      email: profile.getEmail()
    }
  };
};

export const registerLogout = () => {
  return {
    type: SIGN_OUT,
    payload: {}
  };
};

export const createStream = (stream) => {
  return async (dispatch) => {
    console.log("createStream(stream: ", stream);
    streamsApi.post("/streams", stream);
  };
};

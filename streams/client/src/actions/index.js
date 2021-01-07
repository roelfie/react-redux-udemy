import {
  SIGN_IN,
  SIGN_OUT,
  STREAM_CREATED,
  STREAM_UPDATED,
  STREAM_DELETED,
  STREAM_FETCHED,
  STREAMS_FETCHED
} from "./types";
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

export const createStream = (stream) => async (dispatch) => {
  const response = await streamsApi.post("/streams", stream);
  dispatch({ type: STREAM_CREATED, payload: response.data });
};

export const updateStream = (stream) => async (dispatch) => {
  if (!stream.id) {
    throw new Error("Stream has no id. Unable to perform PUT operation.");
  }
  const response = await streamsApi.put(`/streams/${stream.id}`, stream);
  dispatch({ type: STREAM_UPDATED, payload: response.data });
};

export const deleteStream = (streamId) => async (dispatch) => {
  await streamsApi.delete(`/streams/${streamId}`);
  dispatch({ type: STREAM_DELETED, payload: streamId });
};

export const fetchStream = (streamId) => async (dispatch) => {
  const response = await streamsApi.get(`/streams/${streamId}`);
  dispatch({ type: STREAM_FETCHED, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streamsApi.get("/streams");
  dispatch({ type: STREAMS_FETCHED, payload: response.data });
};

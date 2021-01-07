import {
  STREAM_CREATED,
  STREAM_FETCHED,
  STREAM_UPDATED,
  STREAM_DELETED,
  STREAMS_FETCHED
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case STREAM_CREATED:
    case STREAM_UPDATED:
    case STREAM_FETCHED:
      return { ...state, [action.payload.id]: action.payload };
    case STREAMS_FETCHED:
      console.log("TODO add fetched streams to store");
      return state;
    case STREAM_DELETED:
      console.log("TODO delete stream from store");
      return state;
    default:
      return state;
  }
};

export default streamReducer;

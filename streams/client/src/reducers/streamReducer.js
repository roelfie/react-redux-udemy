import _ from "lodash";
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
      // _.mapKeys creates a map from the given keys (action.payload[n].id)
      // to the objects in the given iterable (action.payload[n])
      // The two spread syntax ensures that the second object is merged into the first.
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case STREAM_DELETED:
      // _.omit creates a copy of the 1st arg and leaves out the property named after the 2nd arg
      // (the payload for STREAM_DELETED is the stream id).
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default streamReducer;

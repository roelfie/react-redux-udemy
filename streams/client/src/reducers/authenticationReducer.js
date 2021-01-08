import { SIGN_IN, SIGN_OUT } from "../actions/types";

const SIGNED_OUT_STATE = {
  isSignedIn: false,
  userid: null,
  username: null,
  email: null
};

const authenticationReducer = (state = SIGNED_OUT_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        isSignedIn: true,
        userid: action.payload.userid,
        username: action.payload.username,
        email: action.payload.email
      };
    case SIGN_OUT:
      return SIGNED_OUT_STATE;
    default:
      return state;
  }
};

export default authenticationReducer;

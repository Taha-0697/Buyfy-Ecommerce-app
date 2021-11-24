import { REMOVE_USER, SET_USER } from "./authConstants";

const initialState = null;
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return payload.user;
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
};

export default authReducer;

import { SET_PAST, SET_CURRENT, SET_FUTURE } from "./types";

const initialState = {
  past: [],
  current: null,
  future: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  const newState = Object.assign({}, state);

  switch (type) {
    case SET_PAST:
      newState.past = payload;
      break;
    case SET_CURRENT:
      newState.current = payload;
      break;
    case SET_FUTURE:
      newState.future = payload;
      break;
    default:
      break;
  }

  return newState;
};

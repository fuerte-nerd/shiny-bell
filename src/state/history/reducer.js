import { SET_PAST, SET_CURRENT } from "./types";

const initialState = {
  past: [],
  current: null,
  future: [],
  stage: {
    isValidating: false,
    validated: false,
    changes: null,
  },
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
    default:
      break;
  }

  return newState;
};

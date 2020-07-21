import { SET_LOAD_SCREEN_FEEDBACK, SET_FONT_SELECTOR_MESSAGE } from "./types";

const initialState = {
  loadScreenFeedback: [],
  fontSelector: {
    msg: "",
    severity: "",
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  const newState = Object.assign({}, state);

  switch (type) {
    case SET_LOAD_SCREEN_FEEDBACK:
      newState.loadScreenFeedback = payload;
      break;
    case SET_FONT_SELECTOR_MESSAGE:
      newState.fontSelector.msg = payload.msg;
      newState.fontSelector.severity = payload.severity;
      break;
    default:
      break;
  }
  return newState;
};

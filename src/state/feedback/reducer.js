import { SET_LOAD_SCREEN_MESSAGE, SET_FONT_SELECTOR_MESSAGE } from "./types";

const initialState = {
  loadScreen: {
    msg: "",
    severity: "",
  },
  fontSelector: {
    msg: "",
    severity: "",
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  const newState = Object.assign({}, state);

  switch (type) {
    case SET_LOAD_SCREEN_MESSAGE:
      newState.loadScreen.msg = payload.msg;
      newState.loadScreen.severity = payload.severity;
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

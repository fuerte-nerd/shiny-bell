import {
  SET_LOADING_SCREEN,
  SET_SIDEBAR,
  SET_FONT_SELECTOR,
  SET_COLOR_PICKER,
} from "./types";

const initialState = {
  loadingScreen: true,
  sidebar: false,
  fontSelector: false,
  colorPicker: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  const newState = Object.assign({}, state);

  switch (type) {
    case SET_LOADING_SCREEN:
      newState.loadingScreen = payload;
      break;
    case SET_SIDEBAR:
      newState.sidebar = payload;
      break;
    case SET_FONT_SELECTOR:
      newState.fontSelector = payload;
      break;
    case SET_COLOR_PICKER:
      newState.colorPicker = payload;
      break;
    default:
      break;
  }

  return newState;
};

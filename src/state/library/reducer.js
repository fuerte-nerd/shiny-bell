import { SET_LOADING, SET_LOADED, SET_FONTS, SET_BLACKLISTED } from "./types";

const initialState = {
  isLoading: false,
  loaded: false,
  fonts: null,
  blacklisted: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  const newState = Object.assign({}, state);

  switch (type) {
    case SET_LOADING:
      newState.isLoading = payload;
      break;
    case SET_LOADED:
      newState.loaded = payload;
      break;
    case SET_FONTS:
      newState.fonts = payload;
      break;
    case SET_BLACKLISTED:
      newState.blacklisted = payload;
      break;
    default:
      break;
  }

  return newState;
};

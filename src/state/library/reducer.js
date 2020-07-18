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
      newState.library.isLoading = payload;
      break;
    case SET_LOADED:
      newState.library.loaded = payload;
      break;
    case SET_FONTS:
      newState.library.fonts = payload;
      break;
    case SET_BLACKLISTED:
      newState.library.blacklisted = payload;
      break;
    default:
      break;
  }

  return newState;
};

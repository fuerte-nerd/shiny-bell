import {
  SET_DEF_FONT_LOADED,
  SET_BODY_FONT_LOCK,
  SET_HEADER_FONT_LOCK,
  SET_PALETTE_LOCK,
  SET_VALIDATION_FONT,
  SET_BODY_FONT_CATEGORIES,
  SET_HEADER_FONT_CATEGORIES,
} from "./types";

const initialState = {
  validationFont: null,
  fonts: {
    default: {
      loaded: false,
    },
    body: {
      searchCategories: [
        "serif",
        "sans-serif",
        "display",
        "handwriting",
        "monospace",
      ],
      locked: false,
    },
    header: {
      searchCategories: [
        "serif",
        "sans-serif",
        "display",
        "handwriting",
        "monospace",
      ],
      locked: false,
    },
  },
  palette: {
    locked: false,
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);

  const newState = Object.assign({}, state);

  switch (type) {
    case SET_VALIDATION_FONT:
      newState.validationFont = payload;
      break;
    case SET_DEF_FONT_LOADED:
      newState.fonts.default.loaded = payload;
      break;
    case SET_BODY_FONT_LOCK:
      newState.fonts.body.locked = payload;
      break;
    case SET_BODY_FONT_CATEGORIES:
      newState.fonts.body.searchCategories = payload;
      break;
    case SET_HEADER_FONT_LOCK:
      newState.fonts.header.locked = payload;
      break;
    case SET_HEADER_FONT_CATEGORIES:
      newState.fonts.header.searchCategories = payload;
      break;
    case SET_PALETTE_LOCK:
      newState.palette.locked = payload;
      break;
    default:
      break;
  }

  return newState;
};

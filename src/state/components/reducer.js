import {
  SET_LOADING,
  SET_DEF_FONT_LOADING,
  SET_DEF_FONT_LOADED,
  SET_NEXT_BODY_FONT,
  SET_BODY_FONT_LOADING,
  SET_BODY_FONT_LOADED,
  SET_BODY_FONT_LOCK,
  SET_NEXT_HEADER_FONT,
  SET_HEADER_FONT_LOADING,
  SET_HEADER_FONT_LOADED,
  SET_HEADER_FONT_LOCK,
  SET_PALETTE_LOCK,
  SET_PRIMARY_HEX,
  SET_PRIMARY_NAME,
  SET_SECONDARY_HEX,
  SET_SECONDARY_NAME,
  SET_FONTS_LOADING,
  SET_PALETTE_LOADING,
} from "./types";

const initialState = {
  loading: false,
  fonts: {
    loading: false,
    default: {
      isLoading: null,
      loaded: false,
    },
    body: {
      isLoading: null,
      loaded: false,
      locked: false,
      nextFont: null,
    },
    header: {
      isLoading: null,
      loaded: false,
      locked: false,
      nextFont: null,
    },
  },
  palette: {
    locked: false,
    isLoading: null,
    primary: {
      hex: "#000000",
      name: "Black",
    },
    secondary: {
      hex: "#FFFFFF",
      name: "White",
    },
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);

  const newState = Object.assign({}, state);

  switch (type) {
    case SET_LOADING:
      newState.loading = payload;
      break;
    case SET_FONTS_LOADING:
      newState.fonts.loading = payload;
      break;
    case SET_DEF_FONT_LOADING:
      newState.fonts.default.isLoading = payload;
      break;
    case SET_DEF_FONT_LOADED:
      newState.fonts.default.loaded = payload;
      break;
    case SET_NEXT_BODY_FONT:
      newState.fonts.body.nextFont = payload;
      break;
    case SET_BODY_FONT_LOADING:
      newState.fonts.body.isLoading = payload;
      break;
    case SET_BODY_FONT_LOADED:
      newState.fonts.body.loaded = payload;
      break;
    case SET_BODY_FONT_LOCK:
      newState.fonts.body.locked = payload;
      break;
    case SET_NEXT_HEADER_FONT:
      newState.fonts.header.nextFont = payload;
      break;
    case SET_HEADER_FONT_LOADING:
      newState.fonts.header.isLoading = payload;
      break;
    case SET_HEADER_FONT_LOADED:
      newState.fonts.header.loaded = payload;
      break;
    case SET_HEADER_FONT_LOCK:
      newState.fonts.header.locked = payload;
      break;
    case SET_PALETTE_LOADING:
      newState.palette.isLoading = payload;
      break;
    case SET_PALETTE_LOCK:
      newState.palette.locked = payload;
      break;
    case SET_PRIMARY_HEX:
      newState.palette.primary.hex = payload;
      break;
    case SET_PRIMARY_NAME:
      newState.palette.primary.name = payload;
      break;
    case SET_SECONDARY_HEX:
      newState.palette.secondary.hex = payload;
      break;
    case SET_SECONDARY_NAME:
      newState.palette.secondary.name = payload;
      break;
    default:
      break;
  }

  return newState;
};

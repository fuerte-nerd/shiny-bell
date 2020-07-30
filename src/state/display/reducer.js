import {
  SET_SAVE_OPEN,
  SET_SAVE_ERROR,
  SET_LOAD,
  SET_LOADING_SCREEN,
  SET_SIDEBAR,
  SET_FONT_SELECTOR_OPEN,
  SET_COLOR_PICKER_OPEN,
  SET_FONT_SELECTOR_SECTION,
  SET_FONT_SELECTOR_CATEGORIES,
  SET_FONT_SELECTOR_ERROR,
  SET_COLOR_PICKER_SECTION,
  SET_FONT_CATEGORY_SELECTOR_OPEN,
  SET_FONT_CATEGORY_SELECTOR_SECTION,
  SET_THEME_CODE,
} from "./types";

const initialState = {
  loadingScreen: true,
  sidebar: false,
  save: {
    isOpen: false,
    error: false,
  },
  load: false,
  themeCode: false,
  fontSelector: {
    isOpen: false,
    section: "body",
    categoryFilters: [
      "serif",
      "sans-serif",
      "display",
      "handwriting",
      "monospace",
    ],
    error: null,
  },
  colorPicker: {
    isOpen: false,
    section: "primary",
  },
  fontCategorySelector: {
    isOpen: false,
    section: "body",
  },
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
    case SET_FONT_SELECTOR_OPEN:
      newState.fontSelector.isOpen = payload;
      break;
    case SET_FONT_SELECTOR_SECTION:
      newState.fontSelector.section = payload;
      break;
    case SET_FONT_SELECTOR_CATEGORIES:
      newState.fontSelector.categoryFilters = payload;
      break;
    case SET_FONT_SELECTOR_ERROR:
      newState.fontSelector.error = payload;
      break;
    case SET_COLOR_PICKER_OPEN:
      newState.colorPicker.isOpen = payload;
      break;
    case SET_COLOR_PICKER_SECTION:
      newState.colorPicker.section = payload;
      break;
    case SET_FONT_CATEGORY_SELECTOR_OPEN:
      newState.fontCategorySelector.isOpen = payload;
      break;
    case SET_FONT_CATEGORY_SELECTOR_SECTION:
      newState.fontCategorySelector.section = payload;
      break;
    case SET_THEME_CODE:
      newState.themeCode = payload;
      break;
    case SET_SAVE_OPEN:
      newState.save.isOpen = payload;
      break;
    case SET_SAVE_ERROR:
      newState.save.error = payload;
      break;
    case SET_LOAD:
      newState.load = payload;
      break;
    default:
      break;
  }

  return newState;
};

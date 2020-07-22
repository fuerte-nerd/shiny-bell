import { SET_SECTION, SET_CATEGORY_FILTERS, SET_ERROR } from "./types";

const initialState = {
  section: "",
  categoryFilters: [
    "serif",
    "sans-serif",
    "display",
    "handwriting",
    "monospace",
  ],
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  const newState = Object.assign({}, state);

  switch (type) {
    case SET_SECTION:
      newState.section = payload;
      break;
    case SET_CATEGORY_FILTERS:
      newState.categoryFilters = payload;
      break;
    case SET_ERROR:
      newState.error = payload;
      break;
    default:
      break;
  }

  return newState;
};

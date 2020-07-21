import { SET_LOAD_SCREEN_FEEDBACK, SET_FONT_SELECTOR_MESSAGE } from "./types";

export const setLoadScreenFeedback = (payload) => ({
  type: SET_LOAD_SCREEN_FEEDBACK,
  payload,
});

export const setFontSelectorMessage = (payload) => ({
  type: SET_FONT_SELECTOR_MESSAGE,
  payload,
});

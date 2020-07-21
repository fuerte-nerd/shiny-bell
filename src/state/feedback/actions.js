import { SET_LOAD_SCREEN_MESSAGE, SET_FONT_SELECTOR_MESSAGE } from "./types";

export const setLoadScreenMessage = (payload) => ({
  type: SET_LOAD_SCREEN_MESSAGE,
  payload,
});

export const setFontSelectorMessage = (payload) => ({
  type: SET_FONT_SELECTOR_MESSAGE,
  payload,
});

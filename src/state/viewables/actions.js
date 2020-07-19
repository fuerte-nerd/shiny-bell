import {
  SET_LOADING_SCREEN,
  SET_SIDEBAR,
  SET_FONT_SELECTOR,
  SET_COLOR_PICKER,
} from "./types";

export const setLoadingScreen = (payload) => ({
  type: SET_LOADING_SCREEN,
  payload,
});

export const setSidebar = (payload) => ({
  type: SET_SIDEBAR,
  payload,
});

export const setFontSelector = (payload) => ({
  type: SET_FONT_SELECTOR,
  payload,
});

export const setColorPicker = (payload) => ({
  type: SET_COLOR_PICKER,
  payload,
});

import {
  SET_LOADING_SCREEN,
  SET_SIDEBAR,
  SET_COLOR_PICKER,
  SET_FONT_SELECTOR_OPEN,
  SET_FONT_SELECTOR_SECTION,
} from "./types";

export const setLoadingScreen = (payload) => ({
  type: SET_LOADING_SCREEN,
  payload,
});

export const setSidebar = (payload) => ({
  type: SET_SIDEBAR,
  payload,
});

export const setFontSelectorOpen = (payload) => ({
  type: SET_FONT_SELECTOR_OPEN,
  payload,
});

export const setFontSelectorSection = (payload) => ({
  type: SET_FONT_SELECTOR_SECTION,
  payload,
});

export const setColorPicker = (payload) => ({
  type: SET_COLOR_PICKER,
  payload,
});

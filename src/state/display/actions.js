import {
  SET_LOADING_SCREEN,
  SET_SIDEBAR,
  SET_COLOR_PICKER_OPEN,
  SET_FONT_SELECTOR_OPEN,
  SET_FONT_SELECTOR_SECTION,
  SET_FONT_SELECTOR_CATEGORIES,
  SET_COLOR_PICKER_SECTION,
  SET_FONT_CATEGORY_SELECTOR_OPEN,
  SET_FONT_CATEGORY_SELECTOR_SECTION,
  SET_FONT_SELECTOR_ERROR,
  SET_THEME_CODE,
  SET_SAVE,
  SET_LOAD,
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

export const setFontSelectorCategories = (payload) => ({
  type: SET_FONT_SELECTOR_CATEGORIES,
  payload,
});

export const setFontSelectorError = (payload) => ({
  type: SET_FONT_SELECTOR_ERROR,
  payload,
});

export const setColorPickerOpen = (payload) => ({
  type: SET_COLOR_PICKER_OPEN,
  payload,
});

export const setColorPickerSection = (payload) => ({
  type: SET_COLOR_PICKER_SECTION,
  payload,
});

export const setFontCategorySelectorOpen = (payload) => ({
  type: SET_FONT_CATEGORY_SELECTOR_OPEN,
  payload,
});

export const setFontCategorySelectorSection = (payload) => ({
  type: SET_FONT_CATEGORY_SELECTOR_SECTION,
  payload,
});

export const setThemeCode = (payload) => ({
  type: SET_THEME_CODE,
  payload,
});

export const setSave = (payload) => ({
  type: SET_SAVE,
  payload,
});

export const setLoad = (payload) => ({
  type: SET_LOAD,
  payload,
});

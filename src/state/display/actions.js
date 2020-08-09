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
  SET_SAVE_OPEN,
  SET_SAVE_ERROR,
  SET_SAVE_SUCCESS,
  SET_LOAD,
  SET_RENAME,
  SET_IMAGE_SEARCH,
  SET_HERO_TEXT,
  SET_WELCOME,
  SET_FONT_INFO,
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

export const setSaveOpen = (payload) => ({
  type: SET_SAVE_OPEN,
  payload,
});

export const setSaveError = (payload) => ({ type: SET_SAVE_ERROR, payload });

export const setSaveSuccess = (payload) => ({
  type: SET_SAVE_SUCCESS,
  payload,
});

export const setLoad = (payload) => ({
  type: SET_LOAD,
  payload,
});

export const setRename = (payload) => ({
  type: SET_RENAME,
  payload,
});

export const setImageSearch = (payload) => ({
  type: SET_IMAGE_SEARCH,
  payload,
});

export const setHeroText = (payload) => ({
  type: SET_HERO_TEXT,
  payload,
});

export const setWelcome = (payload) => ({
  type: SET_WELCOME,
  payload,
});

export const setFontInfo = (payload) => ({
  type: SET_FONT_INFO,
  payload,
});

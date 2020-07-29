import {
  SET_DEF_FONT_LOADED,
  SET_BODY_FONT_LOCK,
  SET_HEADER_FONT_LOCK,
  SET_PALETTE_LOCK,
  SET_VALIDATION_FONT,
  SET_BODY_FONT_CATEGORIES,
  SET_HEADER_FONT_CATEGORIES,
} from "./types";

export const setValidationFont = (payload) => ({
  type: SET_VALIDATION_FONT,
  payload,
});

export const setDefFontLoaded = (payload) => ({
  type: SET_DEF_FONT_LOADED,
  payload,
});

export const setBodyFontLock = (payload) => ({
  type: SET_BODY_FONT_LOCK,
  payload,
});

export const setBodyFontCategories = (payload) => ({
  type: SET_BODY_FONT_CATEGORIES,
  payload,
});

export const setHeaderFontLock = (payload) => ({
  type: SET_HEADER_FONT_LOCK,
  payload,
});

export const setHeaderFontCategories = (payload) => ({
  type: SET_HEADER_FONT_CATEGORIES,
  payload,
});

export const setPaletteLock = (payload) => ({
  type: SET_PALETTE_LOCK,
  payload,
});

import {
  SET_LOADING,
  SET_DEF_FONT_LOADING,
  SET_DEF_FONT_LOADED,
  SET_BODY_FONT,
  SET_BODY_FONT_LOADING,
  SET_BODY_FONT_LOADED,
  SET_BODY_FONT_LOCK,
  SET_HEADER_FONT,
  SET_HEADER_FONT_LOADING,
  SET_HEADER_FONT_LOADED,
  SET_HEADER_FONT_LOCK,
  SET_PALETTE_LOCK,
  SET_PRIMARY_HEX,
  SET_PRIMARY_NAME,
  SET_SECONDARY_HEX,
  SET_SECONDARY_NAME,
} from "./types";

export const setComponentsLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setDefFontLoading = (payload) => ({
  type: SET_DEF_FONT_LOADING,
  payload,
});

export const setDefFontLoaded = (payload) => ({
  type: SET_DEF_FONT_LOADED,
  payload,
});

export const setBodyFont = (payload) => ({
  type: SET_BODY_FONT,
  payload,
});

export const setBodyFontLoading = (payload) => ({
  type: SET_BODY_FONT_LOADING,
  payload,
});

export const setBodyFontLoaded = (payload) => ({
  type: SET_BODY_FONT_LOADED,
  payload,
});

export const setBodyFontLock = (payload) => ({
  type: SET_BODY_FONT_LOCK,
  payload,
});

export const setHeaderFont = (payload) => ({
  type: SET_HEADER_FONT,
  payload,
});

export const setHeaderFontLoading = (payload) => ({
  type: SET_HEADER_FONT_LOADING,
  payload,
});

export const setHeaderFontLoaded = (payload) => ({
  type: SET_HEADER_FONT_LOADED,
  payload,
});

export const setHeaderFontLock = (payload) => ({
  type: SET_HEADER_FONT_LOCK,
  payload,
});

export const setPaletteLock = (payload) => ({
  type: SET_PALETTE_LOCK,
  payload,
});

export const setPrimaryHex = (payload) => ({
  type: SET_PRIMARY_HEX,
  payload,
});

export const setPrimaryName = (payload) => ({
  type: SET_PRIMARY_NAME,
  payload,
});

export const setSecondaryHex = (payload) => ({
  type: SET_SECONDARY_HEX,
  payload,
});

export const setSecondaryName = (payload) => ({
  type: SET_SECONDARY_NAME,
  payload,
});

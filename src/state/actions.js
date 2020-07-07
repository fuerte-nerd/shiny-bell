import {
  SET_FONTS,
  SET_FONT,
  SET_PALETTE,
  SET_BGCOLOR,
  SET_DIALOGS,
  SET_PRIMARY,
  SET_SECONDARY,
  SET_LOCKS,
  SET_MODE,
  SET_FONTLOADING,
  SET_SECONDARYMODE,
  SET_STATICFONT,
  SET_SPACING,
  SET_2FONTS,
  SET_HEADERFONT,
  SET_BUTTONTEXTTRANSFORM,
  SET_ROUNDING,
} from "./types";

export const setFontLoading = (data) => ({
  type: SET_FONTLOADING,
  payload: data,
});

export const set2Fonts = (data) => ({
  type: SET_2FONTS,
  payload: data,
});

export const setSpacing = (data) => ({
  type: SET_SPACING,
  payload: data,
});

export const setRounding = (data) => ({
  type: SET_ROUNDING,
  payload: data,
});

export const setStaticFont = (data) => ({
  type: SET_STATICFONT,
  payload: data,
});

export const setSecondaryMode = (data) => ({
  type: SET_SECONDARYMODE,
  payload: data,
});

export const setMode = (data) => ({
  type: SET_MODE,
  payload: data,
});

export const setLocked = (data) => ({
  type: SET_LOCKS,
  payload: data,
});

export const setDialogs = (data) => ({
  type: SET_DIALOGS,
  payload: data,
});

export const setFonts = (data) => ({
  type: SET_FONTS,
  payload: data,
});

export const setFont = (data) => ({
  type: SET_FONT,
  payload: data,
});

export const setHeaderFont = (data) => ({
  type: SET_HEADERFONT,
  payload: data,
});

export const setButtonTextTransform = (data) => ({
  type: SET_BUTTONTEXTTRANSFORM,
  payload: data,
});

export const setPrimary = (data) => ({
  type: SET_PRIMARY,
  payload: data,
});

export const setSecondary = (data) => ({
  type: SET_SECONDARY,
  payload: data,
});

export const setPalette = (data) => ({
  type: SET_PALETTE,
  payload: data,
});

export const setBgColor = (data) => ({
  type: SET_BGCOLOR,
  payload: data,
});

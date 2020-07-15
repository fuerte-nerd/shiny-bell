import {
  SET_FONTS,
  SET_FONT,
  SET_PALETTE,
  SET_BGCOLOR,
  SET_THEMECODE,
  SET_SETTINGS,
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
  SET_FONTSIZE,
  SET_COLORPICKER,
  SET_FONTPICKER,
  SET_RANDOMFONTSELECT,
  SET_REVERT_FONT,
  SET_RESPONSIVE_TEXT,
  SET_BACKGROUNDS,
  SET_PRIMARY_COLOR_NAME,
  SET_SECONDARY_COLOR_NAME,
  SET_CHANGE_HISTORY,
} from "./types";

export const setChangeHistory = (data) => ({
  type: SET_CHANGE_HISTORY,
  payload: data,
});

export const setPrimaryColorName = (data) => ({
  type: SET_PRIMARY_COLOR_NAME,
  payload: data,
});

export const setSecondaryColorName = (data) => ({
  type: SET_SECONDARY_COLOR_NAME,
  payload: data,
});

export const setBackgrounds = (data) => ({
  type: SET_BACKGROUNDS,
  payload: data,
});

export const setResponsiveText = (data) => ({
  type: SET_RESPONSIVE_TEXT,
  payload: data,
});

export const setRevertFont = (data) => ({
  type: SET_REVERT_FONT,
  payload: data,
});

export const setRandomFontSelect = (data) => ({
  type: SET_RANDOMFONTSELECT,
  payload: data,
});

export const setFontPicker = (data) => ({
  type: SET_FONTPICKER,
  payload: data,
});

export const setColorPicker = (data) => ({
  type: SET_COLORPICKER,
  payload: data,
});

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

export const setFontSize = (data) => ({
  type: SET_FONTSIZE,
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

export const setThemeCode = (data) => ({
  type: SET_THEMECODE,
  payload: data,
});

export const setSettings = (data) => ({
  type: SET_SETTINGS,
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

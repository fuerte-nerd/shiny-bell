import {
  SET_RANDOM_FONT_SELECT,
  SET_FONT_SIZE,
  SET_RESPONSIVE_FONT_SIZES,
  SET_TWO_FONTS,
  SET_DARK_MODE,
  SET_SECONDARY_COLOR_MIX,
  SET_ROUNDING,
  SET_SPACING,
  SET_BUTTON_TEXT_TRANSFORM,
  SET_PAGE_BACKGROUND,
  SET_BOX_BACKGROUND,
} from "./types";

export const setRandomFontSelect = (payload) => ({
  type: SET_RANDOM_FONT_SELECT,
  payload,
});

export const setFontSize = (payload) => ({
  type: SET_FONT_SIZE,
  payload,
});

export const setResponsiveFontSizes = (payload) => ({
  type: SET_RESPONSIVE_FONT_SIZES,
  payload,
});

export const setTwoFonts = (payload) => ({
  type: SET_TWO_FONTS,
  payload,
});

export const setDarkMode = (payload) => ({
  type: SET_DARK_MODE,
  payload,
});

export const setSecondaryColorMix = (payload) => ({
  type: SET_SECONDARY_COLOR_MIX,
  payload,
});

export const setRounding = (payload) => ({
  type: SET_ROUNDING,
  payload,
});

export const setSpacing = (payload) => ({
  type: SET_SPACING,
  payload,
});

export const setButtonTextTransform = (payload) => ({
  type: SET_BUTTON_TEXT_TRANSFORM,
  payload,
});

export const setPageBackground = (payload) => ({
  type: SET_PAGE_BACKGROUND,
  payload,
});

export const setBoxBackground = (payload) => ({
  type: SET_BOX_BACKGROUND,
  payload,
});

import {
  SET_STATICFONT,
  SET_ROUNDING,
  SET_SPACING,
  SET_FONT,
  SET_FONTS,
  SET_BGCOLOR,
  SET_THEMECODE,
  SET_SETTINGS,
  SET_PRIMARY,
  SET_SECONDARY,
  SET_LOCKS,
  SET_MODE,
  SET_FONTLOADING,
  SET_SECONDARYMODE,
  SET_2FONTS,
  SET_HEADERFONT,
  SET_BUTTONTEXTTRANSFORM,
  SET_FONTSIZE,
  SET_COLORPICKER,
} from "./types";

const initialState = {
  staticFontLoaded: false,
  fonts: null,
  fontLoading: true,
  font: "",
  headerFont: "",
  fontSize: 14,
  twoFonts: false,
  primary: "rgb(0,0,0)",
  secondaryMode: "complement",
  secondary: "rgb(255,255,255)",
  bgColor: false,
  mode: "light",
  spacing: 8,
  rounding: 4,
  buttonTextTransform: "uppercase",
  settings: false,
  themeCode: false,
  colorPicker: false,
  locked: {
    bodyFont: false,
    headerFont: false,
    palette: false,
  },
};

export default (state = initialState, action) => {
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case SET_COLORPICKER:
      return {
        ...state,
        colorPicker: payload,
      };
    case SET_FONTSIZE:
      return {
        ...state,
        fontSize: payload,
      };
    case SET_ROUNDING:
      return {
        ...state,
        rounding: payload,
      };
    case SET_BUTTONTEXTTRANSFORM:
      return {
        ...state,
        buttonTextTransform: payload,
      };
    case SET_SPACING:
      return {
        ...state,
        spacing: payload,
      };
    case SET_2FONTS:
      return {
        ...state,
        twoFonts: payload,
      };
    case SET_STATICFONT:
      return {
        ...state,
        staticFontLoaded: payload,
      };
    case SET_SECONDARYMODE:
      return {
        ...state,
        secondaryMode: payload,
      };
    case SET_FONTLOADING:
      return {
        ...state,
        fontLoading: payload,
      };
    case SET_MODE:
      return {
        ...state,
        mode: payload,
      };
    case SET_LOCKS:
      return {
        ...state,
        locked: payload,
      };
    case SET_SETTINGS:
      return { ...state, settings: payload };
    case SET_THEMECODE:
      return {
        ...state,
        themeCode: payload,
      };
    case SET_BGCOLOR:
      return {
        ...state,
        bgColor: payload,
      };
    case SET_PRIMARY:
      return {
        ...state,
        primary: payload,
      };
    case SET_SECONDARY:
      return {
        ...state,
        secondary: payload,
      };
    case SET_FONTS:
      return {
        ...state,
        fonts: payload,
      };
    case SET_FONT:
      return {
        ...state,
        font: payload,
      };
    case SET_HEADERFONT:
      return {
        ...state,
        headerFont: payload,
      };
    default:
      return state;
  }
};

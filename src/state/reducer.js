import {
  SET_CHANGE_HISTORY,
  SET_STATICFONT,
  SET_RESPONSIVE_TEXT,
  SET_BACKGROUNDS,
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
  SET_FONTPICKER,
  SET_RANDOMFONTSELECT,
  SET_PRIMARY_COLOR_NAME,
  SET_SECONDARY_COLOR_NAME,
  SET_UNDO,
  SET_FONT_TO_VALIDATE,
} from "./types";

const initialState = {
  staticFontLoaded: false,
  fonts: null,
  fontLoading: true,
  fontToValidate: {
    body: null,
    header: null,
  },
  font: "",
  headerFont: "",
  fontSize: 14,
  responsiveText: true,
  twoFonts: false,
  randomFontSelect: true,
  primary: "#000000",
  secondaryMode: "complement",
  secondary: "#ffffff",
  primaryColorName: "Black",
  secondaryColorName: "White",
  mode: "light",
  spacing: 8,
  rounding: 4,
  buttonTextTransform: "uppercase",
  settings: false,
  themeCode: false,
  colorPicker: false,
  fontPicker: {
    open: false,
    section: "",
    revertFont: {},
    categories: ["serif", "sans-serif", "display", "monospace", "handwriting"],
    selection: null,
    notFound: false,
  },
  locked: {
    bodyFont: false,
    headerFont: false,
    palette: false,
  },
  backgrounds: {
    page: "transparent",
    box: "transparent",
  },
  undo: false,
  changeHistory: {
    changes: [],
    currentPosition: -1,
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FONT_TO_VALIDATE:
      return {
        ...state,
        fontToValidate: payload,
      };
    case SET_UNDO:
      return {
        ...state,
        undo: payload,
      };
    case SET_CHANGE_HISTORY:
      return {
        ...state,
        changeHistory: payload,
      };
    case SET_PRIMARY_COLOR_NAME:
      return {
        ...state,
        primaryColorName: payload,
      };
    case SET_SECONDARY_COLOR_NAME:
      return {
        ...state,
        secondaryColorName: payload,
      };
    case SET_BACKGROUNDS:
      return {
        ...state,
        backgrounds: payload,
      };
    case SET_RESPONSIVE_TEXT:
      return {
        ...state,
        responsiveText: payload,
      };
    case SET_RANDOMFONTSELECT:
      return {
        ...state,
        randomFontSelect: payload,
      };
    case SET_FONTPICKER:
      return {
        ...state,
        fontPicker: payload,
      };
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

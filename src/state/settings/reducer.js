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

const initialState = {
  randomFontSelect: true,
  fontSize: 14,
  responsiveFontSizes: true,
  twoFonts: false,
  darkMode: false,
  secondaryColorMix: "complement",
  rounding: 4,
  spacing: 8,
  buttonTextTransform: "uppercase",
  backgrounds: {
    page: "transparent",
    box: "transparent",
  },
  fontCategoryFilters: {
    body: ["display"],
    header: ["serif", "sans-serif", "display", "handwriting", "monospace"],
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  const newState = Object.assign({}, state);

  switch (type) {
    case SET_RANDOM_FONT_SELECT:
      newState.randomFontSelect = payload;
      break;
    case SET_FONT_SIZE:
      newState.fontSize = payload;
      break;
    case SET_RESPONSIVE_FONT_SIZES:
      newState.responsiveFontSizes = payload;
      break;
    case SET_TWO_FONTS:
      newState.twoFonts = payload;
      break;
    case SET_DARK_MODE:
      newState.darkMode = payload;
      break;
    case SET_SECONDARY_COLOR_MIX:
      newState.secondaryColorMix = payload;
      break;
    case SET_ROUNDING:
      newState.rounding = payload;
      break;
    case SET_SPACING:
      newState.spacing = payload;
      break;
    case SET_BUTTON_TEXT_TRANSFORM:
      newState.buttonTextTransform = payload;
      break;
    case SET_PAGE_BACKGROUND:
      newState.backgrounds.page = payload;
      break;
    case SET_BOX_BACKGROUND:
      newState.backgrounds.box = payload;
      break;
    default:
      break;
  }

  return newState;
};

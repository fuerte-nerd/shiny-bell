import { SET_RANDOM_FONT_SELECT } from "./types";

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
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  const newState = Object.assign({}, state);

  switch (type) {
    case SET_RANDOM_FONT_SELECT:
      newState.randomFontSelect = payload;
      break;
    default:
      break;
  }

  return newState;
};

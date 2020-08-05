import { createMuiTheme } from "@material-ui/core";
import store from "../state/store";

const {
  buttonTextTransform,
  mode,
  primary,
  secondary,
  twoFonts,
  headerFont,
  font,
  spacing,
  rounding,
  fontSize,
} = store.getState();

export default createMuiTheme({
  overrides: {
    MuiDialogContentText: {
      root: { fontFamily: "Roboto" },
    },
    MuiDialogTitle: {
      root: { fontFamily: "Roboto" },
    },
    MuiListItemText: {
      primary: { fontFamily: "Roboto" },
      secondary: { fontFamily: "Roboto" },
    },
    MuiButton: {
      root: { textTransform: buttonTextTransform },
    },
    MuiFormControlLabel: {
      label: { fontFamily: "Roboto" },
    },
    MuiSelect: { root: { fontFamily: "Roboto" } },
    MuiAppBar: { colorTransparent: { boxShadow: "none" } },
  },
  palette: {
    type: mode,
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    h1: {
      fontFamily: twoFonts ? headerFont.themeName : font.themeName,
    },
    h2: {
      fontFamily: twoFonts ? headerFont.themeName : font.themeName,
    },
    h3: {
      fontFamily: twoFonts ? headerFont.themeName : font.themeName,
    },
    h4: {
      fontFamily: twoFonts ? headerFont.themeName : font.themeName,
    },
    h5: {
      fontFamily: twoFonts ? headerFont.themeName : font.themeName,
    },
    h6: {
      fontFamily: twoFonts ? headerFont.themeName : font.themeName,
    },
    subtitle1: {
      fontFamily: font.themeName,
    },
    subtitle2: {
      fontFamily: font.themeName,
    },
    body1: {
      fontFamily: font.themeName,
    },
    body2: {
      fontFamily: font.themeName,
    },
    button: {
      fontFamily: font.themeName,
    },
    overline: {
      fontFamily: font.themeName,
    },
    caption: {
      fontFamily: font.themeName,
    },
    fontSize: fontSize,
  },
  spacing: spacing,
  shape: { borderRadius: rounding },
});

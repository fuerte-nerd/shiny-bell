import React from "react";
import { connect } from "react-redux";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
  CssBaseline,
} from "@material-ui/core";

const Layout = ({
  children,
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
  responsiveText,
}) => {
  const theme = createMuiTheme({
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
  return (
    <ThemeProvider theme={responsiveText ? responsiveFontSizes(theme) : theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  buttonTextTransform: state.buttonTextTransform,
  mode: state.mode,
  primary: state.primary,
  secondary: state.secondary,
  twoFonts: state.twoFonts,
  headerFont: state.headerFont,
  font: state.font,
  spacing: state.spacing,
  rounding: state.rounding,
  fontSize: state.fontSize,
  responsiveText: state.responsiveText,
});

export default connect(mapStateToProps)(Layout);

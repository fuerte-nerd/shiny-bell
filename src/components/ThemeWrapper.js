import React from "react";
import { connect } from "react-redux";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";

const ThemeWrapper = (props) => {
  const { children } = props;

  const { twoFonts, bodyFont, headerFont } = props;

  const { primaryColor, secondaryColor } = props;

  const theme = createMuiTheme({
    overrides: {
      MuiListItemText: {
        primary: { fontFamily: "Roboto" },
        secondary: { fontFamily: "Roboto" },
      },
    },
    typography: {
      h1: {
        fontFamily:
          bodyFont && headerFont && twoFonts
            ? headerFont.themeName
            : bodyFont.themeName,
      },
      h2: {
        fontFamily: twoFonts ? headerFont.themeName : bodyFont.themeName,
      },
      h3: {
        fontFamily: twoFonts ? headerFont.themeName : bodyFont.themeName,
      },
      h4: {
        fontFamily: twoFonts ? headerFont.themeName : bodyFont.themeName,
      },
      h5: {
        fontFamily: twoFonts ? headerFont.themeName : bodyFont.themeName,
      },
      h6: {
        fontFamily: twoFonts ? headerFont.themeName : bodyFont.themeName,
      },
      subtitle1: {
        fontFamily: bodyFont.themeName,
      },
      subtitle2: {
        fontFamily: bodyFont.themeName,
      },
      body1: {
        fontFamily: bodyFont.themeName,
      },
      body2: {
        fontFamily: bodyFont.themeName,
      },
      button: {
        fontFamily: bodyFont.themeName,
      },
      overline: {
        fontFamily: bodyFont.themeName,
      },
      caption: {
        fontFamily: bodyFont.themeName,
      },
    },
    palette: {
      primary: { main: primaryColor },
      secondary: { main: secondaryColor },
    },
  });

  return (
    bodyFont &&
    headerFont && <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  twoFonts: state.settings.twoFonts,
  bodyFont: state.components.fonts.body.currentFont,
  headerFont: state.components.fonts.header.currentFont,
  primaryColor: state.components.palette.primary.hex,
  secondaryColor: state.components.palette.secondary.hex,
});

export default connect(mapStateToProps)(ThemeWrapper);

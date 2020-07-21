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

  const { responsive, fontSize } = props;

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
          bodyFont && headerFont
            ? twoFonts
              ? headerFont.themeName
              : bodyFont.themeName
            : null,
      },
      h2: {
        fontFamily:
          bodyFont && headerFont
            ? twoFonts
              ? headerFont.themeName
              : bodyFont.themeName
            : null,
      },
      h3: {
        fontFamily:
          bodyFont && headerFont
            ? twoFonts
              ? headerFont.themeName
              : bodyFont.themeName
            : null,
      },
      h4: {
        fontFamily:
          bodyFont && headerFont
            ? twoFonts
              ? headerFont.themeName
              : bodyFont.themeName
            : null,
      },
      h5: {
        fontFamily:
          bodyFont && headerFont
            ? twoFonts
              ? headerFont.themeName
              : bodyFont.themeName
            : null,
      },
      h6: {
        fontFamily:
          bodyFont && headerFont
            ? twoFonts
              ? headerFont.themeName
              : bodyFont.themeName
            : null,
      },
      subtitle1: {
        fontFamily: bodyFont ? bodyFont.themeName : null,
      },
      subtitle2: {
        fontFamily: bodyFont ? bodyFont.themeName : null,
      },
      body1: {
        fontFamily: bodyFont ? bodyFont.themeName : null,
      },
      body2: {
        fontFamily: bodyFont ? bodyFont.themeName : null,
      },
      button: {
        fontFamily: bodyFont ? bodyFont.themeName : null,
      },
      overline: {
        fontFamily: bodyFont ? bodyFont.themeName : null,
      },
      caption: {
        fontFamily: bodyFont ? bodyFont.themeName : null,
      },
      fontSize,
    },
    palette: {
      primary: { main: primaryColor },
      secondary: { main: secondaryColor },
    },
  });

  return (
    bodyFont &&
    headerFont && (
      <ThemeProvider theme={responsive ? responsiveFontSizes(theme) : theme}>
        {children}
      </ThemeProvider>
    )
  );
};

const mapStateToProps = (state) => ({
  twoFonts: state.settings.twoFonts,
  bodyFont: state.components.fonts.body.currentFont,
  headerFont: state.components.fonts.header.currentFont,
  primaryColor: state.components.palette.primary.hex,
  secondaryColor: state.components.palette.secondary.hex,
  responsive: state.settings.responsiveFontSizes,
  fontSize: state.settings.fontSize,
});

export default connect(mapStateToProps)(ThemeWrapper);

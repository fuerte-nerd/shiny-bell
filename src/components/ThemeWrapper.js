import React from "react";
import { connect } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const ThemeWrapper = (props) => {
  const { children } = props;

  const { twoFonts, bodyFont, headerFont } = props;

  const { primaryColor, secondaryColor } = props;

  return (
    bodyFont &&
    headerFont && (
      <ThemeProvider
        theme={createMuiTheme({
          typography: {
            h1: {
              fontFamily: twoFonts ? headerFont.themeName : bodyFont.themeName,
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
        })}
      >
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
});

export default connect(mapStateToProps)(ThemeWrapper);

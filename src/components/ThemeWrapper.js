import React from "react";
import { connect } from "react-redux";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";

const ThemeWrapper = (props) => {
  const { children } = props;

  const { current, twoFonts } = props;

  const { body, header, primary, secondary } = current;

  const { responsive, fontSize } = props;

  const theme = createMuiTheme({
    overrides: {
      MuiFormControlLabel: {
        label: { fontFamily: "Roboto" },
      },
      MuiSelect: { root: { fontFamily: "Roboto" } },
      MuiDialogContentText: {
        root: { fontFamily: "Roboto" },
      },
      MuiListItemText: {
        primary: { fontFamily: "Roboto", fontSize: 14 },
        secondary: { fontFamily: "Roboto", fontSize: 14 },
      },
    },
    typography: {
      h1: {
        fontFamily: current
          ? twoFonts
            ? `"${header.themeName}"`
            : `"${body.themeName}"`
          : null,
      },
      h2: {
        fontFamily:
          body && header
            ? twoFonts
              ? `"${header.themeName}"`
              : `"${body.themeName}"`
            : null,
      },
      h3: {
        fontFamily:
          body && header
            ? twoFonts
              ? `"${header.themeName}"`
              : `"${body.themeName}"`
            : null,
      },
      h4: {
        fontFamily:
          body && header
            ? twoFonts
              ? `"${header.themeName}"`
              : `"${body.themeName}"`
            : null,
      },
      h5: {
        fontFamily:
          body && header
            ? twoFonts
              ? `"${header.themeName}"`
              : `"${body.themeName}"`
            : null,
      },
      h6: {
        fontFamily:
          body && header
            ? twoFonts
              ? `"${header.themeName}"`
              : `"${body.themeName}"`
            : null,
      },
      subtitle1: {
        fontFamily: body ? `"${body.themeName}"` : null,
      },
      subtitle2: {
        fontFamily: body ? `"${body.themeName}"` : null,
      },
      body1: {
        fontFamily: body ? `"${body.themeName}"` : null,
      },
      body2: {
        fontFamily: body ? `"${body.themeName}"` : null,
      },
      button: {
        fontFamily: body ? `"${body.themeName}"` : null,
      },
      overline: {
        fontFamily: body ? `"${body.themeName}"` : null,
      },
      caption: {
        fontFamily: body ? `"${body.themeName}"` : null,
      },
      fontSize,
    },
    palette: {
      primary: { main: primary.hex },
      secondary: { main: secondary.hex },
    },
  });

  return (
    current && (
      <ThemeProvider theme={responsive ? responsiveFontSizes(theme) : theme}>
        {children}
      </ThemeProvider>
    )
  );
};

const mapStateToProps = (state) => ({
  current: state.appState.current,
  twoFonts: state.settings.twoFonts,
  responsive: state.settings.responsiveFontSizes,
  fontSize: state.settings.fontSize,
});

export default connect(mapStateToProps)(ThemeWrapper);

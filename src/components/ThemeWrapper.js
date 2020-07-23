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
          ? current.body && current.header
            ? twoFonts
              ? `"${current.header.themeName}"`
              : `"${current.body.themeName}"`
            : null
          : null,
      },
      h2: {
        fontFamily: current
          ? current.body && current.header
            ? twoFonts
              ? `"${current.header.themeName}"`
              : `"${current.body.themeName}"`
            : null
          : null,
      },
      h3: {
        fontFamily: current
          ? current.body && current.header
            ? twoFonts
              ? `"${current.header.themeName}"`
              : `"${current.body.themeName}"`
            : null
          : null,
      },
      h4: {
        fontFamily: current
          ? current.body && current.header
            ? twoFonts
              ? `"${current.header.themeName}"`
              : `"${current.body.themeName}"`
            : null
          : null,
      },
      h5: {
        fontFamily: current
          ? current.body && current.header
            ? twoFonts
              ? `"${current.header.themeName}"`
              : `"${current.body.themeName}"`
            : null
          : null,
      },
      h6: {
        fontFamily: current
          ? current.body && current.header
            ? twoFonts
              ? `"${current.header.themeName}"`
              : `"${current.body.themeName}"`
            : null
          : null,
      },
      subtitle1: {
        fontFamily: current
          ? current.body
            ? `"${current.body.themeName}"`
            : null
          : null,
      },
      subtitle2: {
        fontFamily: current
          ? current.body
            ? `"${current.body.themeName}"`
            : null
          : null,
      },
      body1: {
        fontFamily: current
          ? current.body
            ? `"${current.body.themeName}"`
            : null
          : null,
      },
      body2: {
        fontFamily: current
          ? current.body
            ? `"${current.body.themeName}"`
            : null
          : null,
      },
      button: {
        fontFamily: current
          ? current.body
            ? `"${current.body.themeName}"`
            : null
          : null,
      },
      overline: {
        fontFamily: current
          ? current.body
            ? `"${current.body.themeName}"`
            : null
          : null,
      },
      caption: {
        fontFamily: current
          ? current.body
            ? `"${current.body.themeName}"`
            : null
          : null,
      },
      fontSize,
    },
    palette: {
      primary: {
        main: current
          ? current.palette
            ? current.palette.primary.hex
            : "#000000"
          : "#000000",
      },
      secondary: {
        main: current
          ? current.palette
            ? current.palette.secondary.hex
            : "#FFFFFF"
          : "#FFFFFF",
      },
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

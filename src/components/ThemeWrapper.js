import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  CssBaseline,
} from "@material-ui/core";

const ThemeWrapper = (props) => {
  const { children } = props;

  const { current } = props;

  const [theme, setTheme] = useState(createMuiTheme());

  useEffect(() => {
    setTheme(
      createMuiTheme({
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
          MuiButton: {
            root: {
              textTransform: current ? current.buttonTextTransform : null,
            },
          },
        },
        typography: {
          h1: {
            fontFamily: current
              ? current.body && current.header
                ? current.twoFonts
                  ? `"${current.header.family}"`
                  : `"${current.body.family}"`
                : null
              : null,
          },
          h2: {
            fontFamily: current
              ? current.body && current.header
                ? current.twoFonts
                  ? `"${current.header.family}"`
                  : `"${current.body.family}"`
                : null
              : null,
          },
          h3: {
            fontFamily: current
              ? current.body && current.header
                ? current.twoFonts
                  ? `"${current.header.family}"`
                  : `"${current.body.family}"`
                : null
              : null,
          },
          h4: {
            fontFamily: current
              ? current.body && current.header
                ? current.twoFonts
                  ? `"${current.header.family}"`
                  : `"${current.body.family}"`
                : null
              : null,
          },
          h5: {
            fontFamily: current
              ? current.body && current.header
                ? current.twoFonts
                  ? `"${current.header.family}"`
                  : `"${current.body.family}"`
                : null
              : null,
          },
          h6: {
            fontFamily: current
              ? current.body && current.header
                ? current.twoFonts
                  ? `"${current.header.family}"`
                  : `"${current.body.family}"`
                : null
              : null,
          },
          subtitle1: {
            fontFamily: current
              ? current.body
                ? `"${current.body.family}"`
                : null
              : null,
          },
          subtitle2: {
            fontFamily: current
              ? current.body
                ? `"${current.body.family}"`
                : null
              : null,
          },
          body1: {
            fontFamily: current
              ? current.body
                ? `"${current.body.family}"`
                : null
              : null,
          },
          body2: {
            fontFamily: current
              ? current.body
                ? `"${current.body.family}"`
                : null
              : null,
          },
          button: {
            fontFamily: current
              ? current.body
                ? `"${current.body.family}"`
                : null
              : null,
          },
          overline: {
            fontFamily: current
              ? current.body
                ? `"${current.body.family}"`
                : null
              : null,
          },
          caption: {
            fontFamily: current
              ? current.body
                ? `"${current.body.family}"`
                : null
              : null,
          },
          fontSize: current ? current.fontSize : null,
        },
        palette: {
          type: current ? current.mode : "light",
          primary: {
            main: current ? current.primary : "#000000",
          },
          secondary: {
            main: current ? current.secondary : "#FFFFFF",
          },
        },
        spacing: current ? current.spacing : null,
        shape: {
          borderRadius: current ? current.rounding : null,
        },
      })
    );
  }, [current]);

  return (
    current && (
      <ThemeProvider
        theme={current.responsiveFontSizes ? responsiveFontSizes(theme) : theme}
      >
        <CssBaseline />
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

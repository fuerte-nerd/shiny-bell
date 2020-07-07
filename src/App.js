import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import axios from "axios";
import {
  Container,
  Toolbar,
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  Box,
  responsiveFontSizes,
} from "@material-ui/core";

import Menu from "./components/Menu";
import FontLoadDialog from "./components/FontLoadDialog";
import ThemeCode from "./components/ThemeCode";
import Settings from "./components/Settings";
import TypographySection from "./components/Typography";
import Buttons from "./components/Buttons";
import {
  setFontLoading,
  setFonts,
  setFont,
  setPrimary,
  setSecondary,
  setStaticFont,
  setHeaderFont,
} from "./state/actions";
import randomFont from "./functions/randomFont";
import randomColor from "./functions/randomColor";
import getSecondaryColor from "./functions/getSecondaryColor";
import FontFaceObserver from "fontfaceobserver";

function App(props) {
  const {
    dispatch,
    mode,
    font,
    headerFont,
    twoFonts,
    fonts,
    secondaryMode,
    primary,
    secondary,
    bgColor,
    staticFontLoaded,
    spacing,
    buttonTextTransform,
    rounding,
    fontSize,
  } = props;

  useEffect(() => {
    dispatch(setPrimary(randomColor()));
    axios
      .get(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_APIKEY}`
      )
      .then((response) => {
        const fonts = response.data.items.map((i) => {
          return {
            linkName: i.family.replace(" ", "+"),
            themeName: i.family,
            category: i.category,
          };
        });
        dispatch(setFonts(fonts));
      });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(setSecondary(getSecondaryColor(primary, secondaryMode)));
    //eslint-disable-next-line
  }, [primary, secondaryMode]);

  useEffect(() => {
    if (!staticFontLoaded) {
      const staticFont = new FontFaceObserver("Roboto");
      staticFont.load().then(
        () => {
          dispatch(setStaticFont(true));
        },
        () => {
          console.log("Static font did not load");
        }
      );
    }
    fonts && dispatch(setFont(randomFont()));
    fonts && dispatch(setHeaderFont(randomFont()));
    //eslint-disable-next-line
  }, [fonts]);

  useEffect(() => {
    if (fonts && typeof font.themeName !== "undefined") {
      const newFont = new FontFaceObserver(font.themeName);
      newFont.load().then(
        () => {
          dispatch(setFontLoading(false));
        },
        () => {
          dispatch(setFont(randomFont()));
        }
      );
    }
    //eslint-disable-next-line
  }, [font]);

  useEffect(() => {
    if (fonts && typeof headerFont.themeName !== "undefined") {
      const newFont = new FontFaceObserver(headerFont.themeName);
      newFont.load().then(
        () => {
          dispatch(setFontLoading(false));
        },
        () => {
          dispatch(setHeaderFont(randomFont()));
        }
      );
    }
    //eslint-disable-next-line
  }, [headerFont]);

  return (
    <ThemeProvider
      theme={responsiveFontSizes(
        createMuiTheme({
          overrides: {
            MuiButton: {
              root: { textTransform: buttonTextTransform },
            },
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
        })
      )}
    >
      <CssBaseline />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        {fonts && twoFonts ? (
          <link
            href={`https://fonts.googleapis.com/css2?family=${font.linkName}&family=${headerFont.linkName}&display=swap`}
            rel="stylesheet"
          />
        ) : (
          <link
            href={`https://fonts.googleapis.com/css2?family=${font.linkName}&display=swap`}
            rel="stylesheet"
          />
        )}
      </Helmet>
      <FontLoadDialog />
      <Box
        minHeight="100vh"
        maxWidth="100vw"
        bgcolor={bgColor ? "primary.light" : "none"}
        style={{ transition: "all .25s" }}
      >
        <Settings />
        <ThemeCode />
        <Menu />
        <Toolbar />
        <Container>
          <TypographySection />
          <Buttons />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  font: state.font,
  fonts: state.fonts,
  primary: state.primary,
  secondary: state.secondary,
  bgColor: state.bgColor,
  mode: state.mode,
  fontLoading: state.fontLoading,
  secondaryMode: state.secondaryMode,
  staticFontLoaded: state.staticFontLoaded,
  spacing: state.spacing,
  headerFont: state.headerFont,
  twoFonts: state.twoFonts,
  buttonTextTransform: state.buttonTextTransform,
  rounding: state.rounding,
  fontSize: state.fontSize,
});

export default connect(mapStateToProps)(App);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import axios from "axios";
import {
  Container,
  Dialog,
  Toolbar,
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  Box,
  Fab,
  Tooltip,
  responsiveFontSizes,
} from "@material-ui/core";

import { Refresh, Lock } from "@material-ui/icons";

import Menu from "./components/Menu";
import FontLoadDialog from "./components/FontLoadDialog";
import ThemeCode from "./components/ThemeCode";
import TypographySection from "./components/Typography";
import Buttons from "./components/Buttons";
import Sidebar from "./components/Sidebar";
import ParagraphPreview from "./components/ParagraphPreview";

import {
  setFontLoading,
  setFonts,
  setFont,
  setPrimary,
  setSecondary,
  setStaticFont,
  setHeaderFont,
  setColorPicker,
  setFontPicker,
  setRandomFontSelect,
} from "./state/actions";
import randomFont from "./functions/randomFont";
import randomColor from "./functions/randomColor";
import getSecondaryColor from "./functions/getSecondaryColor";
import FontFaceObserver from "fontfaceobserver";
import { SketchPicker } from "react-color";
import FontPicker from "./components/FontPicker";

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
    staticFontLoaded,
    spacing,
    buttonTextTransform,
    rounding,
    fontSize,
    colorPicker,
    fontPicker,
    randomFontSelect,
    responsiveText,
    backgrounds,
    locked,
  } = props;

  useEffect(() => {
    dispatch(setPrimary(randomColor()));
    axios
      .get(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_APIKEY}`
      )
      .then((response) => {
        const fonts = response.data.items.map((i, ind) => {
          return {
            id: ind,
            linkName: i.family.replace(/ /g, "+"),
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
        () => {}
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
          if (randomFontSelect) {
            dispatch(setFont(randomFont()));
          } else {
            dispatch(setFont(fontPicker.revertFont));
            dispatch(setFontPicker({ ...fontPicker, notFound: true }));
          }
        }
      );
    }
    //eslint-disable-next-line
  }, [font]);

  useEffect(() => {
    if (fonts && typeof headerFont.themeName !== "undefined" && twoFonts) {
      const newFont = new FontFaceObserver(headerFont.themeName);
      newFont.load().then(
        () => {
          dispatch(setFontLoading(false));
        },
        () => {
          if (randomFontSelect) {
            dispatch(setHeaderFont(randomFont()));
          } else {
            dispatch(setHeaderFont(fontPicker.revertFont));
            dispatch(setFontPicker({ ...fontPicker, notFound: true }));
          }
        }
      );
    }
    //eslint-disable-next-line
  }, [headerFont]);

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
      <Helmet>
        {fonts && (
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
        )}
        {fonts && twoFonts ? (
          <link
            href={`https://fonts.googleapis.com/css2?family=${font.linkName}&family=${headerFont.linkName}&display=swap`}
            rel="stylesheet"
          />
        ) : (
          fonts && (
            <link
              href={`https://fonts.googleapis.com/css2?family=${font.linkName}&display=swap`}
              rel="stylesheet"
            />
          )
        )}
      </Helmet>
      <FontPicker />
      <Dialog
        open={colorPicker}
        onClose={() => dispatch(setColorPicker(false))}
        PaperProps={{ style: { backgroundColor: "transparent" } }}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
      >
        <SketchPicker
          color={primary}
          onChange={(c) => dispatch(setPrimary(c.hex))}
        />
      </Dialog>
      <Sidebar />
      <FontLoadDialog />
      <Box
        minHeight="100vh"
        maxWidth="100vw"
        bgcolor={backgrounds.page}
        style={{ transition: "all .25s" }}
        py={4}
      >
        <ThemeCode />
        <Menu />
        <Toolbar />
        <Container>
          <ParagraphPreview />
          <TypographySection />
          <Buttons />
        </Container>
      </Box>
      <Tooltip title="Refresh">
        <Fab
          tabindex="1"
          style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem" }}
          color="secondary"
          disabled={
            twoFonts
              ? locked.bodyFont && locked.headerFont && locked.palette
                ? true
                : false
              : locked.bodyFont && locked.palette
              ? true
              : false
          }
          onClick={() => {
            !locked.bodyFont &&
              dispatch(setRandomFontSelect(true)) &&
              dispatch(setFontLoading(true));
            twoFonts &&
              !locked.headerFont &&
              dispatch(setRandomFontSelect(true)) &&
              dispatch(setFontLoading(true));
            !locked.palette && dispatch(setPrimary(randomColor()));
          }}
        >
          {twoFonts ? (
            locked.bodyFont && locked.headerFont && locked.palette ? (
              <Lock />
            ) : (
              <Refresh />
            )
          ) : locked.bodyFont && locked.palette ? (
            <Lock />
          ) : (
            <Refresh />
          )}
        </Fab>
      </Tooltip>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  font: state.font,
  fonts: state.fonts,
  primary: state.primary,
  secondary: state.secondary,
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
  colorPicker: state.colorPicker,
  fontPicker: state.fontPicker,
  randomFontSelect: state.randomFontSelect,
  responsiveText: state.responsiveText,
  backgrounds: state.backgrounds,
  locked: state.locked,
});

export default connect(mapStateToProps)(App);

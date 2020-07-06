import React, { useEffect, useState } from "react";
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
  Dialog,
} from "@material-ui/core";

import WebfontLoader from "@dr-kobros/react-webfont-loader";

import Menu from "./components/Menu";
import ThemeCode from "./components/ThemeCode";
import Settings from "./components/Settings";
import TypographySection from "./components/Typography";
import Buttons from "./components/Buttons";
import { setFonts, setFont, setPrimary, setSecondary } from "./state/actions";
import randomFont from "./functions/randomFont";
import randomColor from "./functions/randomColor";
import getSecondaryColor from "./functions/getSecondaryColor";

function App(props) {
  const { dispatch, mode, font, fonts, primary, secondary, bgColor } = props;

  useEffect(() => {
    props.dispatch(setPrimary(randomColor()));
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
        props.dispatch(setFonts(fonts));
      });
  }, []);

  useEffect(() => {
    dispatch(setSecondary(getSecondaryColor(primary)));
  }, [primary]);

  useEffect(() => {
    fonts && props.dispatch(setFont(randomFont()));
    //
  }, [fonts]);

  const [fontLoading, setFontLoading] = useState(true);

  return (
    <WebfontLoader
      config={{
        google: {
          api: "https://fonts.googleapis.com/css2",
          families: [font.themeName],
        },
      }}
      onStatus={(status) => {
        console.log(status);
        switch (status) {
          case "loading":
            return setFontLoading(true);
          case "active":
            return setFontLoading(false);
          case "inactive":
            return setFont(randomFont());
          default:
            return;
        }
      }}
    >
      <ThemeProvider
        theme={responsiveFontSizes(
          createMuiTheme({
            palette: {
              type: mode,
              primary: {
                main: primary,
              },
              secondary: {
                main: secondary,
              },
            },
            typography: { fontFamily: font.themeName },
          })
        )}
      >
        <CssBaseline />
        <Helmet>
          <link
            href={`https://fonts.googleapis.com/css2?family=${font.linkName}&display=swap`}
            rel="stylesheet"
          />
        </Helmet>
        <Dialog fullScreen open={fontLoading}></Dialog>
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
    </WebfontLoader>
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
});

export default connect(mapStateToProps)(App);

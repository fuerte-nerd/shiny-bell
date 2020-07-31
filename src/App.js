import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import FontFaceObserver from "fontfaceobserver";
import { Box, Container, Toolbar } from "@material-ui/core";

import Theme from "./components/Theme";

import Head from "./components/Head";
import GoogleFontValidator from "./components/GoogleFontValidator";
import ThemeWrapper from "./components/ThemeWrapper";
import LoadScreen from "./components/LoadScreen";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import RefreshButton from "./components/RefreshButton";
import Preview from "./components/Preview";

import FontSelector from "./components/dialogs/FontSelector";
import CategorySelector from "./components/dialogs/CategorySelector";
import ColorPicker from "./components/dialogs/ColorPicker";
import ThemeCode from "./components/dialogs/ThemeCode";
import Save from "./components/dialogs/Save";
import Load from "./components/dialogs/Load";

import { setFonts, setLibraryLoaded } from "./state/library/actions";
import { setLoadingScreen } from "./state/display/actions";
import { setDefFontLoaded } from "./state/components/actions";

function App({ dispatch, current }) {
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_APIKEY}`
      )
      .then((response) => {
        const fonts = response.data.items.map((i, ind) => {
          return {
            id: ind,
            family: i.family,
            category: i.category,
          };
        });
        dispatch(setFonts(fonts));
        dispatch(setLibraryLoaded(true));
        const theme = new Theme();
        theme
          .validateFonts()
          .then(() => {
            theme.commit().then(() => dispatch(setLoadingScreen(false)));
          })
          .catch((err) => console.log(err));
      });
    const defFont = new FontFaceObserver("Roboto");
    defFont.load().then(() => {
      dispatch(setDefFontLoaded(true));
    });
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <GoogleFontValidator />
      {current && (
        <>
          <Head />
          <ThemeWrapper>
            <LoadScreen />
            <FontSelector />
            <CategorySelector />
            <ColorPicker />
            <ThemeCode />
            <Load />
            <Save />
            <Sidebar />
            <Menu />
            <RefreshButton />
            <Box bgcolor={current.backgrounds.page}>
              <Preview />
            </Box>
          </ThemeWrapper>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  current: state.appState.current,
});

export default connect(mapStateToProps)(App);

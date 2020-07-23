import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Container, Toolbar, Box } from "@material-ui/core";
import FontLoader from "./functions/FontHelper";
import Palette from "./functions/Palette";

import GoogleFontValidator from "./components/GoogleFontValidator";
import LoadScreen from "./components/LoadScreen";
import ThemeWrapper from "./components/ThemeWrapper";
import Layout from "./components/Layout";
import Head from "./components/Head";
import RefreshButton from "./components/RefreshButton";
import Dialogs from "./components/Dialogs";
import Menu from "./components/Menu";
import Buttons from "./components/Buttons";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";

import { setFonts, setLibraryLoaded } from "./state/library/actions";
import {
  setDefFontLoading,
  setDefFontLoaded,
  setComponentsLoading,
} from "./state/components/actions";

import {
  setCurrentAppState,
  setPastAppStates,
  setEnabled,
} from "./state/appState/actions";
/* 
import {
  setFontLoading,
  setFonts,
  setFont,
  setPrimary,
  setSecondary,
  setStaticFont,
  setHeaderFont,
  setFontPicker,
  setChangeHistory,
  setUndo,
  setFontToValidate,
} from "./state/actions";
*/

import FontFaceObserver from "fontfaceobserver";
import FontSelector from "./components/dialogs/FontSelector";
import AppState from "./functions/AppState";

function App({ dispatch }) {
  useEffect(() => {
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
        dispatch(setLibraryLoaded(true));
      });
  });

  return (
    <>
      <Head />
      <GoogleFontValidator />
      <ThemeWrapper>
        <LoadScreen />
        <FontSelector />
        <Sidebar />
        <Menu />
        <RefreshButton />
        <Toolbar />
        <Container>
          <Preview />
        </Container>
      </ThemeWrapper>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(App);

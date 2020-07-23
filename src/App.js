import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Container, Toolbar, Box } from "@material-ui/core";

import { setFonts, setLibraryLoaded } from "./state/library/actions";
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

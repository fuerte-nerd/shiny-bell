import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Container, Toolbar, Box } from "@material-ui/core";

import Layout from "./components/Layout";
import Head from "./components/Head";
import RefreshButton from "./components/RefreshButton";
import Dialogs from "./components/Dialogs";
import Menu from "./components/Menu";
import FontLoadScreen from "./components/FontLoadScreen";
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
  setFontPicker,
  setChangeHistory,
  setUndo,
} from "./state/actions";
import randomFont from "./functions/randomFont";
import randomColor from "./functions/randomColor";
import getSecondaryColor from "./functions/getSecondaryColor";
import FontFaceObserver from "fontfaceobserver";
import isFontValid from "./functions/isFontValid";

function App(props) {
  const {
    dispatch,
    font,
    headerFont,
    twoFonts,
    fonts,
    secondaryMode,
    primary,
    staticFontLoaded,
    fontPicker,
    randomFontSelect,
    backgrounds,
    changeHistory,
    undo,
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
    if (fonts && font) {
      if (isFontValid(font.themeName)) {
        console.log("should be second");
        dispatch(setFontLoading(false));
      } else {
        const nextBit = async () => {
          if (randomFontSelect) {
            await dispatch(
              setChangeHistory({
                ...changeHistory,
                changes: changeHistory.changes.slice(
                  0,
                  changeHistory.currentPosition + 1
                ),
                currentPosition: changeHistory.changes.length - 1,
              })
            );
            dispatch(setFont(randomFont()));
          } else {
            await dispatch(
              setChangeHistory({
                ...changeHistory,
                changes: changeHistory.changes.slice(
                  0,
                  changeHistory.currentPosition + 1
                ),
                currentPosition: changeHistory.changes.length - 1,
              })
            );
            await dispatch(setUndo(true));
            dispatch(setFont(fontPicker.revertFont));
            await dispatch(setUndo(false));
            dispatch(setFontPicker({ ...fontPicker, notFound: true }));
          }
        };
        nextBit();
      }
      // const newFont = new FontFaceObserver(font.themeName);
      // newFont.load().then(
      //  () => {
      //    dispatch(setFontLoading(false));
      //  },
    }
    //eslint-disable-next-line
  }, [font]);

  useEffect(() => {
    if (fonts && headerFont && twoFonts) {
      const newFont = new FontFaceObserver(headerFont.themeName);
      newFont.load().then(
        () => {
          dispatch(setFontLoading(false));
        },
        async () => {
          if (randomFontSelect) {
            await dispatch(
              setChangeHistory({
                ...changeHistory,
                changes: changeHistory.changes.slice(
                  0,
                  changeHistory.currentPosition + 1
                ),
                currentPosition: changeHistory.changes.length - 1,
              })
            );
            dispatch(setHeaderFont(randomFont()));
          } else {
            await dispatch(
              setChangeHistory({
                ...changeHistory,
                changes: changeHistory.changes.slice(
                  0,
                  changeHistory.currentPosition + 1
                ),
                currentPosition: changeHistory.changes.length - 1,
              })
            );
            await dispatch(setUndo(true));
            dispatch(setHeaderFont(fontPicker.revertFont));
            await dispatch(setUndo(false));
            dispatch(setFontPicker({ ...fontPicker, notFound: true }));
          }
        }
      );
    }
    //eslint-disable-next-line
  }, [headerFont]);

  const [timerId, setTimerId] = useState(0);

  useEffect(() => {
    if (!undo && fonts) {
      if (timerId) {
        clearTimeout(timerId);
      }
      if (changeHistory.currentPosition === changeHistory.changes.length - 1) {
        return setTimerId(
          setTimeout(() => {
            dispatch(
              setChangeHistory({
                ...changeHistory,
                currentPosition: changeHistory.changes.length,
                changes: [
                  ...changeHistory.changes,
                  { font, headerFont, primary },
                ],
              })
            );
          }, 500)
        );
      } else {
        return setTimerId(
          setTimeout(() => {
            const newArray = changeHistory.changes.slice(
              0,
              changeHistory.currentPosition + 1
            );
            dispatch(
              setChangeHistory({
                ...changeHistory,
                currentPosition: newArray.length,
                changes: [...newArray, { font, headerFont, primary }],
              })
            );
          }, 500)
        );
      }
    }
    //eslint-disable-next-line
  }, [font, headerFont, primary]);

  return (
    <Layout>
      <Head />
      <FontLoadScreen />
      <Dialogs />
      <Sidebar />
      <Box
        minHeight="100vh"
        maxWidth="100vw"
        bgcolor={backgrounds.page}
        style={{ transition: "all .25s" }}
        py={4}
      >
        <RefreshButton />
        <Menu />
        <Toolbar />
        <Container>
          <ParagraphPreview />
          <TypographySection />
          <Buttons />
        </Container>
      </Box>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  font: state.font,
  fonts: state.fonts,
  primary: state.primary,
  secondary: state.secondary,
  fontLoading: state.fontLoading,
  secondaryMode: state.secondaryMode,
  staticFontLoaded: state.staticFontLoaded,
  headerFont: state.headerFont,
  twoFonts: state.twoFonts,
  colorPicker: state.colorPicker,
  fontPicker: state.fontPicker,
  randomFontSelect: state.randomFontSelect,
  backgrounds: state.backgrounds,
  changeHistory: state.changeHistory,
  undo: state.undo,
});

export default connect(mapStateToProps)(App);

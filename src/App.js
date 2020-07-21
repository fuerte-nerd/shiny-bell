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
import TypographySection from "./components/Typography";
import Buttons from "./components/Buttons";
import Sidebar from "./components/Sidebar";
import ParagraphPreview from "./components/ParagraphPreview";

import { setFonts, setLibraryLoaded } from "./state/library/actions";
import {
  setDefFontLoading,
  setDefFontLoaded,
  setComponentsLoading,
} from "./state/components/actions";

import { setCurrentAppState, setPastAppStates } from "./state/appState/actions";
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

function App(props) {
  const {
    state,
    pageBackground,
    setFonts,
    fontLibrary,
    setDefFontLoading,
    setDefFontLoaded,
    setCurrentAppState,
    setPastAppStates,
    defFontLoaded,
    componentsLoading,
    bodyFont,
    headerFont,
    primary,
    secondary,
    currentAppState,
    pastAppStates,
    setComponentsLoading,
    setLibraryLoaded,
    fontsLoading,
    paletteLoading,
  } = props;

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
        setFonts(fonts);
        setLibraryLoaded(true);
      });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const validateDefFont = () => {
      const defFont = new FontFaceObserver("Roboto");
      defFont.load().then(
        () => {
          setDefFontLoading(false);
          setDefFontLoaded(true);
        },
        () => {
          //handle error})
          console.log("Houston we have a problem!");
          validateDefFont();
        }
      );
    };

    if (fontLibrary) {
      // Load default font
      setDefFontLoading(true);
      validateDefFont();
    }
    //eslint-disable-next-line
  }, [fontLibrary]);

  useEffect(() => {
    if (defFontLoaded) {
      setComponentsLoading(true);
      const palette = new Palette();
      palette.getColorNames().then(() => {
        palette.deploy();
      });

      const newBodyFont = new FontLoader("body");
      newBodyFont
        .validate()
        .then(() => {
          newBodyFont.deploy();
        })
        .catch(() => {
          console.log("There was an error");
        });
      const newHeaderFont = new FontLoader("header");
      newHeaderFont
        .validate()
        .then(() => {
          newHeaderFont.deploy();
        })
        .catch(() => {
          console.log("There was an error");
        });
    }
  }, [defFontLoaded]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (!componentsLoading) {
      if (currentAppState) {
        setPastAppStates([...pastAppStates, currentAppState]);
      }
      setCurrentAppState({
        primary,
        secondary,
        bodyFont,
        headerFont,
      });
    }
  }, [componentsLoading]);

  useEffect(() => {
    if (!fontsLoading && !paletteLoading) {
      setComponentsLoading(false);
    }
  }, [fontsLoading, paletteLoading]);

  useEffect(() => {
    //console.log(state);
  }, [state]);
  /*

  useEffect(() => {
    dispatch(setSecondary(getSecondaryColor(primary, secondaryMode)));
    //eslint-disable-next-line
  }, [primary, secondaryMode]);

  useEffect(() => {
    if (fonts && font) {
      // loadFont(font, "body");
      const bFont = new FontFaceObserver(font.themeName);
      bFont.load().then(
        () => {
          dispatch(
            setFontToValidate({
              ...fontValidation,
              fonts: fontValidation.fonts.filter((i) => {
                return i.font.themeName === font.themeName ? null : i;
              }),
            })
          );
        },
        () => {}
      );
    }
    //eslint-disable-next-line
  }, [font]);

  useEffect(() => {
    if (fonts && headerFont) {
      const hFont = new FontFaceObserver(headerFont.themeName);
      hFont.load().then(
        () => {
          dispatch(
            setFontToValidate({
              ...fontValidation,
              fonts: fontValidation.fonts.filter((i) => {
                return i.font.themeName === headerFont.themeName ? null : i;
              }),
            })
          );
        },
        () => {}
      );
      // loadFont(headerFont, "header");
    }
    //eslint-disable-next-line
  }, [headerFont]);

  useEffect(() => {
    if (fontValidation.fonts) {
      console.log(fontValidation.fonts.length);
      if (fontValidation.fonts.length === 0) {
        dispatch(setFontLoading(false));
      }
    }
  }, [fontValidation]);

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
        bgcolor={pageBackground}
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
*/

  return (
    <>
      <Head />
      <LoadScreen />
      <GoogleFontValidator />
      {!componentsLoading && (
        <ThemeWrapper>
          <Menu />
          <Toolbar />
          <Container>
            <ParagraphPreview />
          </Container>
        </ThemeWrapper>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  pageBackground: state.settings.backgrounds.page,
  fontLibrary: state.library.fonts,
  defFontLoaded: state.components.fonts.default.loaded,
  componentsLoading: state.components.loading,
  primary: state.components.palette.primary,
  secondary: state.components.palette.secondary,
  bodyFont: state.components.fonts.body.currentFont,
  headerFont: state.components.fonts.header.currentFont,
  currentAppState: state.appState.current,
  pastAppState: state.appState.past,
  fontsLoading: state.components.fonts.loading,
  paletteLoading: state.components.palette.isLoading,
  state,
});

export default connect(mapStateToProps, {
  setFonts,
  setDefFontLoading,
  setDefFontLoaded,
  setCurrentAppState,
  setPastAppStates,
  setComponentsLoading,
  setLibraryLoaded,
})(App);

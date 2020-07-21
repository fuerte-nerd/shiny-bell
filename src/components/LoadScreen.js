import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setLoadingScreen } from "../state/display/actions";
import { Dialog, Box, CircularProgress } from "@material-ui/core";
import AppTypography from "./AppTypography";
import { setLoadScreenFeedback } from "../state/feedback/actions";

const FontLoadScreen = ({
  dispatch,
  componentsLoading,
  loadingScreen,
  loadScreenFeedback,
  bodyFontIsLoading,
  headerFontIsLoading,
  twoFonts,
  paletteIsLoading,
}) => {
  useEffect(() => {
    dispatch(setLoadingScreen(componentsLoading));
    if (!componentsLoading) {
      dispatch(setLoadScreenFeedback([]));
    }
    //eslint-disable-next-line
  }, [componentsLoading]);

  useEffect(() => {
    if (bodyFontIsLoading !== null) {
      const label = twoFonts ? "body font" : "font";
      bodyFontIsLoading
        ? dispatch(
            setLoadScreenFeedback([
              ...loadScreenFeedback,
              `Loading ${label}...`,
            ])
          )
        : dispatch(
            setLoadScreenFeedback([
              ...loadScreenFeedback,
              `${label.charAt(0).toUpperCase() + label.substr(1)} loaded.`,
            ])
          );
    }
    //eslint-disable-next-line
  }, [bodyFontIsLoading]);

  useEffect(() => {
    if (twoFonts) {
      headerFontIsLoading
        ? dispatch(
            setLoadScreenFeedback([
              ...loadScreenFeedback,
              `Loading header font...`,
            ])
          )
        : dispatch(
            setLoadScreenFeedback([
              ...loadScreenFeedback,
              `Header font loaded.`,
            ])
          );
    }
    //eslint-disable-next-line
  }, [headerFontIsLoading]);

  useEffect(() => {
    if (paletteIsLoading !== null) {
      !paletteIsLoading &&
        dispatch(
          setLoadScreenFeedback([
            ...loadScreenFeedback,
            "Generated new palette.",
          ])
        );
    }
    //eslint-disable-next-line
  }, [paletteIsLoading]);

  return (
    <Dialog fullScreen open={true} transitionDuration={{ enter: 0, exit: 50 }}>
      <Box
        height="100vh"
        width="100vw"
        position="fixed"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress
          size={250}
          thickness={12}
          color="primary"
          style={{ opacity: 0.5 }}
        />
      </Box>
      <Box
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        zIndex={1}
      >
        <Box mt="15px">
          {loadScreenFeedback.map((message, ind) => (
            <AppTypography key={ind}>{message}</AppTypography>
          ))}
        </Box>
      </Box>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  componentsLoading: state.components.loading,
  loadingScreen: state.display.loadingScreen,
  loadScreenFeedback: state.feedback.loadScreenFeedback,
  bodyFontIsLoading: state.components.fonts.body.isLoading,
  headerFontIsLoading: state.components.fonts.header.isLoading,
  twoFonts: state.settings.twoFonts,
  paletteIsLoading: state.components.palette.isLoading,
});

export default connect(mapStateToProps)(FontLoadScreen);

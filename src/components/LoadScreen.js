import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setLoadingScreen } from "../state/display/actions";
import { Dialog, Box, CircularProgress } from "@material-ui/core";
import AppTypography from "./AppTypography";
import { setLoadScreenMessage } from "../state/feedback/actions";

const FontLoadScreen = ({
  dispatch,
  componentsLoading,
  loadingScreen,
  loadScreenMsg,
  bodyFontIsLoading,
  headerFontIsLoading,
  twoFonts,
}) => {
  useEffect(() => {
    dispatch(setLoadingScreen(componentsLoading));
    //eslint-disable-next-line
  }, [componentsLoading]);

  useEffect(() => {
    const label = twoFonts ? "body font" : "font";
    bodyFontIsLoading
      ? dispatch(
          setLoadScreenMessage({ msg: `Loading ${label}`, severity: "info" })
        )
      : dispatch(setLoadScreenMessage({ msg: "", severity: "" }));
    //eslint-disable-next-line
  }, [bodyFontIsLoading]);

  return (
    <Dialog
      fullScreen
      open={loadingScreen}
      transitionDuration={{ enter: 0, exit: 50 }}
    >
      <Box
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <CircularProgress size={80} color="primary" />
        <Box mt="15px">
          <AppTypography>{loadScreenMsg.msg}</AppTypography>
        </Box>
      </Box>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  componentsLoading: state.components.loading,
  loadingScreen: state.display.loadingScreen,
  loadScreenMsg: state.feedback.loadScreen,
  bodyFontIsLoading: state.components.fonts.body.isLoading,
  headerFontIsLoading: state.components.fonts.header.isLoading,
  twoFonts: state.settings.twoFonts,
});

export default connect(mapStateToProps)(FontLoadScreen);

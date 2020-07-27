import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setLoadingScreen } from "../state/display/actions";
import { Dialog, Box, CircularProgress } from "@material-ui/core";
import AppTypography from "./AppTypography";
import { setLoadScreenFeedback } from "../state/feedback/actions";

const FontLoadScreen = ({ loadingScreen }) => {
  return (
    <Dialog
      fullScreen
      open={loadingScreen}
      transitionDuration={{ enter: 0, exit: 250 }}
    >
      <Box
        height="100vh"
        width="100vw"
        position="fixed"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress size={250} color="primary" style={{ opacity: 0.5 }} />
      </Box>
      <Box
        height="100%"
        width="100%"
        display="flex"
        align="center"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        zIndex={1}
      >
        <Box mt="15px">
          <AppTypography>Loading...</AppTypography>
        </Box>
      </Box>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  componentsLoading: state.components.loading,
  defFontLoaded: state.components.fonts.default.loaded,
  loadingScreen: state.display.loadingScreen,
});

export default connect(mapStateToProps)(FontLoadScreen);

import React from "react";
import { connect } from "react-redux";
import { Dialog, Box, CircularProgress } from "@material-ui/core";
import AppTypography from "./AppTypography";

const FontLoadScreen = ({ loadingScreen, defFontLoaded }) => {
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
          {defFontLoaded && <AppTypography>Loading...</AppTypography>}
        </Box>
      </Box>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  defFontLoaded: state.components.fonts.default.loaded,
  loadingScreen: state.display.loadingScreen,
});

export default connect(mapStateToProps)(FontLoadScreen);

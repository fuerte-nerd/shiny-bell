import React from "react";
import { connect } from "react-redux";
import { setFont } from "../state/actions";
import { Dialog, Box, Typography, CircularProgress } from "@material-ui/core";
import AppTypography from "./AppTypography";
import randomFont from "../functions/randomFont";

const FontLoadDialog = ({ dispatch, fonts, fontLoading, staticFontLoaded }) => {
  return (
    <Dialog
      fullScreen
      open={fontLoading}
      onEntered={() => fonts && dispatch(setFont(randomFont()))}
      transitionDuration={{ enter: 0, exit: 20 }}
    >
      <Box
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        <CircularProgress size={50} color="primary" />
        {staticFontLoaded && <AppTypography>Loading new font...</AppTypography>}
      </Box>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  fontLoading: state.fontLoading,
  fonts: state.fonts,
  staticFontLoaded: state.staticFontLoaded,
});

export default connect(mapStateToProps)(FontLoadDialog);

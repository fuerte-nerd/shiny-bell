import React from "react";
import { connect } from "react-redux";
import { setFont } from "../state/actions";
import { Dialog, Box, Typography, CircularProgress } from "@material-ui/core";
import randomFont from "../functions/randomFont";

const FontLoadDialog = ({ dispatch, fonts, fontLoading }) => {
  return (
    <Dialog
      fullScreen
      open={fontLoading}
      onEntered={() => fonts && dispatch(setFont(randomFont()))}
    >
      <Box
        height={1}
        width={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress size="large" color="primary" />
      </Box>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  fontLoading: state.fontLoading,
  fonts: state.fonts,
});

export default connect(mapStateToProps)(FontLoadDialog);

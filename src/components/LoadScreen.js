import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setLoadingScreen } from "../state/viewables";
import { Dialog, Box, CircularProgress } from "@material-ui/core";
import AppTypography from "./AppTypography";

const FontLoadScreen = ({ dispatch, componentsLoading, loadingScreen }) => {
  useEffect(() => {
    dispatch(setLoadingScreen(componentsLoading));
    //eslint-disable-next-line
  }, [componentsLoading]);

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
          <AppTypography></AppTypography>
        </Box>
      </Box>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  componentsLoading: state.components.loading,
  loadingScreen: state.viewables.loadingScreen,
});

export default connect(mapStateToProps)(FontLoadScreen);
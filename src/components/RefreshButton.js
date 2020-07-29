import React from "react";
import { connect } from "react-redux";
import { Tooltip, Fab } from "@material-ui/core";
import { Refresh, Lock } from "@material-ui/icons";

import Theme from "./Theme";

import { setLoadingScreen } from "../state/display/actions";
import {
  setPastAppStates,
  setFutureAppStates,
} from "../state/appState/actions";

const RefreshButton = ({ dispatch, twoFonts, locked, past, current }) => {
  const handleClick = () => {
    dispatch(setLoadingScreen(true));

    const theme = new Theme();
    dispatch(setPastAppStates([...past, current]));
    theme.validateFonts().then(() => {
      theme.commit().then(() => dispatch(setLoadingScreen(false)));
    });
    dispatch(setFutureAppStates([]));
  };

  return (
    <Tooltip title="Refresh">
      <Fab
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 5,
        }}
        color="secondary"
        disabled={
          twoFonts
            ? locked.body && locked.header && locked.palette
              ? true
              : false
            : locked.body && locked.palette
            ? true
            : false
        }
        onClick={handleClick}
      >
        {twoFonts ? (
          locked.body && locked.header && locked.palette ? (
            <Lock />
          ) : (
            <Refresh />
          )
        ) : locked.body && locked.palette ? (
          <Lock />
        ) : (
          <Refresh />
        )}
      </Fab>
    </Tooltip>
  );
};

const mapStateToProps = (state) => ({
  locked: {
    body: state.components.fonts.body.locked,
    header: state.components.fonts.header.locked,
    palette: state.components.palette.locked,
  },
  twoFonts: state.appState.current.twoFonts,
  past: state.appState.past,
  current: state.appState.current,
});

export default connect(mapStateToProps)(RefreshButton);

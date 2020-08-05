import React from "react";
import { connect } from "react-redux";
import { Tooltip, Fab } from "@material-ui/core";
import { Refresh, Lock } from "@material-ui/icons";

import Theme from "./Theme";

import { setLoadingScreen } from "../state/display/actions";

const RefreshButton = ({ dispatch, twoFonts, locked }) => {
  const handleClick = () => {
    dispatch(setLoadingScreen(true));

    const theme = new Theme();
    theme.getImage().then(() => {
      theme.validateFonts().then(() => {
        theme.commit(true).then(() => dispatch(setLoadingScreen(false)));
      });
    });
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
            ? locked.body &&
              locked.header &&
              locked.palette &&
              locked.siteTitle &&
              locked.heroImage
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
    siteTitle: state.components.siteTitle.locked,
    heroImage: state.components.heroImage.locked,
  },
  twoFonts: state.appState.current.twoFonts,
});

export default connect(mapStateToProps)(RefreshButton);

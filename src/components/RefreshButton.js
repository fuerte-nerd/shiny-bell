import React from "react";
import { connect } from "react-redux";
import { Tooltip, Fab } from "@material-ui/core";
import { Refresh, Lock } from "@material-ui/icons";

import FontLoader from "../functions/FontHelper";
import Palette from "../functions/Palette";

const RefreshButton = ({ dispatch, twoFonts, locked }) => {
  const handleClick = () => {
    if (!locked.body) {
      const newBodyFont = new FontLoader("body");
      newBodyFont.validate().then(newBodyFont.deploy);
    }

    if (twoFonts && !locked.header) {
      const newHeaderFont = new FontLoader("header");
      newHeaderFont.validate().then(newHeaderFont.deploy);
    }

    if (!locked.palette) {
      const newPalette = new Palette();
      newPalette.getColorNames().then(newPalette.deploy);
    }
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
  twoFonts: state.settings.twoFonts,
});

export default connect(mapStateToProps)(RefreshButton);

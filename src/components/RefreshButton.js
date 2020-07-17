import React from "react";
import { connect } from "react-redux";
import {
  setRandomFontSelect,
  setFontLoading,
  setPrimary,
} from "../state/actions";
import { Tooltip, Fab } from "@material-ui/core";
import { Refresh, Lock } from "@material-ui/icons";
import getRandomColor from "../functions/getRandomColor";

const RefreshButton = ({ dispatch, twoFonts, locked }) => {
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
            ? locked.bodyFont && locked.headerFont && locked.palette
              ? true
              : false
            : locked.bodyFont && locked.palette
            ? true
            : false
        }
        onClick={() => {
          !locked.bodyFont &&
            dispatch(setRandomFontSelect(true)) &&
            dispatch(setFontLoading(true));
          twoFonts &&
            !locked.headerFont &&
            dispatch(setRandomFontSelect(true)) &&
            dispatch(setFontLoading(true));
          !locked.palette && dispatch(setPrimary(getRandomColor()));
        }}
      >
        {twoFonts ? (
          locked.bodyFont && locked.headerFont && locked.palette ? (
            <Lock />
          ) : (
            <Refresh />
          )
        ) : locked.bodyFont && locked.palette ? (
          <Lock />
        ) : (
          <Refresh />
        )}
      </Fab>
    </Tooltip>
  );
};

const mapStateToProps = (state) => ({
  locked: state.locked,
  twoFonts: state.twoFonts,
});

export default connect(mapStateToProps)(RefreshButton);

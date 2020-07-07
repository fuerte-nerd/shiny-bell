import React from "react";
import { connect } from "react-redux";
import {
  setMode,
  setPrimary,
  setFont,
  setDialogs,
  setFontLoading,
} from "../state/actions";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import {
  SettingsBrightness,
  Palette,
  TextFields,
  Settings,
  Code,
} from "@material-ui/icons";
import randomColor from "../functions/randomColor";
import randomFont from "../functions/randomFont";

const Menu = ({ dispatch, mode, dialogs, locked }) => {
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "settings":
        return dispatch(setDialogs({ ...dialogs, settings: true }));
      case "mode":
        return mode === "dark"
          ? dispatch(setMode("light"))
          : dispatch(setMode("dark"));
      case "palette":
        return !locked.palette && dispatch(setPrimary(randomColor()));
      case "font":
        if (!locked.bodyFont || !locked.headerFont) {
          return dispatch(setFontLoading(true));
        }
        return;
      case "code":
        return dispatch(setDialogs({ ...dialogs, themeCode: true }));
      default:
        return;
    }
  };
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Site name</Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton id="mode" onClick={handleClick} color="inherit">
          <SettingsBrightness />
        </IconButton>
        <IconButton
          disabled={locked.fonts}
          id="font"
          onClick={handleClick}
          color="inherit"
        >
          <TextFields />
        </IconButton>
        <IconButton
          disabled={locked.palette}
          id="palette"
          onClick={handleClick}
          color="inherit"
        >
          <Palette />
        </IconButton>
        <IconButton id="code" onClick={handleClick} color="inherit">
          <Code />
        </IconButton>
        <IconButton
          id="settings"
          onClick={handleClick}
          color="inherit"
          edge="end"
        >
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  mode: state.mode,
  locked: state.locked,
});

export default connect(mapStateToProps)(Menu);

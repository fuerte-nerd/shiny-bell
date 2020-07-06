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

const Menu = ({ dispatch, mode, dialogs }) => {
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
        return dispatch(setPrimary(randomColor()));
      case "font":
        return dispatch(setFontLoading(true));
      case "code":
        return dispatch(setDialogs({ ...dialogs, themeCode: true }));
      default:
        return;
    }
  };
  return (
    <AppBar>
      <Toolbar>
        <Typography>Site name</Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton id="mode" onClick={handleClick} color="inherit">
          <SettingsBrightness />
        </IconButton>
        <IconButton id="font" onClick={handleClick} color="inherit">
          <TextFields />
        </IconButton>
        <IconButton id="palette" onClick={handleClick} color="inherit">
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
});

export default connect(mapStateToProps)(Menu);

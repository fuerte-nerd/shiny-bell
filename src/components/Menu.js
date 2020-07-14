import React from "react";
import { connect } from "react-redux";
import { setMode, setSettings, setThemeCode } from "../state/actions";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { SettingsBrightness, Settings, Code } from "@material-ui/icons";

const Menu = ({ dispatch, mode, locked, twoFonts }) => {
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "settings":
        return dispatch(setSettings(true));
      case "mode":
        return mode === "dark"
          ? dispatch(setMode("light"))
          : dispatch(setMode("dark"));
      case "code":
        return dispatch(setThemeCode(true));
      default:
        return;
    }
  };
  return (
    <AppBar style={{ transition: "all .25s" }}>
      <Toolbar>
        <Typography variant="h6">Site name</Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton id="mode" onClick={handleClick} color="inherit">
          <SettingsBrightness />
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
  twoFonts: state.twoFonts,
});

export default connect(mapStateToProps)(Menu);

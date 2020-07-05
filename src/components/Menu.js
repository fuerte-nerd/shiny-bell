import React from "react";
import { connect } from "react-redux";
import { setMode, setPrimary, setFont } from "../state/actions";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  SvgIcon,
} from "@material-ui/core";
import { SettingsBrightness, Palette, TextFields } from "@material-ui/icons";
import randomColor from "../functions/randomColor";
import randomFont from "../functions/randomFont";

const Menu = ({ dispatch, mode }) => {
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "mode":
        return mode === "dark"
          ? dispatch(setMode("light"))
          : dispatch(setMode("dark"));
      case "palette":
        return dispatch(setPrimary(randomColor()));
      case "font":
        return dispatch(setFont(randomFont()));
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
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  mode: state.mode,
});

export default connect(mapStateToProps)(Menu);

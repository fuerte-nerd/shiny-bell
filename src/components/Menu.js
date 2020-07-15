import React from "react";
import { connect } from "react-redux";
import { setMode, setSettings, setThemeCode, setPrimary, setChangeHistory } from "../state/actions";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import {
  Undo,
  Redo,
  SettingsBrightness,
  Settings,
  Code,
} from "@material-ui/icons";

const Menu = ({ dispatch, mode, changeHistory, font, headerFont, primary }) => {
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
      case "undo":
        const undoStateIndex = changeHistory.length - 2
        const undo = undoState[undoStateIndex]
        if(undo.font !== font){
          dispatch(setFont(undo.font))
        }
        if(undo.headerFont !== headerFont){
          dispatch(setHeaderFont(undo.headerFont))
        }
        if(undo.primary !== primary){
          dispatch(setPrimary(undo.primary))
        }
        return dispatch(setChangeHistory(changeHistory.filter((i, ind)=>{
          return ind < undoStateIndex ? i : null
        }))
      default:
        return;
    }
  };
  return (
    <AppBar style={{ transition: "all .25s" }}>
      <Toolbar>
        <Typography variant="h6">Site name</Typography>
        <div style={{ flexGrow: 1 }} />
        <Tooltip title="Undo">
          <IconButton color="inherit">
            <Undo />
          </IconButton>
        </Tooltip>
        <Tooltip title="Redo">
          <IconButton color="inherit" id="undo" onClick={handleClick}>
            <Redo />
          </IconButton>
        </Tooltip>
        <Tooltip title="Toggle dark mode">
          <IconButton id="mode" onClick={handleClick} color="inherit">
            <SettingsBrightness />
          </IconButton>
        </Tooltip>
        <Tooltip title="Get the code!">
          <IconButton id="code" onClick={handleClick} color="inherit">
            <Code />
          </IconButton>
        </Tooltip>
        <Tooltip title="Open settings">
          <IconButton
            id="settings"
            onClick={handleClick}
            color="inherit"
            edge="end"
          >
            <Settings />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  mode: state.mode,
  locked: state.locked,
  twoFonts: state.twoFonts,
  changeHistory: state.changeHistory,
  font: state.font,
  headerFont: state.headerFont,
  primary: state.primary
});

export default connect(mapStateToProps)(Menu);

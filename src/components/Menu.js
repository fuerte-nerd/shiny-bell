import React from "react";
import { connect } from "react-redux";
import {
  setMode,
  setSettings,
  setThemeCode,
  setPrimary,
  setFont,
  setHeaderFont,
  setChangeHistory,
  setUndo,
} from "../state/actions";
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
  const handleClick = async (e) => {
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
        const undoStateIndex = changeHistory.currentPosition - 1;
        const undo = changeHistory.changes[undoStateIndex];
        await dispatch(setUndo(true));
        if (undo.font !== font) {
          dispatch(setFont(undo.font));
        }
        if (undo.headerFont !== headerFont) {
          dispatch(setHeaderFont(undo.headerFont));
        }
        if (undo.primary !== primary) {
          dispatch(setPrimary(undo.primary));
        }
        dispatch(
          setChangeHistory({
            ...changeHistory,
            currentPosition: changeHistory.currentPosition - 1,
          })
        );
        return dispatch(setUndo(false));
      case "redo":
        if (
          changeHistory.changes.length - 1 !==
          changeHistory.currentPosition
        ) {
          await dispatch(setUndo(true));
          const redo = changeHistory.changes[changeHistory.currentPosition + 1];
          if (redo.font !== font) {
            dispatch(setFont(redo.font));
          }
          if (redo.headerFont !== headerFont) {
            dispatch(setHeaderFont(redo.headerFont));
          }
          if (redo.primary !== primary) {
            dispatch(setPrimary(redo.primary));
          }
          dispatch(
            setChangeHistory({
              ...changeHistory,
              currentPosition: changeHistory.currentPosition + 1,
            })
          );
          return dispatch(setUndo(false));
        }
        return;
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
          <span>
            <IconButton
              color="inherit"
              id="undo"
              disabled={changeHistory.currentPosition === 0}
              onClick={handleClick}
            >
              <Undo />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Redo">
          <span>
            <IconButton
              color="inherit"
              disabled={
                changeHistory.changes.length - 1 ===
                changeHistory.currentPosition
              }
              id="redo"
              onClick={handleClick}
            >
              <Redo />
            </IconButton>
          </span>
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
  primary: state.primary,
});

export default connect(mapStateToProps)(Menu);

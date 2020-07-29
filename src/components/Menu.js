import React from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { SettingsBrightness, Settings, Code } from "@material-ui/icons";
import UndoRedo from "./UndoRedo";
import { setSidebar } from "../state/display/actions";
import Theme from "./Theme";

const Menu = ({ dispatch, current }) => {
  const handleClick = async (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "settings":
        dispatch(setSidebar(true));
        break;
      case "mode":
        new Theme({
          ...current,
          mode: current.mode === "light" ? "dark" : "light",
        }).commit();
        break;
      case "code":
      default:
        return;
    }
  };
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Site name</Typography>
        <div style={{ flexGrow: 1 }} />
        <UndoRedo />
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
  current: state.appState.current,
});

export default connect(mapStateToProps)(Menu);

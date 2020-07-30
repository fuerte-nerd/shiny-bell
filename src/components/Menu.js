import React from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Hidden,
} from "@material-ui/core";
import { SettingsBrightness, Settings, Code } from "@material-ui/icons";
import UndoRedo from "./UndoRedo";
import { setSidebar, setThemeCode } from "../state/display/actions";
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
        dispatch(setThemeCode(true));
        break;
      default:
        return;
    }
  };
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">{current.name}</Typography>
        <div style={{ flexGrow: 1 }} />
        <Hidden smDown>
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
        </Hidden>
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

import React from "react";
import { connect } from "react-redux";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Undo, Redo, Code, SettingsBrightness } from "@material-ui/icons";
import Setting from "../Setting";
import { setThemeCode, setLoadingScreen } from "../../state/display/actions";
import {
  setPastAppStates,
  setFutureAppStates,
} from "../../state/appState/actions";
import Theme from "../Theme";

const Main = ({ dispatch, past, current, future, mode }) => {
  const handleClick = (e) => {
    let theme;
    const { id } = e.currentTarget;
    switch (id) {
      case "undo":
      case "undo-btn":
        dispatch(setLoadingScreen(true));
        dispatch(setFutureAppStates([current, ...future]));
        theme = new Theme(past[past.length - 1]);
        theme.validateFonts().then(() => {
          theme.commit().then(() => dispatch(setLoadingScreen(false)));
        });

        dispatch(setPastAppStates(past.slice(0, past.length - 1)));

        break;
      case "redo":
      case "redo-btn":
        dispatch(setLoadingScreen(true));
        dispatch(setPastAppStates([...past, current]));
        theme = new Theme(future[0]);
        theme.validateFonts().then(() => {
          theme.commit().then(() => dispatch(setLoadingScreen(false)));
        });
        dispatch(setFutureAppStates(future.slice(1)));
        break;
      case "code":
      case "code-btn":
        dispatch(setThemeCode(true));
        break;
      case "dark":
      case "dark-btn":
        new Theme({
          ...current,
          mode: current.mode === "light" ? "dark" : "light",
        }).commit();
        break;
      default:
        break;
    }
  };

  return (
    <Setting title="Utility">
      <ListItem
        id="undo"
        onClick={handleClick}
        button
        disabled={past.length === 0}
      >
        <ListItemText primary="Undo" />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            id="undo-btn"
            onClick={handleClick}
            disabled={past.length === 0}
          >
            <Undo />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem
        id="redo"
        onClick={handleClick}
        button
        disabled={future.length === 0}
      >
        <ListItemText primary="Redo" />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            id="redo-btn"
            onClick={handleClick}
            disabled={future.length === 0}
          >
            <Redo />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem id="code" onClick={handleClick} button>
        <ListItemText primary="Get the code!" />
        <ListItemSecondaryAction>
          <IconButton edge="end" id="code-btn" onClick={handleClick}>
            <Code />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem id="dark" onClick={handleClick} button>
        <ListItemText
          primary="Dark mode"
          secondary={mode === "light" ? "Off" : "On"}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" id="dark-btn" onClick={handleClick}>
            <SettingsBrightness />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  past: state.appState.past,
  current: state.appState.current,
  future: state.appState.future,
  mode: state.appState.current.mode,
});

export default connect(mapStateToProps)(Main);

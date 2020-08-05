import React from "react";
import { connect } from "react-redux";
import Setting from "../Setting";

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import {
  SettingsBrightness,
  AddCircle,
  RemoveCircle,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";

import Theme from "../Theme";

const Appearance = ({
  spacing,
  rounding,
  current,
  mode,
  pageBackgroundColor,
}) => {
  const options = [
    "transparent",
    "primary.light",
    "primary.main",
    "primary.dark",
    "secondary.light",
    "secondary.main",
    "secondary.dark",
  ];
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    let selection;
    switch (id) {
      case "page-back":
        options.indexOf(pageBackgroundColor) === 0
          ? (selection = options[options.length - 1])
          : (selection = options[options.indexOf(pageBackgroundColor) - 1]);
        new Theme({
          ...current,
          pageBackground: selection,
        }).commit();
        break;
      case "page-forward":
        options.indexOf(pageBackgroundColor) === options.length - 1
          ? (selection = options[0])
          : (selection = options[options.indexOf(pageBackgroundColor) + 1]);
        new Theme({
          ...current,
          pageBackground: selection,
        }).commit();
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
    <Setting title="Appearance">
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
      <ListItem>
        <ListItemText
          primary="Page background color"
          secondary={pageBackgroundColor}
        />
        <ListItemSecondaryAction>
          <IconButton size="small" id="page-back" onClick={handleClick}>
            <ChevronLeft />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            id="page-forward"
            onClick={handleClick}
          >
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Spacing" secondary={spacing} />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={() => {
              if (spacing > 1) {
                new Theme({
                  ...current,
                  spacing: spacing - 1,
                }).commit();
              }
            }}
          >
            <RemoveCircle />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            onClick={() => {
              new Theme({
                ...current,
                spacing: spacing + 1,
              }).commit();
            }}
          >
            <AddCircle />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Rounding" secondary={rounding} />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={() => {
              if (rounding > 0) {
                new Theme({
                  ...current,
                  rounding: rounding - 1,
                }).commit();
              }
            }}
          >
            <RemoveCircle />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            onClick={() => {
              new Theme({
                ...current,
                rounding: rounding + 1,
              }).commit();
            }}
          >
            <AddCircle />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  spacing: state.appState.current.spacing,
  rounding: state.appState.current.rounding,
  current: state.appState.current,
  mode: state.appState.current.mode,
  pageBackgroundColor: state.appState.current.pageBackground,
});

export default connect(mapStateToProps)(Appearance);

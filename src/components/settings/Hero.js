import React from "react";
import { connect } from "react-redux";
import Setting from "../Setting";

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import Theme from "../Theme";

const Hero = ({ dispatch, current, boxPosition, overlayColor }) => {
  const handleClick = (e) => {
    let theme;
    const { id } = e.currentTarget;
    switch (id) {
      case "overlay-color-previous":
        theme = Object.assign({}, current);
        if (options.overlayColor.indexOf(overlayColor) === 0) {
          theme.hero.overlayColor =
            options.overlayColor[options.overlayColor.length - 1];
        } else {
          theme.hero.overlayColor =
            options.overlayColor[
              options.overlayColor.indexOf(overlayColor) + 1
            ];
        }
        new Theme(theme).commit();
        break;
      case "box-position-previous":
        theme = Object.assign({}, current);
        if (options.boxPosition.indexOf(boxPosition) === 0) {
          theme.hero.position =
            options.boxPosition[options.boxPosition.length - 1];
        } else {
          theme.hero.position =
            options.boxPosition[options.boxPosition.indexOf(boxPosition) - 1];
        }
        new Theme(theme).commit();
        break;
      case "box-position-next":
        theme = Object.assign({}, current);
        if (
          options.boxPosition.indexOf(boxPosition) ===
          options.boxPosition.length - 1
        ) {
          theme.hero.position = options.boxPosition[0];
        } else {
          theme.hero.position =
            options.boxPosition[options.boxPosition.indexOf(boxPosition) + 1];
        }
        new Theme(theme).commit();
        break;
      default:
        break;
    }
  };

  const options = {
    overlayColor: [
      "none",
      "dark",
      "light",
      "primary.light",
      "primary.main",
      "primary.dark",
      "secondary.light",
      "secondary.main",
      "secondary.dark",
    ],
    boxPosition: ["flex-end", "center", "flex-start"],
  };

  return (
    <Setting title="Hero">
      <ListItem>
        <ListItemText primary="Overlay color" secondary={overlayColor} />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={handleClick}
            id="overlay-color-previous"
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            size="small"
            onClick={handleClick}
            id="overlay-color-next"
            edge="end"
          >
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Box position" secondary={boxPosition} />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={handleClick}
            id="box-position-previous"
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            size="small"
            onClick={handleClick}
            id="box-position-next"
            edge="end"
          >
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  current: state.appState.current,
  boxPosition: state.appState.current.hero.position,
  overlayColor: state.appState.current.hero.overlayColor,
});

export default connect(mapStateToProps)(Hero);

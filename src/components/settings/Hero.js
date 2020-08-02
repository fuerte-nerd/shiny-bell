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

const Hero = ({ dispatch, current, boxPosition }) => {
  const handleClick = (e) => {
    let theme;
    const { id } = e.currentTarget;
    switch (id) {
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
    boxPosition: ["flex-end", "center", "flex-start"],
  };

  return (
    <Setting title="Hero">
      <ListItem>
        <ListItemText primary="Box position" secondary={boxPosition} />
        <ListItemSecondaryAction>
          <IconButton onClick={handleClick} id="box-position-previous">
            <ChevronLeft />
          </IconButton>
          <IconButton onClick={handleClick} id="box-position-next" edge="end">
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
});

export default connect(mapStateToProps)(Hero);

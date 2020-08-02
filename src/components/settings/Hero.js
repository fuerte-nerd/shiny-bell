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

const Hero = ({ dispatch, current, boxPosition }) => {
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "box-position-previous":
        break;
      case "box-position-next":
        break;
      default:
        break;
    }
  };

  const options = {
    boxPosition: ["flex-end", "flex-start", "center"],
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

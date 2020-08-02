import React from "react";
import { connect } from "react-redux";
import Setting from "../Setting";

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

const Hero = ({ dispatch, current, boxPosition }) => {
  return (
    <Setting title="Hero">
      <ListItem>
        <ListItemText primary="Box position" secondary={boxPosition} />
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  current: state.appState.current,
  boxPosition: state.appState.current.hero.position,
});

export default connect(mapStateToProps)(Hero);

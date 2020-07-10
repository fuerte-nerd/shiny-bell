import React, { useState } from "react";
import { connect } from "react-redux";
import { setSecondaryMode } from "../../state/actions";
import Setting from "../Setting";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

const Colors = ({ dispatch, primary, secondaryMode }) => {
  const options = ["complement", "desaturate", "saturate", "darken", "lighten"];

  return (
    <Setting title="Colors">
      <ListItem button onClick={setShowColorPicker(true)}>
        <ListItemText primary="Adjust color" secondary={primary} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Secondary color mode"
          secondary={
            secondaryMode.charAt(0).toUpperCase() + secondaryMode.substr(1)
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={() => {
              const currentIndex = options.indexOf(secondaryMode);
              currentIndex !== 0
                ? dispatch(setSecondaryMode(options[currentIndex - 1]))
                : dispatch(setSecondaryMode(options[options.length - 1]));
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            onClick={() => {
              const currentIndex = options.indexOf(secondaryMode);
              currentIndex !== options.length - 1
                ? dispatch(setSecondaryMode(options[currentIndex + 1]))
                : dispatch(setSecondaryMode(options[0]));
            }}
          >
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  secondaryMode: state.secondaryMode,
  primary: state.primary,
});

export default connect(mapStateToProps)(Colors);

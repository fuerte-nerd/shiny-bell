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

const Buttons = ({ dispatch, buttonTextTransform, current, past }) => {
  const options = ["uppercase", "capitalize", "lowercase"];

  return (
    <Setting title="Buttons">
      <ListItem>
        <ListItemText
          primary="Text transform"
          secondary={`${
            current.buttonTextTransform.charAt(0).toUpperCase() +
            current.buttonTextTransform.substr(1)
          }`}
        />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={() => {
              const currentIndex = options.indexOf(buttonTextTransform);
              let selection;
              if (currentIndex !== 0) {
                selection = options[currentIndex - 1];
              } else {
                selection = options[options.length - 1];
              }
              new Theme({
                ...current,
                buttonTextTransform: selection,
              }).commit();
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            onClick={() => {
              const currentIndex = options.indexOf(buttonTextTransform);
              let selection;
              if (currentIndex !== options.length - 1) {
                selection = options[currentIndex + 1];
              } else {
                selection = options[0];
              }
              new Theme({
                ...current,
                buttonTextTransform: selection,
              }).commit();
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
  buttonTextTransform: state.appState.current.buttonTextTransform,
  current: state.appState.current,
  past: state.appState.past,
});

export default connect(mapStateToProps)(Buttons);

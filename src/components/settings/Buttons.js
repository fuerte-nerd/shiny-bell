import React from "react";
import { connect } from "react-redux";
import { setButtonTextTransform } from "../../state/actions";
import Setting from "../Setting";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import { ChevronLeft, ChevronRight } from "@material-ui/icons";

import Theme from "../../functions/Theme";

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
              if (currentIndex !== 0) {
                dispatch(setButtonTextTransform(options[currentIndex - 1]));
              } else {
                dispatch(setButtonTextTransform(options[options.length - 1]));
              }
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            onClick={() => {
              const currentIndex = options.indexOf(buttonTextTransform);
              if (currentIndex !== options.length - 1) {
                dispatch(setButtonTextTransform(options[currentIndex + 1]));
              } else {
                dispatch(setButtonTextTransform(options[0]));
              }
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

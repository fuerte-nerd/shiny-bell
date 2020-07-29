import React from "react";
import { connect } from "react-redux";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Code } from "@material-ui/icons";
import Setting from "../Setting";
import { setThemeCode } from "../../state/display/actions";

const Main = ({ dispatch }) => {
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "code":
      case "code-btn":
        dispatch(setThemeCode(true));
        break;
      default:
        break;
    }
  };

  return (
    <Setting title="Utility">
      <ListItem id="code" onClick={handleClick} button>
        <ListItemText primary="Get the code!" />
        <ListItemSecondaryAction>
          <IconButton edge="end" id="code-btn" onClick={handleClick}>
            <Code />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

export default connect()(Main);

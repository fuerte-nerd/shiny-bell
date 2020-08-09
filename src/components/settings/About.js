import React from "react";
import { connect } from "react-redux";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import { Email, Help } from "@material-ui/icons";

import Setting from "../Setting";

const About = () => {
  return (
    <Setting title="About">
      <ListItem id="email" button>
        <ListItemText primary="Email the developer" />
        <ListItemSecondaryAction>
          <IconButton id="email-btn" onClick={handleClick} edge="end">
            <Email />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

export default About;

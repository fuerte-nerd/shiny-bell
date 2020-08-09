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
import { setWelcome } from "../../state/display/actions";

const About = ({ dispatch }) => {
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "faqs":
      case "faqs-btn":
        dispatch(setWelcome({isOpen: true, showOnStart: false));
        break;
      case "email":
      case "email-btn":
        window.open("mailto:fuertenerd@gmail.com");
        break;
      default:
        break;
    }
  };

  return (
    <Setting title="About">
      <ListItem id="faqs" onClick={handleClick} button>
        <ListItemText primary="FAQs" />
        <ListItemSecondaryAction>
          <IconButton id="faqs-btn" onClick={handleClick} edge="end">
            <Help />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem id="email" onClick={handleClick} button>
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

export default connect()(About);

import React from "react";
import { connect } from "react-redux";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import { Email, Help, GitHub } from "@material-ui/icons";

import Setting from "../Setting";
import { setWelcome } from "../../state/display/actions";

const About = ({ dispatch }) => {
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "faqs":
      case "faqs-btn":
        dispatch(setWelcome({ isOpen: true, showOnStart: false }));
        break;
      case "github":
      case "github-btn":
        window.open("https://github.com", "_blank");
        break;
      case "email":
      case "email-btn":
        window.open("mailto:fuertenerd@gmail.com", "_blank");
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
      <ListItem id="github" onClick={handleClick} button>
        <ListItemText primary="GitHub" />
        <IconButton id="github-btn" onClick={handleClick} edge="end">
          <GitHub />
        </IconButton>
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

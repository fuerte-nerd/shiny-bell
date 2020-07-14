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

const Backgrounds = ({ dispatch }) => {
  return (
    <Setting title="Backgrounds">
      <ListItem>
        <ListItemText primary="Page" secondary="" />
        <ListItemSecondaryAction>
          <IconButton size="small">
            <ChevronLeft />
          </IconButton>
          <IconButton size="small">
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Backgrounds);

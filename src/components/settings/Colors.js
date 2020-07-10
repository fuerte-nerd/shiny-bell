import React from "react";
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

const Colors = ({ dispatch, secondaryMode }) => {
  return (
    <Setting title="Colors">
      <ListItem>
        <ListItemText
          primary="Secondary color mode"
          secondary={
            secondaryMode.charAt(0).toUpperCase() + secondaryMode.substr(1)
          }
        />
        <ListItemSecondaryAction>
          <IconButton size="small">
            <ChevronLeft />
          </IconButton>
          <IconButton size="small" edge="end">
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  secondaryMode: state.secondaryMode,
});

export default connect(mapStateToProps)(Colors);

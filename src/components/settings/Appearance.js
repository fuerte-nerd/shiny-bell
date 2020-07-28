import React from "react";
import { connect } from "react-redux";
import {} from "../../state/appState/actions";
import Setting from "../Setting";

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";

import Theme from "../../functions/Theme";

const Spacing = ({ dispatch, spacing, rounding }) => {
  return (
    <Setting title="Appearance">
      <ListItem>
        <ListItemText primary="Spacing" secondary={spacing} />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={() => {
              const theme = new Theme({
                ...current,
                spacing: current.spacing - 1,
              }).commit();
            }}
          >
            <RemoveCircle />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            onClick={() => dispatch(setSpacing(spacing + 1))}
          >
            <AddCircle />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Rounding" secondary={rounding} />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={() => dispatch(setRounding(rounding - 1))}
          >
            <RemoveCircle />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            onClick={() => dispatch(setRounding(rounding + 1))}
          >
            <AddCircle />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  spacing: state.appState.current.spacing,
  rounding: state.appState.current.rounding,
  current: state.appState.current,
});

export default connect(mapStateToProps)(Spacing);

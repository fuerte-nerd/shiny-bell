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

const Appearance = ({ dispatch, spacing, rounding, current }) => {
  return (
    <Setting title="Appearance">
      <ListItem>
        <ListItemText primary="Spacing" secondary={spacing} />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={() => {
              if (spacing > 1) {
                new Theme({
                  ...current,
                  spacing: spacing - 1,
                }).commit();
              }
            }}
          >
            <RemoveCircle />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            onClick={() => {
              new Theme({
                ...current,
                spacing: spacing + 1,
              }).commit();
            }}
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
            onClick={() => {
              if (rounding > 0) {
                new Theme({
                  ...current,
                  rounding: rounding - 1,
                }).commit();
              }
            }}
          >
            <RemoveCircle />
          </IconButton>
          <IconButton size="small" edge="end">
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

export default connect(mapStateToProps)(Appearance);

import React from "react";
import { connect } from "react-redux";
import { setSpacing, setRounding } from "../../state/actions";
import Setting from "../Setting";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";

const Spacing = ({ dispatch, spacing, rounding }) => {
  return (
    <Setting title="Appearance">
      <ListItem>
        <ListItemText primary="Spacing" secondary={spacing} />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={() => dispatch(setSpacing(spacing - 1))}
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
  spacing: state.spacing,
  rounding: state.rounding,
});

export default connect(mapStateToProps)(Spacing);

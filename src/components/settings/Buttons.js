import React from "react";
import { connect } from "react-redux";
import { setButtonTextTransform } from "../../state/actions";
import Setting from "../Setting";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles,
  IconButton,
} from "@material-ui/core";

import { ChevronLeft, ChevronRight } from "@material-ui/icons";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Buttons = ({ dispatch, buttonTextTransform }) => {
  const options = [
    {
      label: "CAPITALIZE",
      setting: "uppercase",
    },
    {
      label: "Sentence case",
      setting: "sentence",
    },
    { label: "lowercase", setting: "lowercase" },
  ];
  return (
    <Setting title="Buttons">
      <ListItem>
        <ListItemText
          primary="Text transform"
          secondary={buttonTextTransform}
        />
        <ListItemSecondaryAction>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  buttonTextTransform: state.buttonTextTransform,
});

export default connect(mapStateToProps)(Buttons);

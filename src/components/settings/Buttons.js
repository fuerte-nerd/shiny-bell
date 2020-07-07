import React from "react";
import { connect } from "react-redux";
import { setButtonTextTransform } from "../../state/actions";
import Setting from "../Setting";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Buttons = ({ dispatch, buttonTextTransform }) => {
  const classes = useStyles();
  return (
    <Setting title="Buttons">
      <FormControl component="fieldset">
        <RadioGroup
          row
          id="change-button-text-transform"
          value={buttonTextTransform}
          onChange={(e) => dispatch(setButtonTextTransform(e.target.value))}
        >
          <FormControlLabel
            classes={{ label: classes.label }}
            id="uppercase"
            value="uppercase"
            label="UPPERCASE"
            control={<Radio />}
          />
          <FormControlLabel
            classes={{ label: classes.label }}
            id="capitalize"
            value="capitalize"
            label="Capitalize"
            control={<Radio />}
          />
          <FormControlLabel
            classes={{ label: classes.label }}
            id="lowercase"
            value="lowercase"
            label="lowercase"
            control={<Radio />}
          />
        </RadioGroup>
      </FormControl>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  buttonTextTransform: state.buttonTextTransform,
});

export default connect(mapStateToProps)(Buttons);

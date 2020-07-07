import React from "react";
import { connect } from "react-redux";
import Setting from "../Setting";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  useStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const SecondaryColorMode = ({ dispatch, secondaryMode }) => {
  const classes = useStyles();

  return (
    <Setting title="Secondary color mode">
      <FormControl component="fieldset">
        <RadioGroup
          row
          value={secondaryMode}
          onChange={(e) => dispatch(setSecondaryMode(e.target.value))}
        >
          <FormControlLabel
            classes={{ label: classes.label }}
            value="complement"
            label="Complement"
            control={<Radio />}
          />
          <FormControlLabel
            classes={{ label: classes.label }}
            value="desaturate"
            label="Desaturate"
            control={<Radio />}
          />
          <FormControlLabel
            classes={{ label: classes.label }}
            value="saturate"
            label="Saturate"
            control={<Radio />}
          />
          <FormControlLabel
            classes={{ label: classes.label }}
            value="darken"
            label="Darken"
            control={<Radio />}
          />
          <FormControlLabel
            classes={{ label: classes.label }}
            value="lighten"
            label="Lighten"
            control={<Radio />}
          />
        </RadioGroup>
      </FormControl>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  secondaryMode: state.secondaryMode,
});

export default connect(mapStateToProps)(SecondaryColorMode);

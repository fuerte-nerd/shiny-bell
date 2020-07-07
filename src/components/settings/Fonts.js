import React from "react";
import { connect } from "react-redux";
import { set2Fonts, setFontSize } from "../../state/actions";
import Setting from "../Setting";
import {
  FormControlLabel,
  Switch,
  Slider,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Fonts = ({ dispatch, twoFonts, fontSize }) => {
  const classes = useStyles();

  return (
    <Setting title="Fonts">
      <FormControlLabel
        control={
          <Switch
            onChange={() => dispatch(set2Fonts(!twoFonts))}
            checked={twoFonts}
          />
        }
        label="Two Fonts?"
        classes={{ label: classes.label }}
      />
      <Slider
        min={8}
        max={30}
        value={fontSize}
        valueLabelDisplay="auto"
        onChange={(e, v) => {
          dispatch(setFontSize(v));
        }}
        classes={{ valueLabel: classes.label }}
      />
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  twoFonts: state.twoFonts,
  fontSize: state.fontSize,
});

export default connect(mapStateToProps)(Fonts);

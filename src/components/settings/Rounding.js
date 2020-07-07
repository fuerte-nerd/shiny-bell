import React from "react";
import { connect } from "react-redux";
import { setRounding } from "../../state/actions";
import Setting from "../Setting";

import { Slider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Rounding = ({ dispatch, rounding }) => {
  const classes = useStyles();
  return (
    <Setting title="Rounding">
      <Slider
        min={0}
        max={50}
        value={rounding}
        valueLabelDisplay="auto"
        onChange={(e, v) => {
          dispatch(setRounding(v));
        }}
        classes={{ valueLabel: classes.label }}
      />
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  rounding: state.rounding,
});

export default connect(mapStateToProps)(Rounding);

import React from "react";
import { connect } from "react-redux";
import { setSpacing } from "../../state/actions";
import Setting from "../Setting";
import { Slider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Spacing = ({ dispatch, spacing }) => {
  const classes = useStyles();
  return (
    <Setting title="Spacing">
      <Slider
        min={0}
        max={50}
        value={spacing}
        valueLabelDisplay="auto"
        onChange={(e, v) => {
          dispatch(setSpacing(v));
        }}
        classes={{ valueLabel: classes.label }}
      />
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  spacing: state.spacing,
});

export default connect(mapStateToProps)(Spacing);

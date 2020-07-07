import React from "react";
import { connect } from "react-redux";
import { set2Fonts } from "../../state/actions";
import Setting from "../Setting";
import { FormControlLabel, Switch, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Fonts = ({ dispatch, twoFonts }) => {
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
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  twoFonts: state.twoFonts,
});

export default connect(mapStateToProps)(Fonts);

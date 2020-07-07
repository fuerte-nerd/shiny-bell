import React from "react";
import { connect } from "react-redux";
import Setting from "../Setting";
import {
  FormGroup,
  FormControlLabel,
  Switch,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Locks = ({ locked, twoFonts, font, headerFont }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    const { id } = e.currentTarget;
  };

  return (
    <Setting title="Lock elements">
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              id="lock-font"
              onChange={handleChange}
              checked={locked.bodyFont}
            />
          }
          label={
            twoFonts
              ? `Body Font (${font.themeName})`
              : `Font (${font.themeName})`
          }
          classes={{ label: classes.label }}
        />
        {twoFonts && (
          <FormControlLabel
            control={
              <Switch
                id="lock-header-font"
                onChange={handleChange}
                checked={locked.headerFont}
              />
            }
            label={`Header font (${headerFont.themeName})`}
            classes={{ label: classes.label }}
          />
        )}
        <FormControlLabel
          control={
            <Switch
              id="lock-palette"
              onChange={handleChange}
              checked={locked.palette}
            />
          }
          label="Palette"
          classes={{ label: classes.label }}
        />
      </FormGroup>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  locked: state.locked,
  font: state.font,
  headerFont: state.headerFont,
  twoFonts: state.twoFonts,
});

export default connect(mapStateToProps)(Locks);

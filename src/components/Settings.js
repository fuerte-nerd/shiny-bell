import React from "react";
import { connect } from "react-redux";
import {
  setLocked,
  setDialogs,
  setSecondaryMode,
  setSpacing,
  set2Fonts,
} from "../state/actions";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControlLabel,
  Switch,
  FormControl,
  Radio,
  RadioGroup,
  FormGroup,
  Divider,
  makeStyles,
  Slider,
} from "@material-ui/core";
import AppTypography from "./AppTypography";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Settings = ({
  dispatch,
  dialogs,
  locks,
  secondaryMode,
  twoFonts,
  spacing,
  font,
  headerFont,
}) => {
  const classes = useStyles();
  const handleChange = (e) => {
    console.log(e.target.id);
    const { id } = e.currentTarget;
    switch (id) {
      case "lock-font":
        return dispatch(setLocked({ ...locks, bodyFont: !locks.bodyFont }));
      case "lock-header-font":
        return dispatch(setLocked({ ...locks, headerFont: !locks.headerFont }));
      case "lock-palette":
        return dispatch(setLocked({ ...locks, palette: !locks.palette }));
      case "complement":
      case "desaturate":
        return dispatch(setSecondaryMode(id));
      case "use-two-fonts":
        return dispatch(set2Fonts(!twoFonts));
      default:
        return;
    }
  };

  const handleClose = () => {
    return dispatch(setDialogs({ ...dialogs, settings: false }));
  };
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={dialogs.settings}
      onClose={handleClose}
    >
      <DialogTitle disableTypography>
        <AppTypography variant="h4">Settings</AppTypography>
      </DialogTitle>
      <DialogContent dividers>
        <AppTypography variant="h6">Lock</AppTypography>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                id="lock-font"
                onChange={handleChange}
                checked={locks.bodyFont}
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
                  checked={locks.headerFont}
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
                checked={locks.palette}
              />
            }
            label="Palette"
            classes={{ label: classes.label }}
          />
        </FormGroup>
        <Box my="15px">
          <Divider />
        </Box>
        <AppTypography variant="h6">Secondary color mode</AppTypography>
        <FormControl component="fieldset">
          <RadioGroup
            row
            id="change-secondary-mode"
            value={secondaryMode}
            onChange={(e) => dispatch(setSecondaryMode(e.target.value))}
          >
            <FormControlLabel
              classes={{ label: classes.label }}
              id="complement"
              value="complement"
              label="Complement"
              control={<Radio />}
            />
            <FormControlLabel
              classes={{ label: classes.label }}
              id="desaturate"
              value="desaturate"
              label="Desaturate"
              control={<Radio />}
            />
            <FormControlLabel
              classes={{ label: classes.label }}
              id="saturate"
              value="saturate"
              label="Saturate"
              control={<Radio />}
            />
            <FormControlLabel
              classes={{ label: classes.label }}
              id="darken"
              value="darken"
              label="Darken"
              control={<Radio />}
            />
            <FormControlLabel
              classes={{ label: classes.label }}
              id="lighten"
              value="lighten"
              label="Lighten"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <Box my="15px">
          <Divider />
        </Box>
        <AppTypography variant="h6">Spacing</AppTypography>
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
        <Box my="15px">
          <Divider />
        </Box>
        <AppTypography variant="h6">Fonts</AppTypography>
        <FormControlLabel
          control={
            <Switch
              id="use-two-fonts"
              onChange={handleChange}
              checked={twoFonts}
            />
          }
          label="Two Fonts?"
          classes={{ label: classes.label }}
        />
      </DialogContent>
      <DialogActions>
        <Button style={{ fontFamily: "Roboto" }} onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  dialogs: state.dialogs,
  locks: state.locked,
  secondaryMode: state.secondaryMode,
  spacing: state.spacing,
  twoFonts: state.twoFonts,
  font: state.font,
  headerFont: state.headerFont,
});

export default connect(mapStateToProps)(Settings);

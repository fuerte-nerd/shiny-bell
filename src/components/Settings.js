import React from "react";
import { connect } from "react-redux";
import { setLocked, setDialogs, setSecondaryMode } from "../state/actions";
import {
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
  makeStyles,
} from "@material-ui/core";
import AppTypography from "./AppTypography";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Settings = ({ dispatch, dialogs, locks, secondaryMode }) => {
  const classes = useStyles();
  const handleChange = (e) => {
    console.log(e.target.id);
    const { id } = e.currentTarget;
    switch (id) {
      case "lock-fonts":
        return dispatch(setLocked({ ...locks, fonts: !locks.fonts }));
      case "lock-palette":
        return dispatch(setLocked({ ...locks, palette: !locks.palette }));
      case "complement":
      case "desaturate":
        return dispatch(setSecondaryMode(id));
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
        <AppTypography variant="h3">Settings</AppTypography>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          <AppTypography variant="h5">Lock</AppTypography>
          <FormGroup row style={{ justifyContent: "space-between" }}>
            <FormControlLabel
              control={
                <Switch
                  id="lock-fonts"
                  onChange={handleChange}
                  checked={locks.fonts}
                />
              }
              label="Font(s)"
              classes={{ label: classes.label }}
            />
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
          <AppTypography variant="h5">Secondary color mode</AppTypography>
          <FormControl component="fieldset">
            <RadioGroup
              id="change-secondary-mode"
              value={secondaryMode}
              onChange={handleChange}
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
            </RadioGroup>
          </FormControl>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  dialogs: state.dialogs,
  locks: state.locked,
  secondaryMode: state.secondaryMode,
});

export default connect(mapStateToProps)(Settings);

import React from "react";
import { connect } from "react-redux";
import { setLocked, setDialogs } from "../state/actions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControlLabel,
  Switch,
  Typography,
  FormGroup,
} from "@material-ui/core";

const Settings = ({ dispatch, dialogs, locks }) => {
  const handleChange = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "lock-fonts":
        return dispatch(setLocked({ ...locks, fonts: !locks.fonts }));
      case "lock-palette":
        return dispatch(setLocked({ ...locks, palette: !locks.palette }));
      default:
        return;
    }
  };

  const handleClose = () => {
    return dispatch(setDialogs({ ...dialogs, settings: false }));
  };
  return (
    <Dialog fullScreen open={dialogs.settings} onClose={handleClose}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="h5">Lock</Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  id="lock-fonts"
                  onChange={handleChange}
                  checked={locks.fonts}
                />
              }
              label="Font(s)"
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
            />
          </FormGroup>
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
});

export default connect(mapStateToProps)(Settings);

import React from "react";
import { connect } from "react-redux";
import { setDialogs } from "../state/actions";
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
import Locks from "./settings/Locks";
import SecondaryColorMode from "./settings/SecondaryColorMode";
import Spacing from "./settings/Spacing";
import Fonts from "./settings/Fonts";
import Buttons from "./settings/Buttons";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Settings = ({
  dispatch,
  dialogs,
  twoFonts,
  font,
  headerFont,
  buttonTextTransform,
}) => {
  const classes = useStyles();

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
        <Locks />
        <SecondaryColorMode />
        <Spacing />
        <Fonts />
        <Buttons />
      </DialogContent>
      <DialogActions>
        <Button
          style={{ fontFamily: "Roboto", textTransform: "uppercase" }}
          onClick={handleClose}
        >
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
  buttonTextTransform: state.buttonTextTransform,
});

export default connect(mapStateToProps)(Settings);

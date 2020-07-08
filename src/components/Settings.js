import React from "react";
import { connect } from "react-redux";
import { setSettings } from "../state/actions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

import AppTypography from "./AppTypography";
import Locks from "./settings/Locks";
import SecondaryColorMode from "./settings/SecondaryColorMode";
import Spacing from "./settings/Spacing";
import Fonts from "./settings/Fonts";
import Buttons from "./settings/Buttons";
import Rounding from "./settings/Rounding";

const Settings = ({ dispatch, settings }) => {
  const handleClose = () => {
    return dispatch(setSettings(false));
  };
  return (
    <Dialog fullWidth maxWidth="sm" open={settings} onClose={handleClose}>
      <DialogTitle disableTypography>
        <AppTypography variant="h4">Settings</AppTypography>
      </DialogTitle>
      <DialogContent dividers>
        <Locks />
        <SecondaryColorMode />
        <Spacing />
        <Fonts />
        <Buttons />
        <Rounding />
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
  settings: state.settings,
});

export default connect(mapStateToProps)(Settings);

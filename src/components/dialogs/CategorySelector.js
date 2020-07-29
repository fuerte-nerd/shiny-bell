import React from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  FormControlLabel,
  Checkbox,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

const Categories = ({ dispatch, twoFonts, isOpen, section }) => {
  return (
    <Dialog open={isOpen} maxWidth="lg">
      <DialogTitle>Set {twoFonts ? section : null} font filters</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  twoFonts: state.appState.current.twoFonts,
  isOpen: state.display.fontCategorySelector.isOpen,
  section: state.display.fontCategorySelector.section,
});

export default connect(mapStateToProps)(Categories);

import React from "react";
import { connect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  FormControl,
  Button,
} from "@material-ui/core";

const FontPicker = ({ dispatch, fontPicker }) => {
  return (
    <Dialog open={fontPicker}>
      <DialogTitle>Select font...</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  font: state.font,
  headerFont: state.headerFont,
  fontPicker: state.fontPicker,
});

export default connect(mapStateToProps)(FontPicker);

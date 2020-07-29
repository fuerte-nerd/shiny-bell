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

const Categories = () => {
  return (
    <Dialog>
      <DialogTitle></DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Categories);

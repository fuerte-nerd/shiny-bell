import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";

const Save = () => {
  return (
    <Dialog maxWidth="lg" open={true}>
      <DialogTitle>Save current theme</DialogTitle>
      <DialogContent>
        <TextField label="Name" />
      </DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

export default Save;

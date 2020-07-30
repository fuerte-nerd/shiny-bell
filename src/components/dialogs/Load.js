import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

const Load = ({ dispatch, isOpen }) => {
  useEffect(() => {}, [isOpen]);

  return (
    <Dialog>
      <DialogTitle>
        <Typography style={{ fontFamily: "Roboto" }}>Load theme</Typography>
      </DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.load.isOpen,
});

export default connect(mapStateToProps)(Load);

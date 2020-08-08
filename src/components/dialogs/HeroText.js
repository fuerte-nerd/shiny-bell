import React from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";

const HeroText = () => {
  return (
    <Dialog>
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
          Edit hero text
        </Typography>
      </DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(HeroText);

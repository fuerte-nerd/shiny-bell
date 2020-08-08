import React from "react";
import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Button,
  Divider,
} from "@material-ui/core";

import { GitHub } from "@material-ui/icons";

const Welcome = () => {
  return (
    <Dialog open={true}>
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
          Welcome to MUITA
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h4" style={{ fontFamily: "Roboto" }}>
          What is MUITA?
        </Typography>
        <Typography style={{ fontFamily: "Roboto" }} paragraph>
          MUITA (Material UI Theme Assistant) is a tool to help you quickly and
          intuitively find a Material UI theme for your next poject!
        </Typography>
        <Divider />
      </DialogContent>
    </Dialog>
  );
};

export default Welcome;

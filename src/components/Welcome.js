import React from "react";
import {
  Box,
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
        <Box my={2}>
          <Divider />
        </Box>
        <Typography variant="h4" style={{ fontFamily: "Roboto" }}>
          How does it work?
        </Typography>
        <Typography style={{ fontFamily: "Roboto" }} paragraph>
          It's very simple! You just hit the refresh button and MUITA will
          provide you with a new theme, including fonts (provided by Google
          Fonts), colors and an image. If you like certain elements of it, you
          can lock them in the settings menu and they will remain upon
          subsequent refreshes. The images are provided by the Unsplash API and
          even though they are royalty-free, they are meant as more of a guide.
        </Typography>
        <Divider />
      </DialogContent>
      <DialogActions>
        <Button style={{ fontFamily: "roboto" }} endIcon={<GitHub />}>
          View on GitHub
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Welcome;

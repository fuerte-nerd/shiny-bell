import React from "react";
import {
  Box,
  Link,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Button,
  Divider,
} from "@material-ui/core";

import { PlayArrow, GitHub } from "@material-ui/icons";

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
          "What is MUITA?.."
        </Typography>
        <Typography style={{ fontFamily: "Roboto" }} paragraph>
          MUITA (Material UI Theme Assistant) is a tool to help you quickly and
          intuitively find a Material UI theme for your next poject!
        </Typography>
        <Divide />
        <Typography variant="h4" style={{ fontFamily: "Roboto" }}>
          "How does it work?.."
        </Typography>
        <Typography style={{ fontFamily: "Roboto" }} paragraph>
          It's very simple! You just hit the refresh button and MUITA will
          provide you with a new theme, including fonts (provided by Google
          Fonts), colors and an image. If you like certain elements of it, you
          can lock them in the settings menu and they will remain upon
          subsequent refreshes. You can narrow the random search parameters via
          the settings menu. The images are provided by the Unsplash API and
          even though they are royalty-free, they are meant as more of a guide.
        </Typography>
        <Divide />
        <Typography variant="h4" style={{ fontFamily: "Roboto" }}>
          "Can I save my theme?.."
        </Typography>
        <Typography style={{ fontFamily: "Roboto" }} paragraph>
          Absolutely! For now, you can save (and of course load!) them to the
          storage built into your browser. In the future, there are plans to
          offer online storage/sharing of themes.
        </Typography>
        <Divide />
        <Typography variant="h4" style={{ fontFamily: "Roboto" }}>
          "I would like to help improve MUITA..."
        </Typography>
        <Typography style={{ fontFamily: "Roboto" }} paragraph>
          Great! Please feel free to fork the repo on GitHub and play with it!
          There is a lot more functionality that could be built into the app,
          but time is my enemy! ;)
        </Typography>
        <Divide />
        <Typography variant="h4" style={{ fontFamily: "Roboto" }}>
          "I would like to make an inquiry ..."
        </Typography>
        <Typography style={{ fontFamily: "Roboto" }} paragraph>
          If you would like to report a bug, donate to the project, help develop
          MUITA, hire me, or get in touch with me for any other reason, my email
          address is{" "}
          <Link href="mailto:fuertenerd@gmail.com.">fuertenerd@gmail.com</Link>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button style={{ fontFamily: "roboto" }} endIcon={<GitHub />}>
          View on GitHub
        </Button>
        <Button style={{ fontFamily: "roboto" }} endIcon={<PlayArrow />}>
          Start playing
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Divide = () => {
  return (
    <Box my={2}>
      <Divider />
    </Box>
  );
};

export default Welcome;

import React, { useEffect, useState } from "react";
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
  const [textFields, setTextFields] = useState({
    heading: "",
    body: "",
  });

  useEffect(() => {
    if (isOpen) {
      setTextFields({
        heading: current.hero.text.heading,
        body: current.hero.text.body,
      });
    }
  }, [isOpen]);
  return (
    <Dialog>
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
          Edit hero text
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TextField label="Heading" />
      </DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(HeroText);

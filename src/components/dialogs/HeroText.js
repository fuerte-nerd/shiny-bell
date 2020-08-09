import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setHeroText } from "../../state/display/actions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import Theme from "../Theme";

const HeroText = ({ dispatch, isOpen, current }) => {
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
    //eslint-disable-next-line
  }, [isOpen]);

  const handleChange = (e) => {
    const { id, value } = e.currentTarget;
    setTextFields({ ...textFields, [id]: value });
  };

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "cancel":
        handleClose();
        break;
      case "update":
        new Theme({
          ...current,
          hero: {
            ...current.hero,
            text: {
              heading: textFields.heading,
              body: textFields.body,
            },
          },
        }).commit();
        handleClose();
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    dispatch(setHeroText(false));
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
          Edit hero text
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Heading"
          value={textFields.heading}
          onChange={handleChange}
          id="heading"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Body"
          multiline
          value={textFields.body}
          onChange={handleChange}
          id="body"
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button
          style={{ fontFamily: "Roboto" }}
          id="cancel"
          onClick={handleClick}
        >
          Cancel
        </Button>
        <Button
          style={{ fontFamily: "Roboto" }}
          id="update"
          onClick={handleClick}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.heroText,
  current: state.appState.current,
});

export default connect(mapStateToProps)(HeroText);

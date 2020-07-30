import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { setSave } from "../../state/display/actions";
import Theme from "../Theme";

const Save = ({ dispatch, filename, isOpen, current }) => {
  const [newFilename, setNewFilename] = useState(filename);
  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    setNewFilename(e.currentTarget.value);
  };

  const handleClick = (e) => {
    let theme;
    const { id } = e.currentTarget;
    switch (id) {
      case "cancel":
        dispatch(setSave(false));
        break;
      case "save":
        theme = new Theme({ ...current, filename: newFilename });
        theme
          .save()
          .then(() => theme.commit())
          .catch(() => {});
        break;
      case "save-replace":
        theme = new Theme({ ...current, filename: newFilename });
        theme
          .save(true)
          .then(() => theme.commit())
          .catch(() => {});
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (isOpen) {
      setNewFilename(filename);
    }
  }, [isOpen]);

  return (
    <Dialog
      maxWidth="lg"
      open={isOpen}
      onClose={() => dispatch(setSave(false))}
    >
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
          Save current theme
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          defaultValue={newFilename}
          value={newFilename}
          onChange={handleChange}
          InputProps={{ style: { fontFamily: "Roboto" } }}
          InputLabelProps={{ style: { fontFamily: "Roboto" } }}
        />
        <Alert
          severity="error"
          action={
            <Button id="save-replace" onClick={handleClick}>
              Yes
            </Button>
          }
        >
          File name already exists. Replace?
        </Alert>
      </DialogContent>
      <DialogActions>
        <Button
          id="cancel"
          onClick={handleClick}
          style={{ fontFamily: "Roboto" }}
        >
          Cancel
        </Button>
        <Button
          id="save"
          onClick={handleClick}
          style={{ fontFamily: "Roboto" }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  filename: state.appState.current.filename,
  isOpen: state.display.save,
  current: state.appState.current,
});

export default connect(mapStateToProps)(Save);

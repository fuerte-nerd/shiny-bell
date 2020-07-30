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
import { setSave } from "../../state/display/actions";
import Theme from "../Theme";

const Save = ({ dispatch, filename, isOpen, current }) => {
  const [newFilename, setNewFilename] = useState(filename);
  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    setNewFilename(e.currentTarget.value);
  };

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "cancel":
        dispatch(setSave(false));
        break;
      case "save":
        new Theme({ ...current, filename: newFilename }).commit().save();
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

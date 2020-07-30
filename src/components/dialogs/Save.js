import React from "react";
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

const Save = ({ dispatch, name, isOpen, current }) => {
  const handleChange = (e) => {};

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "cancel":
        dispatch(setSave(false));
        break;
      case "save":
        if (localStorage.getItem("savedThemes")) {
          const previousSavedThemes = JSON.parse(
            localStorage.getItem("savedThemes")
          );
          localStorage.setItem(
            "savedThemes",
            JSON.stringify([...previousSavedThemes, current])
          );
        } else {
          localStorage.setItem("savedThemes", JSON.stringify([current]));
        }

        break;
      default:
        break;
    }
  };

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
          defaultValue={name}
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
  name: state.appState.current.name,
  isOpen: state.display.save,
  current: state.appState.current,
});

export default connect(mapStateToProps)(Save);

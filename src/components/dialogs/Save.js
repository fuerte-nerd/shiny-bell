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

const Save = ({ dispatch, name, isOpen }) => {
  const handleChange = (e) => {};
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
        <Button style={{ fontFamily: "Roboto" }}>Cancel</Button>
        <Button style={{ fontFamily: "Roboto" }}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  name: state.appState.current.name,
  isOpen: state.display.save,
});

export default connect(mapStateToProps)(Save);

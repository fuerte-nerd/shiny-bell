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

const Save = ({ dispatch, name }) => {
  const handleChange = (e) => {};
  return (
    <Dialog maxWidth="lg" open={true}>
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
          Save current theme
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TextField label="Name" defaultValue={name} onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  name: state.appState.current.name,
});

export default connect(mapStateToProps)(Save);

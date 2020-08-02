import React, { useState } from "react";
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

const Rename = ({ dispatch, title }) => {
  const [siteTitle, setSiteTitle] = useState(title);
  return (
    <Dialog fullWidth maxWidth="sm" open={true}>
      <DialogTitle>
        <Typography variant="h6">Edit site title</Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Site Title"
          fullWidth
          value={siteTitle}
          autoFocus
          style={{ fontFamily: "Roboto" }}
        />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button> <Button>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  title: state.appState.current.name,
});

export default connect(mapStateToProps)(Rename);

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
    <Dialog fullWidth maxWidth="xs" open={true}>
      <DialogTitle>
        <Typography variant="h6" style={{ fontFamily: "Roboto" }}>
          Edit site title
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Site Title"
          fullWidth
          defaultValue={siteTitle}
          autoFocus
          style={{ fontFamily: "Roboto" }}
        />
      </DialogContent>
      <DialogActions>
        <Button style={{ fontFamily: "Roboto" }}>Cancel</Button>{" "}
        <Button style={{ fontFamily: "Roboto" }}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  title: state.appState.current.name,
});

export default connect(mapStateToProps)(Rename);

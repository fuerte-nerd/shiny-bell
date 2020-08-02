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
import { setRename } from "../../state/display/actions";

const Rename = ({ dispatch, isOpen, title }) => {
  const [siteTitle, setSiteTitle] = useState(title);

  const handleChange = (e) => {
    setSiteTitle(e.currentTarget.value);
  };

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "cancel":
        //handle cancel
        break;
      case "update":
        //handle update
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    dispatch(setRename(false));
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={isOpen} onClose={handleClose}>
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
          onChange={handleChange}
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
  isOpen: state.display.rename,
  title: state.appState.current.name,
});

export default connect(mapStateToProps)(Rename);

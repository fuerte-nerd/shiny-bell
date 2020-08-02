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
import { setRename, setLoadingScreen } from "../../state/display/actions";
import Theme from "../Theme";

const Rename = ({ dispatch, isOpen, title, current }) => {
  const [siteTitle, setSiteTitle] = useState(title);

  const handleChange = (e) => {
    setSiteTitle(e.currentTarget.value);
  };

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "cancel":
        handleClose();
        break;
      case "update":
        dispatch(setLoadingScreen(true));
        const theme = new Theme({ ...current, name: siteTitle });
        theme
          .getImage()
          .then(() =>
            theme.commit().then(() => dispatch(setLoadingScreen(false)))
          );
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
        <Button
          onClick={handleClick}
          id="update"
          style={{ fontFamily: "Roboto" }}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.rename,
  title: state.appState.current.name,
  current: state.appState.current,
});

export default connect(mapStateToProps)(Rename);

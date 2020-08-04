import React from "react";
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
import { setImageSearch } from "../../state/display/actions";

const ImageSearch = ({ dispatch, isOpen, current }) => {
  const handleClose = () => {
    dispatch(setImageSearch(false));
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle disableTypography>
        <Typography variant="h5">Image search</Typography>
      </DialogTitle>
      <DialogContent>
        <TextField autoFocus />
        <Button>Search</Button>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.ImageSearch,
  current: state.appState.current,
});

export default connect(mapStateToProps)(ImageSearch);

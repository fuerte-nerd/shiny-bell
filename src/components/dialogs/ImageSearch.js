import React from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { setImageSearch } from "../../state/display/actions";

const ImageSearch = ({ dispatch, isOpen, current }) => {
  const handleClose = () => {
    dispatch(setImageSearch(false));
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
          Image search
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TextField autoFocus InputProps={{ style: { fontFamily: "Roboto" } }} />
        <IconButton>
          <Search />
        </IconButton>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.imageSearch,
  current: state.appState.current,
});

export default connect(mapStateToProps)(ImageSearch);

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
  InputAdornment,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { setImageSearchKeywords } from "../../state/display/actions";

const ImageSearchKeywords = ({ dispatch, isOpen, current }) => {
  const handleClose = () => {
    dispatch(setImageSearchKeywords(false));
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
          Image search
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          autoFocus
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
            style: { fontFamily: "Roboto" },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button style={{ fontFamily: "Roboto" }}>Cancel</Button>
        <Button style={{ fontFamily: "Roboto" }}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.imageSearch,
  current: state.appState.current,
});

export default connect(mapStateToProps)(ImageSearchKeywords);

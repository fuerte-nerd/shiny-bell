import React, { useEffect } from "react";
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
import { setImageSearchKeywords } from "../../state/display/actions";

const ImageSearchKeywords = ({ dispatch, isOpen, current, searchKeywords }) => {
  const handleClose = () => {
    dispatch(setImageSearchKeywords(false));
  };

  useEffect(() => {
    if (!isOpen) {
      if (searchKeywords.length === 0) {
        dispatch(setImageSearchKeywords(current.name));
      }
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
          Image search keyword(s)
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          autoFocus
          InputProps={{
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
  searchKeywords: state.components.heroImage.searchKeywords,
});

export default connect(mapStateToProps)(ImageSearchKeywords);

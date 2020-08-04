import React, { useEffect, useState } from "react";
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
import { setImageSearch } from "../../state/display/actions";
import { setHeroImgSearchKeywords } from "../../state/components/actions";

const ImageSearchKeywords = ({ dispatch, isOpen, current, searchKeywords }) => {
  const [tfValue, setTfValue] = useState("");

  const handleChange = (e) => {
    setTfValue(e.currentTarget.value);
  };

  const handleClose = () => {
    dispatch(setImageSearch(false));
  };

  useEffect(() => {
    if (!isOpen) {
      if (searchKeywords.length === 0) {
        dispatch(setHeroImgSearchKeywords(current.name));
      }
    } else {
      setTfValue(searchKeywords);
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
          value={tfValue}
          onChange={handleChange}
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

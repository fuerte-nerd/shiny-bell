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
import { setImageSearch, setLoadingScreen } from "../../state/display/actions";
import Theme from "../Theme";

const ImageSearchKeywords = ({ dispatch, isOpen, current, searchKeywords }) => {
  const [tfValue, setTfValue] = useState("");

  const handleChange = (e) => {
    setTfValue(e.currentTarget.value);
  };

  const handleClose = () => {
    dispatch(setImageSearch(false));
  };

  useEffect(() => {
    if (isOpen) {
      setTfValue(searchKeywords.replace(/\+/g, " "));
    }
  }, [isOpen]);

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    const theme = Object.assign({}, current);
    switch (id) {
      case "cancel":
        handleClose();
        break;
      case "update":
        dispatch(setLoadingScreen(true));
        if (tfValue.length === 0) {
          theme.components.heroImage.searchKeywords = current.name.replace(
            / /g,
            "+"
          );
        } else {
          theme.components.heroImage.searchKeywords = tfValue.replace(
            / /g,
            "+"
          );
        }
        const newTheme = new Theme(theme);
        newTheme
          .getImage()
          .then(() =>
            newTheme.commit().then(() => dispatch(setLoadingScreen(false)))
          );
        break;
    }
  };

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

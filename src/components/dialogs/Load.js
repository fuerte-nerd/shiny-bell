import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

const Load = ({ dispatch, isOpen }) => {
  const [savedThemes, setSavedThemes] = useState(null);
  useEffect(() => {
    const localStorageThemes = localStorage.getItem("saved");
    if (localStorageThemes) {
      setSavedThemes(JSON.parse(localStorageThemes));
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen}>
      <DialogTitle>
        <Typography style={{ fontFamily: "Roboto" }}>Load theme</Typography>
      </DialogTitle>
      <DialogContent>{savedThemes && savedThemes.map((i) => {})}</DialogContent>
      <DialogActions>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.load,
});

export default connect(mapStateToProps)(Load);

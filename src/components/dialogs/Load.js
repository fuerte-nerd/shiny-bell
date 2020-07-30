import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { setLoad } from "../../state/display/actions";
import moment from "moment";

const Load = ({ dispatch, isOpen }) => {
  const [savedThemes, setSavedThemes] = useState(null);
  useEffect(() => {
    const localStorageThemes = localStorage.getItem("saved");
    if (localStorageThemes) {
      setSavedThemes(JSON.parse(localStorageThemes));
    }
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(setLoad(false))}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        <Typography style={{ fontFamily: "Roboto" }}>Load theme</Typography>
      </DialogTitle>

      <DialogContent>
        <List dense>
          {savedThemes
            ? savedThemes.map((i) => {
                return (
                  <ListItem button>
                    <ListItemText
                      primary={i.filename}
                      secondary={`Last modified ${moment(
                        i.lastModified
                      ).fromNow()}`}
                    />
                  </ListItem>
                );
              })
            : null}
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => dispatch(setLoad(false))}
          style={{ fontFamily: "Roboto" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.load,
});

export default connect(mapStateToProps)(Load);

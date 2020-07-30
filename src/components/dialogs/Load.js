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
import { setLoad, setLoadingScreen } from "../../state/display/actions";
import moment from "moment";
import Theme from "../Theme";
import { setPastAppStates } from "../../state/appState/actions";

const Load = ({ dispatch, isOpen, past, current }) => {
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
                  <ListItem
                    button
                    id={i.id}
                    onClick={() => {
                      dispatch(setLoadingScreen(true));
                      const theme = new Theme(i);
                      theme.validateFonts().then(() => {
                        dispatch(setPastAppStates([...past, current]));
                        theme.commit().then(() => {
                          dispatch(setLoadingScreen(false));
                          dispatch(setLoad(false));
                        });
                      });
                    }}
                  >
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
  past: state.appState.past,
  current: state.appState.current,
});

export default connect(mapStateToProps)(Load);

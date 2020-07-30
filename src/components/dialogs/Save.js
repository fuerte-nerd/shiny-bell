import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import {
  setSaveOpen,
  setSaveError,
  setSaveSuccess,
} from "../../state/display/actions";
import Theme from "../Theme";

const Save = ({ dispatch, filename, isOpen, err, success, current }) => {
  const [newFilename, setNewFilename] = useState(filename);
  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    setNewFilename(e.currentTarget.value);
  };

  const handleClick = (e) => {
    let theme;
    const { id } = e.currentTarget;
    switch (id) {
      case "cancel":
        dispatch(setSaveOpen(false));
        break;
      case "save":
        theme = new Theme({ ...current, filename: newFilename });
        theme
          .save()
          .then(() => {
            dispatch(setSaveOpen(false));
            dispatch(setSaveSuccess(true));
            theme.commit();
          })
          .catch(() => {
            dispatch(setSaveError(true));
          });
        break;
      case "save-replace":
        theme = new Theme({ ...current, filename: newFilename });
        theme.save(true).then(() => {
          dispatch(setSaveOpen(false));
          dispatch(setSaveSuccess(true));
          theme.commit();
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (isOpen) {
      setNewFilename(filename);
    } else {
      dispatch(setSaveError(false));
    }
    //eslint-disable-next-line
  }, [isOpen]);

  return (
    <>
      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => dispatch(setSaveSuccess(false))}
      >
        <Alert style={{ fontFamily: "Roboto" }}>Successfully saved!</Alert>
      </Snackbar>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={isOpen}
        onClose={() => dispatch(setSaveOpen(false))}
      >
        <DialogTitle disableTypography>
          <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
            Save current theme
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            defaultValue={newFilename}
            value={newFilename}
            onChange={handleChange}
            InputProps={{ style: { fontFamily: "Roboto" } }}
            InputLabelProps={{ style: { fontFamily: "Roboto" } }}
          />
          {err && (
            <Alert
              severity="error"
              style={{ fontFamily: "Roboto", marginTop: 5 }}
              action={
                <Button
                  style={{ fontFamily: "Roboto" }}
                  id="save-replace"
                  onClick={handleClick}
                >
                  Yes
                </Button>
              }
            >
              File name already exists. Replace?
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            id="cancel"
            onClick={handleClick}
            style={{ fontFamily: "Roboto" }}
          >
            Cancel
          </Button>
          <Button
            id="save"
            onClick={handleClick}
            style={{ fontFamily: "Roboto" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state) => ({
  filename: state.appState.current.filename,
  isOpen: state.display.save.isOpen,
  err: state.display.save.error,
  success: state.display.save.success,
  current: state.appState.current,
});

export default connect(mapStateToProps)(Save);

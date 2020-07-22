import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {} from "../../state/actions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Select,
  Snackbar,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const FontPicker = (props) => {
  const { dispatch } = props;
  const { isOpen, section, error } = props;
  const handleChange = (e) => {
    const { id, checked } = e.currentTarget;
    if (checked) {
    } else {
      dispatch();
    }
  };

  const handleClose = () => {
    dispatch();
  };

  useEffect(() => {
    if (fontPicker.open) {
    }
    //eslint-disable-next-line
  }, [fontPicker.open]);
  return (
    <Dialog open={fontPicker.open} onClose={handleClose}>
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}></Typography>
      </DialogTitle>
      <DialogContent>
        <Snackbar
          open={fontPicker.notFound}
          autoHideDuration={6000}
          onClose={() =>
            dispatch(setFontPicker({ ...fontPicker, notFound: false }))
          }
        >
          <Alert style={{ fontFamily: "Roboto" }} severity="error">
            Sorry, but we were unable to load that font. Please select a
            different font.
          </Alert>
        </Snackbar>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                id="serif"
                onChange={handleChange}
                checked={fontPicker && fontPicker.categories.includes("serif")}
              />
            }
            label="Serif"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="sans-serif"
                onChange={handleChange}
                checked={fontPicker.categories.includes("sans-serif")}
              />
            }
            label="Sans Serif"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="display"
                onChange={handleChange}
                checked={fontPicker.categories.includes("display")}
              />
            }
            label="Display"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="handwriting"
                onChange={handleChange}
                checked={fontPicker.categories.includes("handwriting")}
              />
            }
            label="Handwriting"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="monospace"
                onChange={handleChange}
                checked={fontPicker.categories.includes("monospace")}
              />
            }
            label="Monospace"
          />
        </FormGroup>
        {font && headerFont && (
          <Select
            fullWidth
            native
            value={fontPicker.section === "bodyFont" ? font.id : headerFont.id}
            onChange={(e) => {
              dispatch(setRandomFontSelect(false));
              const revertFont =
                fontPicker.section === "bodyFont" ? font : headerFont;
              dispatch(
                setFontPicker({
                  ...fontPicker,
                  selection: e.currentTarget.value,
                  revertFont,
                })
              );
              dispatch(setFontLoading(true));
            }}
          >
            {fonts &&
              fonts.map((font, ind) => {
                return fontPicker.categories.includes(font.category) ? (
                  <option key={ind} value={font.id}>
                    {font.themeName}
                  </option>
                ) : null;
              })}
          </Select>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          style={{ fontFamily: "Roboto", textTransform: "uppercase" }}
          onClick={() => {
            twoFonts
              ? fontPicker.section === "bodyFont"
                ? dispatch(setFont(cancelFont))
                : dispatch(setHeaderFont(cancelFont))
              : dispatch(setFont(cancelFont));
            handleClose();
          }}
        >
          Cancel
        </Button>
        <Button
          style={{ fontFamily: "Roboto", textTransform: "uppercase" }}
          onClick={handleClose}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.fontSelector,
  section: state.fontSelector.section,
  error: state.fontSelector.error,
});

export default connect(mapStateToProps)(FontPicker);

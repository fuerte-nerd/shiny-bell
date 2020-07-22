import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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
import { setError, setCategoryFilters } from "../../state/fontSelector/actions";
import { setFontSelector } from "../../state/display/actions";
import { setComponentsLoading } from "../../state/components/actions";
import FontLoader from "../../functions/FontHelper";
import { setCurrentAppState } from "../../state/appState/actions";

const FontPicker = (props) => {
  const { dispatch } = props;
  const {
    isOpen,
    section,
    error,
    filters,
    fonts,
    body,
    header,
    primary,
    secondary,
  } = props;

  const [initialFont, setInitialFont] = useState();

  const handleChange = (e) => {
    const { id, checked } = e.currentTarget;
    if (checked) {
      dispatch(setCategoryFilters([...filters, id]));
    } else {
      dispatch(
        setCategoryFilters(
          filters.filter((i) => {
            return i === id ? null : i;
          })
        )
      );
    }
  };

  const handleSelect = (e) => {
    const v = e.currentTarget.value;
    const newFont = new FontLoader(section, fonts[v]);
    newFont
      .validate()
      .then(() => newFont.deploy())
      .catch((err) => console.log(err));
  };

  const handleClose = () => {
    if (initialFont !== props[section]) {
      dispatch(
        setCurrentAppState({
          primary,
          secondary,
          header,
          body,
        })
      );
    }
    dispatch(setFontSelector(false));
  };

  const handleCancel = () => {
    const revertFont = new FontLoader(section, initialFont);
    revertFont
      .validate()
      .then(() => {
        revertFont.deploy();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (isOpen) {
      setInitialFont(section === "body" ? body : header);
    }
    //eslint-disable-next-line
  }, [isOpen]);
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}></Typography>
      </DialogTitle>
      <DialogContent>
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => dispatch(setError(null))}
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
                checked={isOpen && filters.includes("serif")}
              />
            }
            label="Serif"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="sans-serif"
                onChange={handleChange}
                checked={filters.includes("sans-serif")}
              />
            }
            label="Sans Serif"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="display"
                onChange={handleChange}
                checked={filters.includes("display")}
              />
            }
            label="Display"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="handwriting"
                onChange={handleChange}
                checked={filters.includes("handwriting")}
              />
            }
            label="Handwriting"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="monospace"
                onChange={handleChange}
                checked={filters.includes("monospace")}
              />
            }
            label="Monospace"
          />
        </FormGroup>
        {body && header && (
          <Select
            fullWidth
            native
            value={section === "body" ? body.id : header.id}
            onChange={handleSelect}
          >
            {fonts &&
              fonts.map((font, ind) => {
                return filters.includes(font.category) ? (
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
          onClick={handleCancel}
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
  filters: state.fontSelector.categoryFilters,
  error: state.fontSelector.error,
  fonts: state.library.fonts,
  twoFonts: state.settings.twoFonts,
  body: state.components.fonts.body.currentFont,
  header: state.components.fonts.header.currentFont,
  primary: state.components.palette.primary,
  secondary: state.components.palette.secondary,
});

export default connect(mapStateToProps)(FontPicker);

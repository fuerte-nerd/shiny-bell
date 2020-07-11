import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  setFontPicker,
  setFont,
  setHeaderFont,
  setRandomFontSelect,
} from "../state/actions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

const FontPicker = ({
  dispatch,
  fontPicker,
  fonts,
  font,
  headerFont,
  twoFonts,
}) => {
  const handleChange = (e) => {
    const { id, checked } = e.currentTarget;
    if (checked) {
      dispatch(
        setFontPicker({
          ...fontPicker,
          categories: [...fontPicker.categories, id],
        })
      );
    } else {
      dispatch(
        setFontPicker({
          ...fontPicker,
          categories: fontPicker.categories.filter((i) => {
            return i !== id ? id : null;
          }),
        })
      );
    }
  };

  const handleClose = () => {
    dispatch(
      setFontPicker({
        ...fontPicker,
        categories: [
          "serif",
          "sans-serif",
          "display",
          "handwriting",
          "monospace",
        ],
        open: false,
      })
    );
  };

  const [cancelFont, setCancelFont] = useState();

  useEffect(() => {
    if (fontPicker.open) {
      setCancelFont(fontPicker.section === "bodyFont" ? font : headerFont);
    }
  }, [fontPicker.open]);
  return (
    <Dialog open={fontPicker.open} onClose={handleClose}>
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
          {twoFonts
            ? fontPicker.section === "bodyFont"
              ? "Select body font"
              : "Select header font"
            : "Select font"}
        </Typography>
      </DialogTitle>
      <DialogContent>
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
        <Select
          fullWidth
          native
          value={fontPicker.section === "bodyFont" ? font.id : headerFont.id}
          onChange={(e) => {
            dispatch(setRandomFontSelect(false));
            dispatch(
              setFontPicker({ ...fontPicker, selection: e.currentTarget.value })
            );
          }}
        >
          {fonts &&
            fonts.map((font) => {
              return fontPicker.categories.includes(font.category) ? (
                <option value={font.id}>{font.themeName}</option>
              ) : null;
            })}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button
          style={{ fontFamily: "Roboto" }}
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
        <Button style={{ fontFamily: "Roboto" }} onClick={handleClose}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  fonts: state.fonts,
  font: state.font,
  headerFont: state.headerFont,
  fontPicker: state.fontPicker,
  twoFonts: state.twoFonts,
});

export default connect(mapStateToProps)(FontPicker);

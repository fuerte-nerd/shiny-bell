import React from "react";
import { connect } from "react-redux";
import { setFontPicker } from "../state/actions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Button,
} from "@material-ui/core";

const FontPicker = ({ dispatch, fontPicker, fonts, font, headerFont }) => {
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
  return (
    <Dialog
      open={true}
      onClose={() => dispatch(setFontPicker({ open: false, section: "" }))}
      style={{ fontFamily: "Roboto" }}
    >
      <DialogTitle>Select font...</DialogTitle>
      <DialogContent>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                id="serif"
                onChange={handleChange}
                checked={fontPicker.categories.includes("serif")}
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
          value={fontPicker.section === "bodyFont" ? font.id : headerFont.id}
        >
          {fonts &&
            fonts.map((font) => {
              return fontPicker.categories.includes(font.category) ? (
                <MenuItem value={font.id}>{font.themeName}</MenuItem>
              ) : null;
            })}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  fonts: state.fonts,
  font: state.font,
  headerFont: state.headerFont,
  fontPicker: state.fontPicker,
});

export default connect(mapStateToProps)(FontPicker);

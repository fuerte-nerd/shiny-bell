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
  Button,
} from "@material-ui/core";

const FontPicker = ({ dispatch, fontPicker, fonts, font, headerFont }) => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <Dialog
      open={fontPicker}
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
          native
          value={fontPicker.section === "bodyFont" ? font.id : headerFont.id}
        >
          {fonts &&
            fonts.map((font) => (
              <option value={font.id}>{font.themeName}</option>
            ))}
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

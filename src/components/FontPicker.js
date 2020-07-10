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

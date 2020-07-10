import React from "react";
import { connect } from "react-redux";
import { setFontPicker } from "../state/actions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  FormControl,
  Button,
} from "@material-ui/core";

const FontPicker = ({ dispatch, fontPicker, fonts, font, headerFont }) => {
  return (
    <Dialog
      open={fontPicker}
      onClose={() => dispatch(setFontPicker({ open: false, section: "" }))}
    >
      <DialogTitle>Select font...</DialogTitle>
      <DialogContent>
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

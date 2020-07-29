import React from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

const Categories = ({ dispatch, twoFonts, isOpen, section }) => {
  return (
    <Dialog open={isOpen} maxWidth="lg">
      <DialogTitle>Set {twoFonts ? section : null} font filters</DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  id="serif"
                  size="small"
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
                  size="small"
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
                  size="small"
                  onChange={handleChange}
                  checked={filters.includes("display")}
                />
              }
              label="Display"
            />
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  id="handwriting"
                  size="small"
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
                  size="small"
                  onChange={handleChange}
                  checked={filters.includes("monospace")}
                />
              }
              label="Monospace"
            />
          </FormGroup>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  twoFonts: state.appState.current.twoFonts,
  isOpen: state.display.fontCategorySelector.isOpen,
  section: state.display.fontCategorySelector.section,
});

export default connect(mapStateToProps)(Categories);

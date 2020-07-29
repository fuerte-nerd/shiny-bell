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
  Typography,
  Button,
} from "@material-ui/core";
import {
  setBodyFontCategories,
  setHeaderFontCategories,
} from "../../state/components/actions";
import { setFontCategorySelectorOpen } from "../../state/display/actions";

const Categories = ({ dispatch, filters, twoFonts, isOpen, section }) => {
  const handleChange = (e) => {
    const { id } = e.currentTarget;
    switch (section) {
      case "body":
        if (!filters[section].includes(id)) {
          dispatch(setBodyFontCategories([...filters[section], id]));
        } else {
          dispatch(
            setBodyFontCategories(
              filters[section].filter((i) => {
                return i !== id;
              })
            )
          );
        }
        break;
      case "header":
        if (!filters[section].includes(id)) {
          dispatch(setHeaderFontCategories([...filters[section], id]));
        } else {
          dispatch(
            setHeaderFontCategories(
              filters[section].filter((i) => {
                return i !== id;
              })
            )
          );
        }
        break;
      default:
        break;
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(setFontCategorySelectorOpen(false))}
      maxWidth="lg"
    >
      <DialogTitle disableTypography>
        <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
          Select {twoFonts ? section : null} font search categories
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  id="serif"
                  size="small"
                  onChange={handleChange}
                  checked={filters[section].includes("serif")}
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
                  checked={filters[section].includes("sans-serif")}
                />
              }
              label="Sans-serif"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="display"
                  size="small"
                  onChange={handleChange}
                  checked={filters[section].includes("display")}
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
                  checked={filters[section].includes("handwriting")}
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
                  checked={filters[section].includes("monospace")}
                />
              }
              label="Monospace"
            />
          </FormGroup>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          style={{ fontFamily: "Roboto" }}
          onClick={() => dispatch(setFontCategorySelectorOpen(false))}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  twoFonts: state.appState.current.twoFonts,
  isOpen: state.display.fontCategorySelector.isOpen,
  section: state.display.fontCategorySelector.section,
  filters: {
    body: state.components.fonts.body.searchCategories,
    header: state.components.fonts.header.searchCategories,
  },
});

export default connect(mapStateToProps)(Categories);

import React from "react";
import { connect } from "react-redux";
import { Dialog, Box, CircularProgress } from "@material-ui/core";
import AppTypography from "./AppTypography";
import loadFonts from "../functions/loadFonts";

const FontLoadScreen = ({
  fonts,
  twoFonts,
  fontLoading,
  staticFontLoaded,
  locked,
  randomFontSelect,
  fontPicker,
}) => {
  const handleEntered = () => {
    if (randomFontSelect) {
      if (twoFonts) {
        !locked.headerFont && fonts && loadFonts();
      } else {
        !locked.bodyFont && fonts && loadFonts("body");
      }
    } else {
      if (fontPicker.section === "bodyFont") {
        return loadFonts("body", false, fonts[fontPicker.selection]);
      } else {
        return loadFonts("header", false, fonts[fontPicker.selection]);
      }
    }
  };

  return (
    <Dialog
      fullScreen
      open={fontLoading}
      onEntered={handleEntered}
      transitionDuration={{ enter: 0, exit: 20 }}
    >
      <Box
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <CircularProgress size={80} color="primary" />
        {staticFontLoaded && (
          <Box mt="15px">
            <AppTypography>
              Fetching new{` `}
              {twoFonts
                ? locked.bodyFont
                  ? "header font"
                  : !locked.headerFont
                  ? "fonts"
                  : "body font"
                : "font"}
              ...
            </AppTypography>
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  fontLoading: state.fontLoading,
  fonts: state.fonts,
  staticFontLoaded: state.staticFontLoaded,
  twoFonts: state.twoFonts,
  locked: state.locked,
  randomFontSelect: state.randomFontSelect,
  fontPicker: state.fontPicker,
});

export default connect(mapStateToProps)(FontLoadScreen);

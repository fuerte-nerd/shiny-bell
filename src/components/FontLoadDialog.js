import React from "react";
import { connect } from "react-redux";
import { setFont, setHeaderFont } from "../state/actions";
import { Dialog, Box, CircularProgress } from "@material-ui/core";
import AppTypography from "./AppTypography";
import randomFont from "../functions/randomFont";

const FontLoadDialog = ({
  dispatch,
  fonts,
  twoFonts,
  fontLoading,
  staticFontLoaded,
  locked,
  randomFontSelect,
}) => {
  const handleEntered = () => {
    if (randomFontSelect) {
      !locked.bodyFont && fonts && dispatch(setFont(randomFont()));
      if (twoFonts) {
        !locked.headerFont && fonts && dispatch(setHeaderFont(randomFont()));
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
});

export default connect(mapStateToProps)(FontLoadDialog);

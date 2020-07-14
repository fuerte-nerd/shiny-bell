import React from "react";
import { connect } from "react-redux";
import { Typography, Box } from "@material-ui/core";

const ParagraphPreview = ({ bodyFont, headerFont, twoFonts }) => {
  return (
    <Box>
      <Typography variant="h1">
        Welcome to your new Material-UI theme!
      </Typography>
      <Typography paragraph>
        The {twoFonts ? "body font" : "font"} is {bodyFont}
        {twoFonts && ` and the header font is ${headerFont}`}.
      </Typography>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  bodyFont: state.font,
  headerFont: state.headerFont,
  twoFonts: state.twoFonts,
});

export default connect(mapStateToProps)(ParagraphPreview);

import React from "react";
import { connect } from "react-redux";
import { Divider, Typography, Box } from "@material-ui/core";

const ParagraphPreview = ({ bodyFont, headerFont, twoFonts }) => {
  return (
    <>
      <Box my={4}>
        <Typography variant="h1">
          Welcome to your new Material-UI theme!
        </Typography>
        <Typography paragraph>
          The {twoFonts ? "body font" : "font"} is {bodyFont.themeName}
          {twoFonts && ` and the header font is ${headerFont.themeName}`}.
        </Typography>
      </Box>
      <Divider />
    </>
  );
};

const mapStateToProps = (state) => ({
  bodyFont: state.font,
  headerFont: state.headerFont,
  twoFonts: state.twoFonts,
});

export default connect(mapStateToProps)(ParagraphPreview);

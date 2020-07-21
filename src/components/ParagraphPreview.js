import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Divider, Typography, Box } from "@material-ui/core";
import { setPrimaryColorName, setSecondaryColorName } from "../state/actions";

const ParagraphPreview = ({
  dispatch,
  bodyFont,
  headerFont,
  twoFonts,
  primary,
  secondary,
  primaryColorName,
  secondaryColorName,
  backgrounds,
}) => {
  return (
    <>
      <Box mb={2} bgcolor={`transparent`}>
        <>
          <Typography variant="h1">Welcome to your new theme!</Typography>
          <Typography paragraph>
            The {twoFonts ? `header font ` : `font `} is{" "}
            {twoFonts
              ? `${headerFont.themeName} and the body font is ${bodyFont.themeName}`
              : bodyFont.themeName}
            . The primary color is {primaryColorName} and the secondary color is{" "}
            {secondaryColorName}.
          </Typography>
        </>
      </Box>
      <Divider />
    </>
  );
};

const mapStateToProps = (state) => ({
  bodyFont: state.components.fonts.body.currentFont,
  headerFont: state.components.fonts.header.currentFont,
  twoFonts: state.settings.twoFonts,
  primaryColorName: state.components.palette.primary.name,
  secondaryColorName: state.components.palette.secondary.name,
  backgrounds: state.backgrounds,
});

export default connect(mapStateToProps)(ParagraphPreview);

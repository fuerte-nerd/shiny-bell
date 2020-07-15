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
  useEffect(() => {
    axios
      .get(`https://api.color.pizza/v1/${primary.substr(1)}`)
      .then((response) => {
        dispatch(setPrimaryColorName(response.data.colors[0].name));
      });
    //eslint-disable-next-line
  }, [primary]);

  useEffect(() => {
    axios
      .get(`https://api.color.pizza/v1/${secondary.substr(1)}`)
      .then((response) => {
        dispatch(setSecondaryColorName(response.data.colors[0].name));
      });
    //eslint-disable-next-line
  }, [secondary]);

  return (
    <>
      <Box
        mb={2}
        bgcolor={backgrounds.box}
        p={backgrounds.box !== "none" ? 2 : 0}
      >
        {bodyFont && headerFont && (
          <>
            <Typography variant="h1">Welcome to your new theme!</Typography>
            <Typography paragraph>
              The {twoFonts ? "body font" : "font"} is {bodyFont.themeName}
              {twoFonts && ` and the header font is ${headerFont.themeName}`}.
              The primary color is {primaryColorName} and the secondary color is{" "}
              {secondaryColorName}.
            </Typography>
          </>
        )}
      </Box>
      <Divider />
    </>
  );
};

const mapStateToProps = (state) => ({
  bodyFont: state.font,
  headerFont: state.headerFont,
  twoFonts: state.twoFonts,
  primary: state.primary,
  secondary: state.secondary,
  primaryColorName: state.primaryColorName,
  secondaryColorName: state.secondaryColorName,
  backgrounds: state.backgrounds,
});

export default connect(mapStateToProps)(ParagraphPreview);

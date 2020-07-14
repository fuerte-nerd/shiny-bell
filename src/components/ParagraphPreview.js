import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Divider, Typography, Box } from "@material-ui/core";
import { setColorNames } from "../state/actions";

const ParagraphPreview = ({
  dispatch,
  colorNames,
  bodyFont,
  headerFont,
  twoFonts,
  primary,
  secondary,
}) => {
  useEffect(() => {
    axios
      .get(`https://api.color.pizza/v1/${primary.substr(1)}`)
      .then((response) =>
        dispatch(
          setColorNames({
            ...colorNames,
            primary: response.data.colors[0].name,
          })
        )
      );
  }, [primary]);

  useEffect(() => {
    axios
      .get(`https://api.color.pizza/v1/${secondary.substr(1)}`)
      .then((response) =>
        dispatch(
          setColorNames({
            ...colorNames,
            secondary: response.data.colors[0].name,
          })
        )
      );
  }, [secondary]);

  return (
    <>
      <Box my={4}>
        <Typography variant="h1">
          Welcome to your new Material-UI theme!
        </Typography>
        <Typography paragraph>
          The {twoFonts ? "body font" : "font"} is {bodyFont.themeName}
          {twoFonts && ` and the header font is ${headerFont.themeName}`}. The
          primary color is {colorNames.primary} and the secondary color is{" "}
          {colorNames.secondary}.
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
  primary: state.primary,
  secondary: state.secondary,
  colorNames: state.colorNames,
});

export default connect(mapStateToProps)(ParagraphPreview);

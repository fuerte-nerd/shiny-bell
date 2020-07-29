import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Divider, Typography, Box } from "@material-ui/core";
import Text from "./Text";
import Buttons from "./Buttons";

const Preview = ({ twoFonts, primary, secondary, current }) => {
  const [colorNames, setColorNames] = useState({ primary: "", secondary: "" });

  useEffect(() => {
    axios
      .get(
        `https://api.color.pizza/v1/${primary.substr(1)},${secondary.substr(1)}`
      )
      .then((res) => {
        setColorNames({
          primary: res.data.colors[0].name,
          secondary: res.data.colors[1].name,
        });
      });
  }, [primary, secondary]);

  return current ? (
    <>
      <Box
        minHeight="100vh"
        width="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          my={4}
          p={current.backgrounds.box !== "transparent" ? 4 : 0}
          bgcolor={current.backgrounds.box}
        >
          <Typography variant="h1">Welcome to your new theme!</Typography>
          <Typography variant="subtitle1" paragraph>
            The {twoFonts ? `header font ` : `font `} is{" "}
            {twoFonts
              ? `${current.header.family} and the body font is ${current.body.family}`
              : current.body.family}
            . The primary color is {colorNames.primary} and the secondary color
            is {colorNames.secondary}.
          </Typography>
        </Box>
      </Box>
      <Text />
      <Buttons />
      <Divider />
    </>
  ) : null;
};

const mapStateToProps = (state) => ({
  current: state.appState.current,
  twoFonts: state.appState.current.twoFonts,
  primary: state.appState.current.primary,
  secondary: state.appState.current.secondary,
});

export default connect(mapStateToProps)(Preview);

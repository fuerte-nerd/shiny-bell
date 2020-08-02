import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  Toolbar,
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";

const Hero = ({
  current,
  heroImg,
  primary,
  secondary,
  twoFonts,
  textPosition,
  overlayColor,
}) => {
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
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent={textPosition}
      bgcolor={current.backgrounds.box}
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {current.hero.overlay && (
        <Box
          position="absolute"
          width="100%"
          height="100%"
          bgcolor={overlayColor}
          style={{ opacity: 0.5 }}
        />
      )}
      {current.hero.position === "flex-start" ? <Toolbar /> : null}
      <Container style={{ zIndex: current.hero.overlay ? 5 : 0 }}>
        <Box
          bgcolor={current.backgrounds.box}
          p={current.backgrounds.box !== "transparent" ? 4 : 0}
          mt={current.hero.position === "flex-start" ? 5 : 0}
          mb={current.hero.position === "flex-end" ? 10 : 0}
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
          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="contained" color="primary">
                  See more
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary">
                  No thanks
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  current: state.appState.current,
  twoFonts: state.appState.current.twoFonts,
  heroImg: state.appState.current.hero.img,
  primary: state.appState.current.primary,
  secondary: state.appState.current.secondary,
  textPosition: state.appState.current.hero.position,
  overlayColor: state.appState.current.hero.overlayColor,
});

export default connect(mapStateToProps)(Hero);

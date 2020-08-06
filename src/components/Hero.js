import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setLoadingScreen } from "../state/display/actions";
import { setPastAppStates } from "../state/appState/actions";
import Theme from "./Theme";
import axios from "axios";
import { scroller } from "react-scroll";
import {
  Toolbar,
  Box,
  Container,
  Typography,
  Button,
  Link,
  Grid,
} from "@material-ui/core";

const Hero = ({
  dispatch,
  current,
  past,
  heroImg,
  primary,
  secondary,
  twoFonts,
  textPosition,
  overlayColor,
  overlayOpacity,
  alignment,
  boxOverlayOpacity,
  boxOverlayColor,
}) => {
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "see-more":
        scroller.scrollTo("preview", {
          smooth: true,
        });
        break;
      case "refresh":
        dispatch(setLoadingScreen(true));
        dispatch(setPastAppStates([...past, current]));
        const theme = new Theme();
        theme
          .getImage()
          .then(() =>
            theme
              .validateFonts()
              .then(() =>
                theme.commit().then(() => dispatch(setLoadingScreen(false)))
              )
          );
        break;
      default:
        break;
    }
  };

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
      position="relative"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        bgcolor={overlayColor}
        style={{ opacity: overlayOpacity }}
      />
      <Container>
        {current.hero.position === "flex-start" ? <Toolbar /> : null}
        <Box
          p={boxOverlayColor !== "transparent" ? 2 : 0}
          mt={current.hero.position === "flex-start" ? 2 : 0}
          mb={current.hero.position === "flex-end" ? 8 : 0}
          align={alignment}
          position="relative"
          borderRadius="borderRadius"
          zIndex={5}
        >
          <Box
            bgcolor={boxOverlayColor}
            position="absolute"
            zIndex={-5}
            borderRadius="borderRadius"
            style={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              opacity: boxOverlayOpacity,
            }}
          />
          <Typography variant="h2">Welcome to your new theme!</Typography>
          <Typography variant="subtitle1" paragraph>
            The {twoFonts ? `header font ` : `font `} is{" "}
            {twoFonts
              ? `${current.header.family} and the body font is ${current.body.family}`
              : current.body.family}
            . The primary color is {colorNames.primary} and the secondary color
            is {colorNames.secondary}. The image is provided by{" "}
            <Link href="https://www.unsplash.com" target="_blank">
              Unsplash
            </Link>
            .
          </Typography>
          <Box mt={2} align="inherit">
            <Grid
              container
              spacing={1}
              justify={
                alignment === "left"
                  ? "flex-start"
                  : alignment === "right"
                  ? "flex-end"
                  : "center"
              }
            >
              <Grid item>
                <Button
                  id="see-more"
                  onClick={handleClick}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  View typography
                </Button>
              </Grid>
              <Grid item>
                <Button
                  id="refresh"
                  onClick={handleClick}
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Refresh theme
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
  overlayOpacity: state.appState.current.hero.overlayOpacity,
  alignment: state.appState.current.hero.alignment,
  past: state.appState.past,
  boxOverlayColor: state.appState.current.hero.boxOverlayColor,
  boxOverlayOpacity: state.appState.current.hero.boxOverlayOpacity,
});

export default connect(mapStateToProps)(Hero);

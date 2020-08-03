import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { scroller } from "react-scroll";
import {
  Toolbar,
  Box,
  Container,
  Typography,
  Button,
  Link,
  useTheme,
} from "@material-ui/core";

const Hero = ({
  current,
  heroImg,
  primary,
  secondary,
  twoFonts,
  textPosition,
  overlayColor,
  overlayOpacity,
  alignment,
}) => {
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "see-more":
        scroller.scrollTo("preview", {
          smooth: true,
          offset: 50,
        });
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

  useEffect(() => {
    console.log(theme);
  }, []);
  const theme = useTheme();

  return (
    <Box
      height="100vh"
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
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bgcolor={overlayColor}
        style={{ opacity: overlayOpacity }}
      />
      <Container style={{ zIndex: current.hero.overlay ? 5 : 0 }}>
        {current.hero.position === "flex-start" ? <Toolbar /> : null}
        <Box
          bgcolor={current.backgrounds.box}
          p={current.backgrounds.box !== "transparent" ? 4 : 0}
          mt={current.hero.position === "flex-start" ? 5 : 0}
          mb={current.hero.position === "flex-end" ? 10 : 0}
          align={alignment}
        >
          <Typography variant="h1">Welcome to your new theme!</Typography>
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
            <Button
              id="see-more"
              onClick={handleClick}
              variant="contained"
              color="primary"
              size="large"
              style={{ marginRight: 10 }}
            >
              See more
            </Button>
            <Button variant="contained" color="secondary" size="large">
              No thanks
            </Button>
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
});

export default connect(mapStateToProps)(Hero);

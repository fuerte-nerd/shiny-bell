import React from "react";
import { connect } from "react-redux";
import { setHeroText, setFontInfo } from "../state/display/actions";
import { scroller } from "react-scroll";
import {
  Toolbar,
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";

const Hero = ({
  dispatch,
  current,
  heroImg,
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
      case "edit-text":
        dispatch(setHeroText(true));
        break;
      default:
        break;
    }
  };

  const handleOnMouseOver = (e) => {
    const { id } = e.currentTarget;
    dispatch(setFontInfo({ isOpen: true, section: id }));
  };

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
          <Typography variant="h2" onMouseOver={handleOnMouseOver} id="heading">
            {current.hero.text.heading}
          </Typography>
          <Typography
            variant="subtitle1"
            paragraph
            onMouseOver={handleOnMouseOver}
            id="body"
          >
            {current.hero.text.body}
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
                  variant={current.hero.buttonVariant}
                  color="primary"
                  size="large"
                >
                  View typography
                </Button>
              </Grid>
              <Grid item>
                <Button
                  id="edit-text"
                  onClick={handleClick}
                  variant={current.hero.buttonVariant}
                  color="secondary"
                  size="large"
                >
                  Edit text
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

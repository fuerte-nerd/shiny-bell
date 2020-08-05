import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Box, Container } from "@material-ui/core";
import Text from "./Text";
import Buttons from "./Buttons";
import Anchor from "./Anchor";

const Preview = ({ current }) => {
  return current ? (
    <>
      <Anchor id="preview" />
      <Box py={2}>
        <Container>
          <Text />
          <Buttons />
        </Container>
      </Box>
    </>
  ) : null;
};

const mapStateToProps = (state) => ({
  current: state.appState.current,
});

export default connect(mapStateToProps)(Preview);

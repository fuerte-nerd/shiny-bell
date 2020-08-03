import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Box, Container } from "@material-ui/core";
import Text from "./Text";
import Buttons from "./Buttons";

const Preview = ({ current }) => {
  return current ? (
    <Box id="preview">
      <Container>
        <Text />
        <Buttons />
      </Container>
    </Box>
  ) : null;
};

const mapStateToProps = (state) => ({
  current: state.appState.current,
});

export default connect(mapStateToProps)(Preview);

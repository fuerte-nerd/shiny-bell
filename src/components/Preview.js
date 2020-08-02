import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import Text from "./Text";
import Buttons from "./Buttons";

const Preview = ({ current }) => {
  return current ? (
    <>
      <Container>
        <Text />
        <Buttons />
      </Container>
    </>
  ) : null;
};

const mapStateToProps = (state) => ({
  current: state.appState.current,
});

export default connect(mapStateToProps)(Preview);

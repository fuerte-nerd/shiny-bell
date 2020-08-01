import React from "react";
import { connect } from "react-redux";

const Hero = ({ current }) => {
  return null;
};

const mapStateToProps = (state) => ({
  current: state.appState.current,
});

export default connect(mapStateToProps)(Hero);

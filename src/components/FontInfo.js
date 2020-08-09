import React from "react";
import { connect } from "react-redux";

const FontInfo = () => {
  return null;
};

const mapStateToProps = (state) => ({
  isOpen: state.display.fontInfo,
  body: state.appState.current.body.family,
  header: state.appState.current.header.family,
});

export default connect(mapStateToProps)(FontInfo);

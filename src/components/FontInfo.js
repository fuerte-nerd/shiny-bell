import React from "react";
import { connect } from "react-redux";

const FontInfo = () => {
  return null;
};

const mapStateToProps = (state) => ({
  body: state.appState.current.body.family,
  header: state.appState.current.header.family,
});

export default connect(mapStateToProps)(FontInfo);

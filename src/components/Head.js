import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const Head = (props) => {
  const { currentBodyFont, currentHeaderFont } = props;

  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      {currentBodyFont && (
        <link
          href={`https://fonts.googleapis.com/css2?family=${currentBodyFont.linkName}&display=swap`}
          rel="stylesheet"
        />
      )}
      {currentHeaderFont && (
        <link
          href={`https://fonts.googleapis.com/css2?family=${currentHeaderFont.linkName}&display=swap`}
          rel="stylesheet"
        />
      )}
    </Helmet>
  );
};

const mapStateToProps = (state) => ({
  currentBodyFont: state.components.fonts.body.currentFont,
  currentHeaderFont: state.components.fonts.header.currentFont,
});

export default connect(mapStateToProps)(Head);

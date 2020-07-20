import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const GoogleFontValidator = (props) => {
  const {
    bodyFontIsLoading,
    headerFontIsLoading,
    nextBodyFont,
    nextHeaderFont,
  } = props;

  return (
    <Helmet>
      {nextBodyFont && (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${nextBodyFont.linkName}&display=swap`}
        />
      )}
      {nextHeaderFont && (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${nextHeaderFont.linkName}&display=swap`}
        />
      )}
    </Helmet>
  );
};

const mapStateToProps = (state) => ({
  bodyFontIsLoading: state.components.fonts.body.isLoading,
  headerFontIsLoading: state.components.fonts.header.isLoading,
  nextBodyFont: state.components.fonts.body.nextFont,
  nextHeaderFont: state.components.fonts.header.nextFont,
});

export default connect(mapStateToProps)(GoogleFontValidator);

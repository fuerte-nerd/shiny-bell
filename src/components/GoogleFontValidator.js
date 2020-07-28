import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const GoogleFontValidator = (props) => {
  const { validationFont } = props;

  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      {validationFont && (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${validationFont}&display=swap`}
        />
      )}
    </Helmet>
  );
};

const mapStateToProps = (state) => ({
  validationFont: state.components.validationFont,
});

export default connect(mapStateToProps)(GoogleFontValidator);

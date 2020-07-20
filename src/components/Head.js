import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const Head = ({ fonts, twoFonts, font, headerFont, fontValidation }) => {
  useEffect(() => {
    console.log(fontValidation);
  }, [fontValidation]);

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
    </Helmet>
  );
};

const mapStateToProps = (state) => ({
  currentBodyFont: state.components.fonts.body.currentFont,
});

export default connect(mapStateToProps)(Head);

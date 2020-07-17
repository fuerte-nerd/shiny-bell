import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const Head = ({ fonts, twoFonts, font, headerFont, fontValidation }) => {
  return (
    <Helmet>
      {fontValidation.enabled &&
        fontValidation.fonts.map((f) => (
          <link
            href={`https://fonts.googleapis.com/css2?family=${f.linkName}&display=swap`}
            rel="stylesheet"
          />
        ))}
      {fonts && (
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      )}
      {twoFonts && font && headerFont ? (
        <link
          href={`https://fonts.googleapis.com/css2?family=${font.linkName}&family=${headerFont.linkName}&display=swap`}
          rel="stylesheet"
        />
      ) : (
        font && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${font.linkName}&display=swap`}
            rel="stylesheet"
          />
        )
      )}
    </Helmet>
  );
};

const mapStateToProps = (state) => ({
  fonts: state.fonts,
  twoFonts: state.twoFonts,
  font: state.font,
  headerFont: state.headerFont,
  fontValidation: state.fontValidation,
});

export default connect(mapStateToProps)(Head);

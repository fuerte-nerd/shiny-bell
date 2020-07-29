import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const Head = (props) => {
  const { current } = props;

  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      {current && current.body && (
        <link
          href={`https://fonts.googleapis.com/css2?family=${current.body.family.replace(
            / /g,
            "+"
          )}&display=swap`}
          rel="stylesheet"
        />
      )}
      {current && current.header && (
        <link
          href={`https://fonts.googleapis.com/css2?family=${current.header.family.replace(
            / /g,
            "+"
          )}&display=swap`}
          rel="stylesheet"
        />
      )}
    </Helmet>
  );
};

const mapStateToProps = (state) => ({
  current: state.appState.current,
});

export default connect(mapStateToProps)(Head);

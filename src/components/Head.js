import React, { useEffect, useState } from "react";
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
      {current && current.body.linkName && (
        <link
          href={`https://fonts.googleapis.com/css2?family=${current.body.linkName}&display=swap`}
          rel="stylesheet"
        />
      )}
      {current && current.header.linkName && (
        <link
          href={`https://fonts.googleapis.com/css2?family=${current.header.linkName}&display=swap`}
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

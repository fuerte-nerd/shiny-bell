import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const Head = (props) => {
  const { body, header } = props;

  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      {body && (
        <link
          href={`https://fonts.googleapis.com/css2?family=${body}&display=swap`}
          rel="stylesheet"
        />
      )}
      {header && (
        <link
          href={`https://fonts.googleapis.com/css2?family=${header}&display=swap`}
          rel="stylesheet"
        />
      )}
    </Helmet>
  );
};

const mapStateToProps = (state) => ({
  body:
    typeof state.current.body.linkName !== "undefined"
      ? state.current.body.linkName
      : null,
  header: state.current.header.linkName ? state.current.header.linkName : null,
});

export default connect(mapStateToProps)(Head);

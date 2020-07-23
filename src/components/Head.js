import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const Head = (props) => {
  const { current } = props;

  const [body, setBody] = useState(null);
  const [header, setHeader] = useState(null);

  useEffect(() => {
    if (current && current.body.linkName && current.header.linkName) {
      setBody(current.body.linkName);
      setHeader(current.header.linkName);
    }
  }, [current]);

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
  current: state.appState.current,
});

export default connect(mapStateToProps)(Head);

import React, { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";

const Anchor = ({ id }) => {
  const [offset, setOffset] = useState(null);

  const theme = useTheme();
  const toolbarClass = theme.mixins.toolbar;

  const queries = Object.keys(toolbarClass);

  console.log(queries);

  return <div id={id} style={{ top: -50 }} />;
};

export default Anchor;

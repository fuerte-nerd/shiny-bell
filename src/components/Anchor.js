import React, { useState, useEffect } from "react";
import { Box, useTheme, useMediaQuery, withStyles } from "@material-ui/core";

const styles = {
  root: {
    top: -56,
    position: "relative",
    "@media (min-width:0px) and (orientation: landscape)": { top: -48 },
    "@media (min-width:600px)": { top: -64 },
  },
};

const Anchor = (props) => {
  return <div id={props.id} className={props.classes.root} />;
};

export default withStyles(styles)(Anchor);

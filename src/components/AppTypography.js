import React from "react";
import { Typography } from "@material-ui/core";

const AppTypography = ({ children, variant }) => {
  return (
    <Typography
      style={{ fontFamily: "Roboto", fontSize: 14 }}
      variant={variant}
    >
      {children}
    </Typography>
  );
};

export default AppTypography;

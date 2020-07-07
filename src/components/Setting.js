import React from "react";
import { Box, Divider } from "@material-ui/core";
import AppTypography from "./AppTypography";

const Setting = ({ title, children, isLast }) => {
  return (
    <>
      <Box my="20px">
        <AppTypography>{title}</AppTypography>
        {children}
      </Box>
      {!isLast && <Divider />}
    </>
  );
};

export default Setting;

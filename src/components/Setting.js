import React from "react";
import {
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import AppTypography from "./AppTypography";

const Setting = ({ title, children, isLast }) => {
  return (
    <>
      <ListSubheader>{title}</ListSubheader>
      {children}
    </>
  );
};

export default Setting;

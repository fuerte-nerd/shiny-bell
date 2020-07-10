import React from "react";
import { ListSubheader, Divider } from "@material-ui/core";

const Setting = ({ title, children, isLast }) => {
  return (
    <>
      <Divider />
      <ListSubheader>{title}</ListSubheader>
      <Divider />
      {children}
    </>
  );
};

export default Setting;

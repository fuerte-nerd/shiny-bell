import React from "react";
import { ListSubheader, Divider } from "@material-ui/core";

const Setting = ({ title, children }) => {
  return (
    <>
      <Divider />
      <ListSubheader disableSticky>{title}</ListSubheader>
      <Divider />
      {children}
    </>
  );
};

export default Setting;

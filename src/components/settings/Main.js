import React from "react";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Code } from "@material-ui/icons";
import Setting from "../Setting";

const Main = () => {
  return (
    <Setting title="Utility">
      <ListItem id="code" onClick={handleClick} button>
        <ListItemText primary="Get the code!" />
        <ListItemIcon>
          <Code />
        </ListItemIcon>
      </ListItem>
    </Setting>
  );
};

export default Main;

import React from "react";
import { connect } from "react-redux";
import { setSettings } from "../state/actions";
import {
  Drawer,
  ListSubheader,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import Locks from "./settings/Locks";

const Sidebar = ({ dispatch, settings }) => {
  const handleClose = () => {
    dispatch(setSettings(false));
  };

  return (
    <Drawer anchor="right" open={settings} onClose={handleClose}>
      <List dense style={{ width: 250, fontFamily: "Roboto" }}>
        <Locks />
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(Sidebar);

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

const Sidebar = ({ dispatch, settings }) => {
  const handleClose = () => {
    dispatch(setSettings(false));
  };

  return (
    <Drawer anchor="right" open={settings} onClose={handleClose}>
      <List style={{ width: 250 }}>
        <ListSubheader>Lock elements</ListSubheader>
        <ListItem>
          <ListItemText primary="test" />
        </ListItem>
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(Sidebar);

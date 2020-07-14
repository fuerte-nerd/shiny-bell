import React from "react";
import { connect } from "react-redux";
import { setSettings } from "../state/actions";
import { Drawer, List } from "@material-ui/core";

import Locks from "./settings/Locks";
import Fonts from "./settings/Fonts";
import Colors from "./settings/Colors";
import Appearance from "./settings/Appearance";
import Buttons from "./settings/Buttons";
import Backgrounds from "./settings/Backgrounds";

const Sidebar = ({ dispatch, settings }) => {
  const handleClose = () => {
    dispatch(setSettings(false));
  };

  return (
    <Drawer
      anchor="right"
      open={settings}
      onClose={handleClose}
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
    >
      <List dense disablePadding style={{ width: 250, fontFamily: "Roboto" }}>
        <Locks />
        <Fonts />
        <Colors />
        <Appearance />
        <Buttons />
        <Backgrounds />
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(Sidebar);

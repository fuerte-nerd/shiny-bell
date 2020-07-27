import React from "react";
import { connect } from "react-redux";
import { setSidebar } from "../state/display/actions";

import { Drawer, List } from "@material-ui/core";

import Locks from "./settings/Locks";
import Fonts from "./settings/Fonts";
import Colors from "./settings/Colors";
import Appearance from "./settings/Appearance";
import Buttons from "./settings/Buttons";
import Backgrounds from "./settings/Backgrounds";

const Sidebar = ({ dispatch, isOpen, body, header }) => {
  const handleClose = () => {
    dispatch(setSidebar(false));
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleClose}
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
    >
      <List dense disablePadding style={{ width: 250 }}>
        <Locks />
        <Fonts />
        <Colors />
        {/*  <Appearance />
        <Buttons />
        <Backgrounds />*/}
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.sidebar,
  body: state.components.fonts.body.currentFont,
  header: state.components.fonts.header.currentFont,
});

export default connect(mapStateToProps)(Sidebar);

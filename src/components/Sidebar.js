import React from "react";
import { connect } from "react-redux";
import { setSidebar } from "../state/display/actions";

import { Drawer, List } from "@material-ui/core";

import Main from "./settings/Main";
import Locks from "./settings/Locks";
import Fonts from "./settings/Fonts";
import Colors from "./settings/Colors";
import Appearance from "./settings/Appearance";
import Buttons from "./settings/Buttons";
import Hero from "./settings/Hero";
import About from "./settings/About";

const Sidebar = ({ dispatch, isOpen }) => {
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
        <Main />
        <Locks />
        <Fonts />
        <Colors />
        <Appearance />
        <Buttons />
        <Hero />
        <About />
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.sidebar,
});

export default connect(mapStateToProps)(Sidebar);

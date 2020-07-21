import React from "react";
import { connect } from "react-redux";
import Setting from "../Setting";
import { ListItem, ListItemText, Icon } from "@material-ui/core";
import { Lock, LockOpen } from "@material-ui/icons";

const Locks = ({ dispatch, locked, twoFonts }) => {
  const handleChange = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "lock-font":
        return dispatch(setLockBodyFont(!locked.body));

      case "lock-header-font":
        return dispatch(setLockHeaderFont(!locked.header));

      case "lock-palette":
        return dispatch(setLockPalette(!locked.palette));

      default:
        return;
    }
  };

  return (
    <Setting title="Lock Elements">
      {twoFonts && (
        <ListItem id="lock-header-font" onClick={handleChange} button>
          <ListItemText primary="Header font" />
          <Icon edge="end">{locked.header ? <Lock /> : <LockOpen />}</Icon>
        </ListItem>
      )}
      <ListItem id="lock-font" onClick={handleChange} button>
        <ListItemText primary={twoFonts ? `Body font` : `Font`} />
        <Icon edge="end">{locked.body ? <Lock /> : <LockOpen />}</Icon>
      </ListItem>
      <ListItem id="lock-palette" onClick={handleChange} button>
        <ListItemText primary="Palette" />
        <Icon edge="end">{locked.palette ? <Lock /> : <LockOpen />}</Icon>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  locked: {
    body: state.components.fonts.body.locked,
    header: state.components.fonts.header.locked,
    palette: state.components.palette.locked,
  },
  twoFonts: state.settings.twoFonts,
});

export default connect(mapStateToProps)(Locks);

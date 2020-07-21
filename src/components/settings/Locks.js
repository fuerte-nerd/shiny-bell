import React from "react";
import { connect } from "react-redux";
import {
  setBodyFontLock,
  setHeaderFontLock,
  setPaletteLock,
} from "../../state/components/actions";
import Setting from "../Setting";
import { ListItem, ListItemText, Icon } from "@material-ui/core";
import { Lock, LockOpen } from "@material-ui/icons";

const Locks = ({ dispatch, locked, twoFonts }) => {
  const handleChange = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "lock-font":
        return dispatch(setBodyFontLock(!locked.body));

      case "lock-header-font":
        return dispatch(setHeaderFontLock(!locked.header));

      case "lock-palette":
        return dispatch(setPaletteLock(!locked.palette));

      default:
        return;
    }
  };

  return (
    <Setting title="Lock Elements">
      {twoFonts && (
        <ListItem id="lock-header-font" onClick={handleChange} button>
          <ListItemText primary="Header font" />
          <ListItemSecondaryAction>
            {locked.header ? (
              <Lock style={{ fontSize: "1.5rem" }} />
            ) : (
              <LockOpen style={{ fontSize: "1.5rem" }} />
            )}
          </ListItemSecondaryAction>
        </ListItem>
      )}
      <ListItem id="lock-font" onClick={handleChange} button>
        <ListItemText primary={twoFonts ? `Body font` : `Font`} />
        <ListItemSecondaryAction>
          {locked.body ? (
            <Lock style={{ fontSize: "1.5rem" }} />
          ) : (
            <LockOpen style={{ fontSize: "1.5rem" }} />
          )}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem id="lock-palette" onClick={handleChange} button>
        <ListItemText primary="Palette" />
        <Icon edge="end">
          {locked.palette ? (
            <Lock style={{ fontSize: "1.5rem" }} />
          ) : (
            <LockOpen style={{ fontSize: "1.5rem" }} />
          )}
        </Icon>
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

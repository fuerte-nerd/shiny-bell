import React from "react";
import { connect } from "react-redux";
import {
  setBodyFontLock,
  setHeaderFontLock,
  setPaletteLock,
} from "../../state/components/actions";
import Setting from "../Setting";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Lock, LockOpen } from "@material-ui/icons";

const Locks = ({ dispatch, locked, twoFonts }) => {
  const handleChange = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "lock-body-font":
      case "lock-body-font-btn":
        return dispatch(setBodyFontLock(!locked.body));
      case "lock-header-font":
      case "lock-header-font-btn":
        return dispatch(setHeaderFontLock(!locked.header));
      case "lock-palette":
      case "lock-palette-btn":
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
            <IconButton
              size="small"
              onClick={handleChange}
              id="lock-header-font-btn"
              edge="end"
            >
              {locked.header ? (
                <Lock style={{ fontSize: "1.5rem" }} />
              ) : (
                <LockOpen style={{ fontSize: "1.5rem" }} />
              )}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
      <ListItem id="lock-body-font" onClick={handleChange} button>
        <ListItemText primary={twoFonts ? `Body font` : `Font`} />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={handleChange}
            id="lock-body-font-btn"
            edge="end"
          >
            {locked.body ? (
              <Lock style={{ fontSize: "1.5rem" }} />
            ) : (
              <LockOpen style={{ fontSize: "1.5rem" }} />
            )}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem id="lock-palette" onClick={handleChange} button>
        <ListItemText primary="Palette" />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={handleChange}
            id="lock-palette-btn"
            edge="end"
          >
            {locked.palette ? (
              <Lock style={{ fontSize: "1.5rem" }} />
            ) : (
              <LockOpen style={{ fontSize: "1.5rem" }} />
            )}
          </IconButton>
        </ListItemSecondaryAction>
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

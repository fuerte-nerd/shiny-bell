import React from "react";
import { connect } from "react-redux";
import { setLocked, setFontLoading } from "../../state/actions";
import Setting from "../Setting";
import { ListItem, ListItemText, Icon } from "@material-ui/core";
import { Lock, LockOpen } from "@material-ui/icons";

const Locks = ({ dispatch, locked, twoFonts, font, headerFont, primary }) => {
  const handleChange = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "lock-font":
        return dispatch(setLocked({ ...locked, bodyFont: !locked.bodyFont }));
      case "lock-header-font":
        return dispatch(
          setLocked({ ...locked, headerFont: !locked.headerFont })
        );

      case "lock-palette":
        return dispatch(setLocked({ ...locked, palette: !locked.palette }));
      default:
        return;
    }
  };

  return (
    <Setting title="Lock Elements">
      <ListItem id="lock-font" onClick={handleChange} button>
        <ListItemText
          primary={twoFonts ? `Body font` : `Font`}
          secondary={font.themeName}
        />
        <Icon edge="end">{locked.bodyFont ? <Lock /> : <LockOpen />}</Icon>
      </ListItem>
      {twoFonts && (
        <ListItem id="lock-header-font" onClick={handleChange} button>
          <ListItemText
            primary="Header font"
            secondary={headerFont.themeName}
          />
          <Icon edge="end">{locked.headerFont ? <Lock /> : <LockOpen />}</Icon>
        </ListItem>
      )}
      <ListItem id="lock-palette" onClick={handleChange} button>
        <ListItemText primary="Palette" secondary={primary} />
        <Icon edge="end">{locked.palette ? <Lock /> : <LockOpen />}</Icon>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  locked: state.locked,
  font: state.font,
  headerFont: state.headerFont,
  twoFonts: state.twoFonts,
  primary: state.primary,
});

export default connect(mapStateToProps)(Locks);

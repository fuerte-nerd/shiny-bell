import React from "react";
import { connect } from "react-redux";
import { setLocked } from "../../state/actions";
import Setting from "../Setting";
import {
  ListItem,
  FormControlLabel,
  Switch,
  Button,
  makeStyles,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Locks = ({ dispatch, locked, twoFonts, font, headerFont, palette }) => {
  const classes = useStyles();
  const theme = useTheme();
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
      <ListItem>
        <Button color="success" fullWidth>
          {twoFonts ? "Body font" : "Font"} <small>{font.themeName}</small>
        </Button>
        <FormControlLabel
          control={
            <Switch
              id="lock-font"
              size="small"
              onChange={handleChange}
              checked={locked.bodyFont}
            />
          }
          label={
            twoFonts
              ? `Body Font (${font.themeName})`
              : `Font (${font.themeName})`
          }
          classes={{ label: classes.label }}
        />
      </ListItem>
      {twoFonts && (
        <ListItem>
          <FormControlLabel
            control={
              <Switch
                id="lock-header-font"
                size="small"
                onChange={handleChange}
                checked={locked.headerFont}
              />
            }
            label={`Header font (${headerFont.themeName})`}
            classes={{ label: classes.label }}
          />
        </ListItem>
      )}
      <ListItem>
        <FormControlLabel
          control={
            <Switch
              id="lock-palette"
              size="small"
              onChange={handleChange}
              checked={locked.palette}
            />
          }
          label="Palette"
          classes={{ label: classes.label }}
        />
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  locked: state.locked,
  font: state.font,
  headerFont: state.headerFont,
  twoFonts: state.twoFonts,
});

export default connect(mapStateToProps)(Locks);

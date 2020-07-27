import React from "react";
import { connect } from "react-redux";
import Setting from "../Setting";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  IconButton,
} from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import {
  setTwoFonts,
  setResponsiveFontSizes,
  setFontSize,
} from "../../state/settings/actions";
import { setFontSelector } from "../../state/display/actions";
import { setSection } from "../../state/fontSelector/actions";
import { setCurrentAppState } from "../../state/appState/actions";
import FontLoader from "../../functions/FontHelper";

const Fonts = (props) => {
  const { dispatch } = props;
  const {
    twoFonts,
    header,
    body,
    fontSize,
    responsiveFontSizes,
    current,
  } = props;

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "two-font-mode":
      case "two-font-mode-switch":
        dispatch(setCurrentAppState({ ...current, twoFonts: !twoFonts }));
        break;
      case "open-body-font-picker":
        dispatch(setSection("body"));
        dispatch(setFontSelector(true));
        break;
      case "open-header-font-picker":
        dispatch(setSection("header"));
        dispatch(setFontSelector(true));
        break;
      case "swap-fonts":
        const currentBodyFont = body;
        const currentHeaderFont = header;
        const BodyFont = new FontLoader("body", currentHeaderFont);
        const HeaderFont = new FontLoader("header", currentBodyFont);
        BodyFont.validate().then(() => BodyFont.deploy());
        HeaderFont.validate().then(() => HeaderFont.deploy());
        break;
      case "toggle-responsive-font-sizes-btn":
      case "toggle-responsive-font-sizes-switch":
        dispatch(setResponsiveFontSizes(!responsiveFontSizes));
        break;
      case "inc-font-size":
        dispatch(setFontSize(fontSize + 1));
        break;
      case "dec-font-size":
        dispatch(setFontSize(fontSize - 1));
        break;

      default:
        return;
    }
  };

  return (
    <Setting title="Fonts">
      {twoFonts && (
        <ListItem button id="open-header-font-picker" onClick={handleClick}>
          <ListItemText
            primary="Select header font"
            secondary={header.family}
          />
        </ListItem>
      )}
      <ListItem button id="open-body-font-picker" onClick={handleClick}>
        <ListItemText
          primary={twoFonts ? "Select body font" : "Select font"}
          secondary={body.family}
        />
      </ListItem>
      <ListItem id="two-font-mode" onClick={handleClick} button>
        <ListItemText primary="Two font mode" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            id="two-font-mode-switch"
            checked={twoFonts}
            onChange={handleClick}
          />
        </ListItemSecondaryAction>
      </ListItem>
      {twoFonts && (
        <ListItem id="swap-fonts" onClick={handleClick} button>
          <ListItemText primary="Swap fonts" />
        </ListItem>
      )}
      <ListItem>
        <ListItemText primary="Font size" secondary={fontSize} />
        <ListItemSecondaryAction>
          <IconButton size="small" id="dec-font-size" onClick={handleClick}>
            <RemoveCircle style={{ fontSize: "1.5rem" }} />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            id="inc-font-size"
            onClick={handleClick}
          >
            <AddCircle style={{ fontSize: "1.5rem" }} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem
        id="toggle-responsive-font-sizes-btn"
        onClick={handleClick}
        button
      >
        <ListItemText primary="Responsive font sizes" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            id="toggle-responsive-font-sizes-switch"
            checked={responsiveFontSizes}
            onChange={handleClick}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  twoFonts: state.appState.current.twoFonts,
  fontSize: state.appState.current.fontSize,
  header: state.appState.current.header,
  body: state.appState.current.body,
  responsiveFontSizes: state.appState.current.responsiveFontSizes,
  fontPicker: state.fontPicker,
  current: state.appState.current,
});

export default connect(mapStateToProps)(Fonts);

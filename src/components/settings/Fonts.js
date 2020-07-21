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
import { setTwoFonts } from "../../state/settings/actions";
import FontLoader from "../../functions/FontHelper";
import { setComponentsLoading } from "../../state/components/actions";

const Fonts = (props) => {
  const { dispatch } = props;
  const { twoFonts, header, body, fontSize, responsiveFontSizes } = props;

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "two-font-mode":
      case "two-font-mode-switch":
        dispatch(setTwoFonts(!twoFonts));
        break;
      case "open-body-font-picker":
      case "swap-fonts":
        console.log("reached");
        dispatch(setComponentsLoading(true));
        const currentBodyFont = body;
        const currentHeaderFont = header;
        const BodyFont = new FontLoader("body", currentHeaderFont);
        const HeaderFont = new FontLoader("header", currentBodyFont);
        BodyFont.validate().then(() => BodyFont.deploy());
        HeaderFont.validate().then(() => HeaderFont.deploy());
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
            secondary={header.themeName}
          />
        </ListItem>
      )}
      <ListItem button id="open-body-font-picker" onClick={handleClick}>
        <ListItemText
          primary={twoFonts ? "Select body font" : "Select font"}
          secondary={body.themeName}
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
            <RemoveCircle />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            id="inc-font-size"
            onClick={handleClick}
          >
            <AddCircle />
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
  twoFonts: state.settings.twoFonts,
  fontSize: state.settings.fontSize,
  header: state.components.fonts.header.currentFont,
  body: state.components.fonts.body.currentFont,
  fontPicker: state.fontPicker,
  responsiveFontSizes: state.settings.responsiveFontSizes,
});

export default connect(mapStateToProps)(Fonts);

import React from "react";
import { connect } from "react-redux";
import {
  set2Fonts,
  setFontSize,
  setHeaderFont,
  setFont,
  setFontPicker,
} from "../../state/actions";
import Setting from "../Setting";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  IconButton,
} from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";

const Fonts = ({
  dispatch,
  twoFonts,
  fontSize,
  bodyFont,
  headerFont,
  fontPicker,
}) => {
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "two-font-mode":
      case "two-font-mode-switch":
        return dispatch(set2Fonts(!twoFonts));
      default:
        return;
    }
  };

  return (
    <Setting title="Fonts">
      {twoFonts && (
        <ListItem
          button
          onClick={() =>
            dispatch(
              setFontPicker({
                ...fontPicker,
                open: true,
                section: "headerFont",
              })
            )
          }
        >
          <ListItemText
            primary="Select header font"
            secondary={headerFont.themeName}
          />
        </ListItem>
      )}
      <ListItem
        button
        onClick={() =>
          dispatch(
            setFontPicker({ ...fontPicker, open: true, section: "bodyFont" })
          )
        }
      >
        <ListItemText
          primary={twoFonts ? "Select body font" : "Select font"}
          secondary={bodyFont.themeName}
        />
      </ListItem>
      <ListItem
        id="two-font-mode"
        onClick={() => dispatch(set2Fonts(!twoFonts))}
        button
      >
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
        <ListItem
          id="swap-fonts"
          onClick={() => {
            const font = bodyFont;
            const hFont = headerFont;
            dispatch(setFont(hFont));
            dispatch(setHeaderFont(font));
          }}
          button
        >
          <ListItemText primary="Swap fonts" />
        </ListItem>
      )}
      <ListItem>
        <ListItemText primary="Font size" secondary={fontSize} />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={() => {
              dispatch(setFontSize(fontSize - 1));
            }}
          >
            <RemoveCircle />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            onClick={() => {
              dispatch(setFontSize(fontSize + 1));
            }}
          >
            <AddCircle />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  twoFonts: state.twoFonts,
  fontSize: state.fontSize,
  headerFont: state.headerFont,
  bodyFont: state.font,
  fontPicker: state.fontPicker,
});

export default connect(mapStateToProps)(Fonts);

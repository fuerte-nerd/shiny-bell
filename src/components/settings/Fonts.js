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
  setFontSelectorOpen,
  setFontSelectorSection,
  setFontCategorySelectorOpen,
  setFontCategorySelectorSection,
} from "../../state/display/actions";
import Theme from "../Theme";

const Fonts = (props) => {
  const { dispatch } = props;
  const {
    twoFonts,
    header,
    body,
    fontSize,
    responsiveFontSizes,
    current,
    bodyCats,
    headerCats,
  } = props;

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "two-font-mode":
      case "two-font-mode-switch":
        new Theme({ ...current, twoFonts: !twoFonts }).commit();
        break;
      case "open-body-font-picker":
        dispatch(setFontSelectorSection("body"));
        dispatch(setFontSelectorOpen(true));
        break;
      case "open-header-font-picker":
        dispatch(setFontSelectorSection("header"));
        dispatch(setFontSelectorOpen(true));
        break;
      case "swap-fonts":
        const b = body;
        const h = header;
        new Theme({ ...current, body: h, header: b }).commit();
        break;
      case "toggle-responsive-font-sizes-btn":
      case "toggle-responsive-font-sizes-switch":
        new Theme({
          ...current,
          responsiveFontSizes: !responsiveFontSizes,
        }).commit();
        break;
      case "inc-font-size":
        new Theme({ ...current, fontSize: fontSize + 1 }).commit();
        break;
      case "dec-font-size":
        new Theme({ ...current, fontSize: fontSize - 1 }).commit();
        break;
      case "open-body-font-category-selector":
        dispatch(setFontCategorySelectorSection("body"));
        dispatch(setFontCategorySelectorOpen(true));
        break;
      case "open-header-font-category-selector":
        dispatch(setFontCategorySelectorSection("header"));
        dispatch(setFontCategorySelectorOpen(true));
        break;
      default:
        return;
    }
  };

  return (
    <Setting title="Fonts">
      {twoFonts && (
        <>
          <ListItem
            button
            id="open-header-font-category-selector"
            onClick={handleClick}
          >
            <ListItemText
              primary="Select header font search categories"
              secondary={headerCats
                .map((i) => i.charAt(0).toUpperCase() + i.substr(1))
                .join(", ")}
            />
          </ListItem>
          <ListItem button id="open-header-font-picker" onClick={handleClick}>
            <ListItemText
              primary="Select header font"
              secondary={header.family}
            />
          </ListItem>
        </>
      )}
      <ListItem
        button
        id="open-body-font-category-selector"
        onClick={handleClick}
      >
        <ListItemText
          primary={
            twoFonts
              ? "Select body font search categories"
              : "Select font search categories"
          }
          secondary={bodyCats
            .map((i) => i.charAt(0).toUpperCase() + i.substr(1))
            .join(", ")}
        />
      </ListItem>
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
  bodyCats: state.components.fonts.body.searchCategories,
  headerCats: state.components.fonts.header.searchCategories,
  responsiveFontSizes: state.appState.current.responsiveFontSizes,
  current: state.appState.current,
});

export default connect(mapStateToProps)(Fonts);

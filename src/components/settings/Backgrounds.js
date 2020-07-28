import React from "react";
import { connect } from "react-redux";
import Setting from "../Setting";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { setBackgrounds } from "../../state/actions";
import Theme from "../../functions/Theme";

const Backgrounds = ({ dispatch, backgrounds, current }) => {
  const options = [
    "transparent",
    "primary.light",
    "primary.main",
    "primary.dark",
    "secondary.light",
    "secondary.main",
    "secondary.dark",
  ];

  const handleClick = (e) => {
    const currentIndexPage = options.indexOf(current.backgrounds.page);
    const currentIndexBox = options.indexOf(current.backgrounds.box);
    let selection;

    switch (e.currentTarget.id) {
      case "page-back":
        currentIndexPage === 0
          ? (selection = options[options.length - 1])
          : (selection = options[currentIndexPage - 1]);
        new Theme({
          ...current,
          backgrounds: { ...current.backgrounds, page: selection },
        }).commit();
        break;
      case "page-forward":
        currentIndexPage === options.length - 1
          ? (selection = options[0])
          : (selection = options[currentIndexPage + 1]);
        new Theme({
          ...current,
          backgrounds: { ...current.backgrounds, page: selection },
        }).commit();
        break;
      case "box-back":
        currentIndexBox === 0
          ? (selection = options[options.length - 1])
          : (selection = options[currentIndexBox - 1]);
        new Theme({
          ...current,
          backgrounds: { ...current.backgrounds, box: selection },
        }).commit();
        break;
      case "box-forward":
        currentIndexBox === options.length - 1
          ? (selection = options[0])
          : (selection = options[currentIndexBox + 1]);
        new Theme({
          ...current,
          backgrounds: { ...current.backgrounds, box: selection },
        }).commit();
        break;
      default:
        return;
    }
  };

  return (
    <Setting title="Backgrounds">
      <ListItem>
        <ListItemText primary="Page" secondary={backgrounds.page} />
        <ListItemSecondaryAction>
          <IconButton size="small" id="page-back" onClick={handleClick}>
            <ChevronLeft />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            id="page-forward"
            onClick={handleClick}
          >
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Box" secondary={backgrounds.box} />
        <ListItemSecondaryAction>
          <IconButton size="small" id="box-back" onClick={handleClick}>
            <ChevronLeft />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            id="box-forward"
            onClick={handleClick}
          >
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  backgrounds: state.appState.current.backgrounds,
  current: state.appState.current,
});

export default connect(mapStateToProps)(Backgrounds);

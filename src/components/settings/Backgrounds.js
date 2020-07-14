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

const Backgrounds = ({ dispatch, backgrounds }) => {
  const options = [
    "default",
    "primary.light",
    "primary.main",
    "primary.dark",
    "secondary.light",
    "secondary.main",
    "secondary.dark",
  ];

  const handleClick = (e) => {
    const currentIndexPage = options.indexOf(backgrounds.page);
    const currentIndexBox = options.indexOf(backgrounds.box);

    switch (e.currentTarget.id) {
      case "page-back":
        return currentIndexPage === 0
          ? dispatch(
              setBackgrounds({
                ...backgrounds,
                page: options[options.length - 1],
              })
            )
          : dispatch(
              setBackgrounds({
                ...backgrounds,
                page: options[currentIndexPage - 1],
              })
            );
      case "page-forward":
        return currentIndexPage === options.length - 1
          ? dispatch(
              setBackgrounds({
                ...backgrounds,
                page: options[0],
              })
            )
          : dispatch(
              setBackgrounds({
                ...backgrounds,
                page: options[currentIndexPage + 1],
              })
            );
      case "box-back":
        return currentIndexBox === 0
          ? dispatch(
              setBackgrounds({
                ...backgrounds,
                box: options[options.length - 1],
              })
            )
          : dispatch(
              setBackgrounds({
                ...backgrounds,
                box: options[currentIndexBox - 1],
              })
            );
      case "box-forward":
        return currentIndexBox === options.length - 1
          ? dispatch(
              setBackgrounds({
                ...backgrounds,
                box: options[0],
              })
            )
          : dispatch(
              setBackgrounds({
                ...backgrounds,
                box: options[currentIndexBox + 1],
              })
            );
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
  backgrounds: state.backgrounds,
});

export default connect(mapStateToProps)(Backgrounds);

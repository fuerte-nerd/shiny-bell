import React from "react";
import { connect } from "react-redux";
import { IconButton, Tooltip } from "@material-ui/core";
import { Undo, Redo } from "@material-ui/icons";
import {
  setPastAppStates,
  setFutureAppStates,
} from "../state/appState/actions";
import { setLoadingScreen } from "../state/display/actions";
import Theme from "../functions/Theme";

const UndoRedo = (props) => {
  const { dispatch } = props;
  const { past, current, future } = props;

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    let theme;
    switch (id) {
      case "undo":
        dispatch(setLoadingScreen(true));
        dispatch(setFutureAppStates([current, ...future]));
        theme = new Theme(past[past.length - 1]);
        theme.validateFonts().then(() => {
          theme.commit().then(() => dispatch(setLoadingScreen(false)));
        });

        dispatch(setPastAppStates(past.slice(0, past.length - 1)));

        break;
      case "redo":
        dispatch(setLoadingScreen(true));
        dispatch(setPastAppStates([...past, current]));
        theme = new Theme(future[0]);
        theme.validateFonts().then(() => {
          theme.commit().then(() => dispatch(setLoadingScreen(false)));
        });
        dispatch(setFutureAppStates(future.slice(1)));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Tooltip title="Undo">
        <span>
          <IconButton
            color="inherit"
            id="undo"
            disabled={past.length === 0}
            onClick={handleClick}
          >
            <Undo />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Redo">
        <span>
          <IconButton
            color="inherit"
            id="redo"
            disabled={future.length === 0}
            onClick={handleClick}
          >
            <Redo />
          </IconButton>
        </span>
      </Tooltip>
    </>
  );
};

const mapStateToProps = (state) => ({
  past: state.appState.past,
  current: state.appState.current,
  future: state.appState.future,
  componentsLoading: state.components.loading,
  undoEnabled: state.appState.enabled,
  body: state.components.fonts.body.currentFont,
  header: state.components.fonts.header.currentFont,
  primary: state.components.palette.primary,
  secondary: state.components.palette.secondary,
});

export default connect(mapStateToProps)(UndoRedo);

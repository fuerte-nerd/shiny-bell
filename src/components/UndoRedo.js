import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IconButton, Tooltip } from "@material-ui/core";
import { Undo, Redo } from "@material-ui/icons";
import { setComponentsLoading } from "../state/components/actions";
import {
  setPastAppStates,
  setFutureAppStates,
  setEnabled,
  setCurrentAppState,
} from "../state/appState/actions";
import FontLoader from "../functions/FontHelper";
import Palette from "../functions/Palette";
import { setLoadingScreen } from "../state/display/actions";

const UndoRedo = (props) => {
  const { dispatch } = props;
  const { past, current, future } = props;

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "undo":
        dispatch(setLoadingScreen(true));

        dispatch(setFutureAppStates([...future, current]));
        dispatch(setCurrentAppState(past[past.length - 1]));
        dispatch(setPastAppStates(past.slice(0, past.length - 1)));

        dispatch(setLoadingScreen(false));
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

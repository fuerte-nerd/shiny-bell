import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IconButton, Tooltip } from "@material-ui/core";
import { Undo, Redo } from "@material-ui/icons";
import { setComponentsLoading } from "../state/components/actions";
import {
  setPastAppStates,
  setFutureAppStates,
} from "../state/appState/actions";
import FontLoader from "../functions/FontHelper";
import Palette from "../functions/Palette";

const UndoRedo = (props) => {
  const { dispatch } = props;
  const { past, future, undoEnabled, componentsLoading } = props;
  const { body, header, primary, secondary } = props;

  useEffect(() => {
    if (componentsLoading && undoEnabled) {
      setPastAppStates([
        ...past,
        {
          body,
          header,
          primary,
          secondary,
        },
      ]);
    }
  }, [componentsLoading]);

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "undo":
        // grab the previous change
        const previousAppState = past[past.length - 1];
        dispatch(setPastAppStates(past.slice(0, past.length - 1)));
        dispatch(
          setFutureAppStates([{ body, header, primary, secondary }, ...future])
        );
        //bypass setting an appstate

        //commit it
        dispatch(setComponentsLoading(true));
        const bf = new FontLoader("body", previousAppState.body);
        const hf = new FontLoader("header", previousAppState.header);
        const palette = new Palette({
          primary: previousAppState.primary.hex,
          secondary: previousAppState.secondary.hex,
        });
        bf.validate().then(() => bf.deploy());
        hf.validate().then(() => hf.deploy());
        palette.getColorNames().then(() => {
          palette.deploy();
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Tooltip title="Undo">
        <span>
          <IconButton color="inherit" id="undo" onClick={handleClick}>
            <Undo />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Redo">
        <span>
          <IconButton color="inherit" id="redo" onClick={handleClick}>
            <Redo />
          </IconButton>
        </span>
      </Tooltip>
    </>
  );
};

const mapStateToProps = (state) => ({
  past: state.appState.past,
  future: state.appState.future,
  componentsLoading: state.components.loading,
  undoEnabled: state.appState.enabled,
  body: state.components.fonts.body.currentFont,
  header: state.components.fonts.header.currentFont,
  primary: state.components.palette.primary,
  secondary: state.components.palette.secondary,
});

export default connect(mapStateToProps)(UndoRedo);

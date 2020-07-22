import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IconButton, Tooltip } from "@material-ui/core";
import { Undo, Redo, Palette } from "@material-ui/icons";
import { setComponentsLoading } from "../state/components/actions";
import FontLoader from "../functions/FontHelper";
import Palette from "../functions/Palette";

const UndoRedo = (props) => {
  const { dispatch } = props;
  const { past, current, future } = props;

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "undo":
        // grab the previous change
        const previousAppState = past[past.length - 1];
        //bypass setting an appstate
        //commit it
        dispatch(setComponentsLoading(true));
        const bf = new FontLoader("body", previousAppState.body);
        const hf = new FontLoader("header", previousAppState.header);
        const palette = new Palette({
          primary: previousAppState.primary.hex,
          secondary: previousAppState.secondary.hex,
        });
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
  current: state.appState.current,
  past: state.appState.past,
  future: state.appState.future,
});

export default connect(mapStateToProps)(UndoRedo);

import React from "react";
import { connect } from "react-redux";
import { IconButton, Tooltip } from "@material-ui/core";
import { Undo, Redo } from "@material-ui/icons";

const UndoRedo = () => {
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(UndoRedo);

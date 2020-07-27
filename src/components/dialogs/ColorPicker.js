import React from "react";
import { connect } from "react-redux";
import { setPrimary, setColorPicker } from "../../state/actions";
import { Dialog } from "@material-ui/core";
import { SketchPicker } from "react-color";
import { setCurrentAppState } from "../../state/appState/actions";

const ColorPicker = ({ dispatch, colorPicker, primary, current }) => {
  return (
    <Dialog
      open={colorPicker}
      onClose={() => dispatch(setColorPicker(false))}
      PaperProps={{ style: { backgroundColor: "transparent" } }}
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
    >
      <SketchPicker
        color={primary}
        onChange={(c) => {
          dispatch(setCurrentAppState({ ...current, primary: c.hex }));
        }}
        style={{ fontFamily: "Roboto" }}
      />
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  colorPicker: state.colorPicker,
  primary: state.primary,
  current: state.appState.current,
});

export default connect(mapStateToProps)(ColorPicker);

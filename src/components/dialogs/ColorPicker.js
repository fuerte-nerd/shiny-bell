import React from "react";
import { connect } from "react-redux";
import { setColorPicker } from "../../state/display/actions";
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
          let theme = new Theme({ primary: c.hex });
          theme.commit();
        }}
        style={{ fontFamily: "Roboto" }}
      />
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  colorPicker: state.display.colorPicker,
  primary: state.primary,
  current: state.appState.current,
});

export default connect(mapStateToProps)(ColorPicker);

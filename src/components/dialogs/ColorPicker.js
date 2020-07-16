import React from "react";
import { connect } from "react-redux";
import { setPrimary, setColorPicker } from "../../state/actions";
import { Dialog } from "@material-ui/core";
import { SketchPicker } from "react-color";

const ColorPicker = ({ dispatch, colorPicker, primary }) => {
  return (
    <Dialog
      open={colorPicker}
      onClose={() => dispatch(setColorPicker(false))}
      PaperProps={{ style: { backgroundColor: "transparent" } }}
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
    >
      <SketchPicker
        color={primary}
        onChange={(c) => dispatch(setPrimary(c.hex))}
        style={{ fontFamily: "Roboto" }}
      />
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  colorPicker: state.colorPicker,
  primary: state.primary,
});

export default connect(mapStateToProps)(ColorPicker);

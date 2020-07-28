import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setColorPicker } from "../../state/display/actions";
import { Dialog } from "@material-ui/core";
import { PhotoshopPicker } from "react-color";
import {
  setCurrentAppState,
  setPastAppStates,
} from "../../state/appState/actions";
import Theme from "../../functions/Theme";

const ColorPicker = ({ dispatch, colorPicker, primary, current, past }) => {
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    if (colorPicker) {
      setInitialState(current);
    }
  }, [colorPicker]);

  return (
    <Dialog
      open={colorPicker}
      onClose={() => dispatch(setColorPicker(false))}
      PaperProps={{ style: { backgroundColor: "transparent" } }}
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
    >
      <PhotoshopPicker
        color={primary}
        onChange={(c) => {
          let theme = new Theme({
            ...current,
            primary: c.hex,
          });
          theme.commit();
        }}
        onAccept={(c) => {
          if (current !== initialState) {
            dispatch(setPastAppStates([...past, initialState]));
          }
          dispatch(setColorPicker(false));
        }}
        style={{ fontFamily: "Roboto" }}
      />
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  colorPicker: state.display.colorPicker,
  primary: state.appState.current.primary,
  current: state.appState.current,
  past: state.appState.past,
});

export default connect(mapStateToProps)(ColorPicker);

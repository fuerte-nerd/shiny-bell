import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setColorPickerOpen } from "../../state/display/actions";
import { Box, Dialog } from "@material-ui/core";
import { PhotoshopPicker } from "react-color";
import {
  setCurrentAppState,
  setPastAppStates,
} from "../../state/appState/actions";
import Theme from "../Theme";

const ColorPicker = ({ dispatch, isOpen, current, past, section }) => {
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    if (isOpen) {
      setInitialState(current);
    }
    //eslint-disable-next-line
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(setColorPickerOpen(false))}
      PaperProps={{ style: { backgroundColor: "transparent" } }}
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
    >
      <Box style={{ fontFamily: "Roboto" }}>
        <PhotoshopPicker
          header={`Set new ${section} color...`}
          color={current[section]}
          onChange={(c) => {
            let theme = new Theme({
              ...current,
              [section]: c.hex,
            });
            theme.commit();
          }}
          onAccept={(c) => {
            if (current !== initialState) {
              dispatch(setPastAppStates([...past, initialState]));
            }
            dispatch(setColorPickerOpen(false));
          }}
          onCancel={() => {
            if (current !== initialState) {
              dispatch(setCurrentAppState(initialState));
            }
            dispatch(setColorPickerOpen(false));
          }}
        />
      </Box>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.colorPicker.isOpen,
  section: state.display.colorPicker.section,
  current: state.appState.current,
  past: state.appState.past,
});

export default connect(mapStateToProps)(ColorPicker);

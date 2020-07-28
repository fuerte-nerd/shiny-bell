import React from "react";
import { connect } from "react-redux";
import { setColorPicker } from "../../state/display/actions";
import { setColorPickerSection } from "../../state/colorPicker/actions";
import Setting from "../Setting";
import Theme from "../../functions/Theme";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { setPastAppStates } from "../../state/appState/actions";

const Colors = ({
  dispatch,
  current,
  primary,
  secondary,
  secondaryMode,
  past,
}) => {
  const options = [
    "complement",
    "desaturate",
    "saturate",
    "darken",
    "lighten",
    "manual",
  ];

  return (
    <Setting title="Colors">
      <ListItem
        button
        onClick={() => {
          dispatch(setColorPickerSection("primary"));
          dispatch(setColorPicker(true));
        }}
      >
        <ListItemText primary="Adjust primary color" secondary={primary} />
      </ListItem>
      {secondaryMode === "manual" && (
        <ListItem
          button
          onClick={() => {
            dispatch(setColorPickerSection("secondary"));
            dispatch(setColorPicker(true));
          }}
        >
          <ListItemText
            primary="Adjust secondary color"
            secondary={secondary}
          />
        </ListItem>
      )}
      <ListItem>
        <ListItemText
          primary="Secondary color mode"
          secondary={
            secondaryMode.charAt(0).toUpperCase() + secondaryMode.substr(1)
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            onClick={() => {
              const currentIndex = options.indexOf(secondaryMode);
              let selection;
              if (currentIndex !== 0) {
                selection = options[currentIndex - 1];
              } else {
                selection = options[options.length - 1];
              }

              const theme = new Theme({
                ...current,
                secondaryColorMix: selection,
              });
              dispatch(setPastAppStates([...past, current]));
              theme.commit();
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            onClick={() => {
              const currentIndex = options.indexOf(secondaryMode);
              let selection;
              if (currentIndex !== options.length - 1) {
                selection = options[currentIndex + 1];
              } else {
                selection = options[0];
              }

              const theme = new Theme({
                ...current,
                secondaryColorMix: selection,
              });
              dispatch(setPastAppStates([...past, current]));
              theme.commit();
            }}
          >
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  primary: state.appState.current.primary,
  secondary: state.appState.current.secondary,
  secondaryMode: state.appState.current.secondaryColorMix,
  current: state.appState.current,
  past: state.appState.past,
});

export default connect(mapStateToProps)(Colors);

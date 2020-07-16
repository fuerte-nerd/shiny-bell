import React from "react";
import ColorPicker from "./dialogs/ColorPicker";
import FontPicker from "./dialogs/FontPicker";
import ThemeCode from "./dialogs/ThemeCode";

const Dialogs = () => {
  return (
    <>
      <ThemeCode />
      <FontPicker />
      <ColorPicker />
    </>
  );
};

export default Dialogs;

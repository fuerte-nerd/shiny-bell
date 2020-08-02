import React from "react";
import ColorPicker from "./dialogs/ColorPicker";
import FontSelector from "./dialogs/FontSelector";
import CategorySelector from "./dialogs/CategorySelector";
import ThemeCode from "./dialogs/ThemeCode";
import Save from "./dialogs/Save";
import Load from "./dialogs/Load";
import Rename from "./dialogs/Rename";

const Dialogs = () => {
  return (
    <>
      <ColorPicker />
      <FontSelector />
      <CategorySelector />
      <ThemeCode />
      <Save />
      <Load />
      <Rename />
    </>
  );
};

export default Dialogs;

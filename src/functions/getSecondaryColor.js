import tinycolor from "tinycolor2";

export default (color, mode = "complement") => {
  switch (mode) {
    case "complement":
      return tinycolor(color).complement().toHexString();
    default:
      return;
  }
};

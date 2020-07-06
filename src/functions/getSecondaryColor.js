import tinycolor from "tinycolor2";

export default (color, mode = "complement") => {
  switch (mode) {
    case "complement":
      return tinycolor(color).complement().toHexString();
    case "desaturate":
      return tinycolor(color).desaturate().toHexString();
    default:
      return;
  }
};

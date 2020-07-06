import tinycolor from "tinycolor2";

export default (color, mode = "complement") => {
  switch (mode) {
    case "complement":
      return tinycolor(color).complement().toHexString();
    case "desaturate":
      return tinycolor(color).desaturate(50).toHexString();
    case "saturate":
      return tinycolor(color).saturate(50).toHexString();
    case "darken":
      return tinycolor(color).darken().toHexString();
    case "lighten":
      return tinycolor(color).lighten().toHexString();
    default:
      return;
  }
};

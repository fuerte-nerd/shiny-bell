import tinycolor from "tinycolor2";
import store from "../state/store";

class Palette {
  constructor(config) {
    if (config.primary) {
      this.primary = config.primary;
    } else {
      this.primary = this.getRandomColor();
    }
    if (config.secondary) {
      this.secondary = config.secondary;
    } else {
      this.secondary = this.getSecondaryColor();
    }
  }

  getRandomColor() {
    //returns hex value

    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 255);
    };

    const rgb = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;

    return tinycolor(rgb).toHexString();
  }

  getSecondaryColor() {
    const mixMode = store.getState().settings.secondaryColorMix;

    switch (mixMode) {
      case "complement":
        return tinycolor(this.primary).complement().toHexString();
      case "desaturate":
        return tinycolor(this.primary).desaturate(50).toHexString();
      case "saturate":
        return tinycolor(this.primary).saturate(50).toHexString();
      case "darken":
        return tinycolor(this.primary).darken().toHexString();
      case "lighten":
        return tinycolor(this.primary).lighten().toHexString();
      default:
        return;
    }
  }
}

export default Palette;

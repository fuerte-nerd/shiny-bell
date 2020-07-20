import tinycolor from "tinycolor2";
import axios from "axios";
import store from "../state/store";

class Palette {
  constructor(config) {
    if (config.primary) {
      this.primaryHex = config.primary;
    } else {
      this.primaryHex = this.getRandomColor();
    }
    this.primaryName = this.getColorName(this.primaryName);
    if (config.secondary) {
      this.secondaryHex = config.secondary;
    } else {
      this.secondaryHex = this.getSecondaryColor();
    }
    this.secondaryName = this.getColorName();
  }

  getColorName(color) {
    axios
      .get(`https://api.color.pizza/v1/${color.substr(1)}`)
      .then((response) => {
        return response.data.colors[0].name;
      });
  }

  getRandomColor() {
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

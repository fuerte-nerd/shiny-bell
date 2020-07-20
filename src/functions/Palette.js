import tinycolor from "tinycolor2";
import axios from "axios";
import store from "../state/store";
import {
  setPaletteLoading,
  setPrimaryHex,
  setPrimaryName,
  setSecondaryHex,
  setSecondaryName,
  setComponentsLoading,
} from "../state/components/actions";

class Palette {
  constructor(config = null) {
    store.dispatch(setPaletteLoading(true));
    if (config && config.primary) {
      this.primaryHex = config.primary;
    } else {
      this.primaryHex = this.getRandomColor();
    }
    if (config && config.secondary) {
      this.secondaryHex = config.secondary;
    } else {
      this.secondaryHex = this.getSecondaryColor();
    }
  }

  getColorNames() {
    return new Promise((res, rej) => {
      axios
        .get(
          `https://api.color.pizza/v1/${this.primaryHex.substr(
            1
          )},${this.secondaryHex.substr(1)} `
        )
        .then((response) => {
          this.primaryName = response.data.colors[0].name;
          this.secondaryName = response.data.colors[1].name;
          res();
        });
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
        return tinycolor(this.primaryHex).complement().toHexString();
      case "desaturate":
        return tinycolor(this.primaryHex).desaturate(50).toHexString();
      case "saturate":
        return tinycolor(this.primaryHex).saturate(50).toHexString();
      case "darken":
        return tinycolor(this.primaryHex).darken().toHexString();
      case "lighten":
        return tinycolor(this.primaryHex).lighten().toHexString();
      default:
        return;
    }
  }

  deploy() {
    store.dispatch(setPrimaryHex(this.primaryHex));
    store.dispatch(setPrimaryName(this.primaryName));
    store.dispatch(setSecondaryHex(this.secondaryHex));
    store.dispatch(setSecondaryName(this.secondaryName));
    store.dispatch(setPaletteLoading(false));
    if (!store.getState().components.fonts.loading) {
      store.dispatch(setComponentsLoading(false));
    }
  }
}

export default Palette;

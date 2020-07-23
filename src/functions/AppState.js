import store from "../state/store";
import FontFaceObserver from "fontfaceobserver";
import tinycolor from "tinycolor2";
import { setComponentsLoading } from "../state/components/actions";

class AppState {
  constructor(config) {
    const state = store.getState();
    this.fontSelectionMode = "auto";
    if (!state.components.fonts.body.locked) {
      if (config.body) {
        this.body = config.body;
        this.fontSelectionMode = "manual";
      } else {
        this.body = this.fetchRandomFont("body");
      }
    } else {
      this.body = state.appState.current.body;
    }
    if (!state.components.fonts.header.locked) {
      if (config.header) {
        this.header = config.header;
        this.fontSelectionMode = "manual";
      } else {
        this.header = this.fetchRandomFont("header");
      }
    } else {
      this.header = state.appState.current.header;
    }

    if (!state.components.palette.locked) {
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
    } else {
      this.primary = state.appState.current.primary.hex;
      this.secondary = state.appState.current.secondary.hex;
    }
    this.innit();
  }

  init() {
    store.dispatch(setComponentsLoading(true));
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

  fetchRandomFont(target) {
    const fontSearchList = store.getState().libray.fonts.filter((i) => {
      return store
        .getState()
        .settings.fontCategoryFilters[target].includes(i.category);
    });
    return fontSearchList[Math.floor(Math.random() * fontSearchList.length)];
  }

  validate() {
    const validateFont = (target) => {
      return new Promise((res, rej) => {
        const f = new FontFaceObserver(this[target]);
        f.load().then(res, () => {
          if (this.fontSelectionMode === "manual") {
            store.dispatch(setComponentsLoading(false));
            rej(target);
          }
        });
      });
    };
    validateFont("body").then(validateFont("header"));
  }
}

export default AppState;

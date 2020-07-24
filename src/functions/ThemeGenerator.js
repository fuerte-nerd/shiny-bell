import store from "../state/store";
import FontFaceObserver from "fontfaceobserver";
import tinycolor from "tinycolor2";
import { setComponentsLoading } from "../state/components/actions";

class Theme {
  constructor(config) {
    const state = store.getState();

    this.primary = state.components.palette.locked
      ? state.appState.current.primary
      : this.getRandomColor();
    this.secondary = state.components.palette.locked
      ? state.appState.current.secondary
      : this.getSecondaryColor();
    this.body = state.components.fonts.body.locked
      ? state.appState.current.body
      : this.fetchRandomFont("body");
    this.header = state.components.fonts.header.locked
      ? state.appState.current.header
      : this.fetchRandomFont("header");
    this.twoFonts = state.settings.twoFonts;
    this.fontSize = state.settings.fontSize;
    this.responsiveFontSizes = state.settings.responsiveFontSizes;
    this.mode = state.settings.mode;
    this.rounding = state.settings.rounding;
    this.spacing = state.settings.spacing;
    this.buttonTextTransform = state.settings.buttonTextTransform;

    // overwrites
    const params = Object.entries(config);
    for (const [key, value] of params) {
      this[key] = value;
    }
  }

  private getRandomColor() {
    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 255);
    };

    const rgb = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;

    return tinycolor(rgb).toHexString();
  }

  private getSecondaryColor() {
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

  private fetchRandomFont(target) {
    const fontSearchList = store.getState().libray.fonts.filter((i) => {
      return store
        .getState()
        .settings.fontCategoryFilters[target].includes(i.category);
    });
    return fontSearchList[Math.floor(Math.random() * fontSearchList.length)];
  }

  validateFonts() {
    return new Promise((res1, rej1) => {
      const validateFont = (target) => {
        return new Promise((res2, rej2) => {
          const f = new FontFaceObserver(this[target].name);
          f.load().then(res2, () => {
            if (this.fontSelectionMode === "manual") {
              store.dispatch(setComponentsLoading(false));
              rej2(target);
            } else {
              validateFont();
            }
          });
        });
      };
      validateFont("body")
        .then(validateFont("header"))
        .then(res1)
        .catch((err) => rej(err));
    });
  }

  commit() {
    return new Promise((res, rej) => {
      store.dispatch(set);
    });
  }
}

export default Theme;

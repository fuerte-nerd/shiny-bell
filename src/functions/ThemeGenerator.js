import store from "../state/store";
import FontFaceObserver from "fontfaceobserver";
import tinycolor from "tinycolor2";
import { setComponentsLoading } from "../state/components/actions";

class Theme {
  constructor(config) {
    const state = store.getState();
    const { appState, components } = state;

    this.primary = components.palette.locked
      ? appState.current.primary
      : this.getRandomColor();
    this.secondary = components.palette.locked
      ? appState.current.secondary
      : this.getSecondaryColor();
    this.body = components.fonts.body.locked
      ? appState.current.body
      : this.fetchRandomFont("body");
    this.header = components.fonts.header.locked
      ? appState.current.header
      : this.fetchRandomFont("header");
    this.twoFonts = appState.current.twoFonts;
    this.fontSize = appState.current.fontSize;
    this.responsiveFontSizes = appState.current.responsiveFontSizes;
    this.mode = appState.current.mode;
    this.rounding = appState.current.rounding;
    this.spacing = appState.current.spacing;
    this.buttonTextTransform = appState.current.buttonTextTransform;

    this.bypassUndo = false;
    // overwrites
    const params = Object.entries(config);
    for (const [key, value] of params) {
      this[key] = value;
    }
  }

  getProp(key) {
    return this[key];
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
        return tinycolor(this.getProp("primary")).complement().toHexString();
      case "desaturate":
        return tinycolor(this.getProp("primary")).desaturate(50).toHexString();
      case "saturate":
        return tinycolor(this.getProp("primary")).saturate(50).toHexString();
      case "darken":
        return tinycolor(this.getProp("primary")).darken().toHexString();
      case "lighten":
        return tinycolor(this.getProp("primary")).lighten().toHexString();
      default:
        return;
    }
  }

  setFont(target, font) {
    this[target] = font;
  }

  fetchRandomFont(target) {
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
              setFont(target, this.fetchRandomFont());
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
    store.dispatch(
      setUndos([
        ...store.getState().appState.past,
        store.getState().appState.current,
      ])
    );
    store.dispatch(setCurrentAppState(this));
  }
}

export default Theme;

import store from "../state/store";
import {
  setBodyFontLoading,
  setBodyFontLoaded,
  setBodyFont,
  setHeaderFontLoading,
  setHeaderFontLoaded,
  setHeaderFont,
} from "../state/components/actions";
import FontFaceObserver from "fontfaceobserver";

class FontLoader {
  constructor(target, font = null) {
    this.fonts = store.getState().library.fonts;
    if (font) {
      this.font = font;
      this.method = "manual";
    } else {
      this.font = this.fetchRandomFont();
      this.method = "auto";
    }
    this.target = target;
    this.categories = store.getState().settings.searchCategories[target];
    this.init();
  }

  init() {
    switch (this.target) {
      case "body":
        store.dispatch(setBodyFontLoaded(false));
        store.dispatch(setBodyFontLoading(true));
        break;
      case "header":
        store.dispatch(setHeaderFontLoaded(false));
        store.dispatch(setHeaderFontLoading(true));
        break;
      default:
        break;
    }
  }

  setFont(font) {
    this.font = font;
  }

  getFont() {
    return this.font;
  }

  fetchRandomFont() {
    const fontSearchList = this.fonts.filter((i) => {
      return this.categories.includes(i.category);
    });

    return this.setFont(
      fontSearchList[Math.floor(Math.random() * fontSearchList.length)]
    );
  }

  validate() {
    return new Promise((res, rej) => {
      const fontLoader = new FontFaceObserver(this.font.themeName);
      fontLoader.load().then(res, () => {
        if (this.method === "auto") {
          this.fetchRandomFont();
          this.validate();
        } else {
          rej();
        }
      });
    });
  }

  deploy() {
    switch (this.target) {
      case "body":
        return store.dispatch(setBodyFont(this.font));
      case "header":
        return store.dispatch(setHeaderFont(this.font));
      default:
        return;
    }
  }
}

export default FontLoader;

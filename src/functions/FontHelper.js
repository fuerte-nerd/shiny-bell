import store from "../state/store";
import { setBodyFont, setHeaderFont } from "../state/components/actions";
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

    return fontSearchList[Math.floor(Math.random() * fontSearchList.length)];
  }

  validate() {
    return new Promise((res, rej) => {
      const fontLoader = new FontFaceObserver(this.font.themeName);
      fontLoader.load().then(
        () => {},
        () => {
          this.method === "auto" ? this.fetchRandomFont() : rej();
        }
      );
    });
  }

  deploy() {
    switch (this.target) {
      case "body":
        store.dispatch(setBodyFont(this.font));
    }
    // set the state!
  }
}

export default FontLoader;

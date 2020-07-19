import store from "../state/store";
import FontFaceObserver from "fontfaceobserver";

class FontLoader {
  constructor(target, font = null) {
    this.fonts = store.getState().fonts;
    if (font) {
      this.font = font;
    } else {
      this.font = fetchRandomFont();
    }
    this.target = target;
  }

  setFont(font) {
    this.font = font;
  }

  getFont() {
    return this.font;
  }

  validate() {
    return new Promise((res, rej) => {
      const fontLoader = new FontFaceObserver(this.font.themeName);
      fontLoader.load().then(
        () => {},
        () => {}
      );
    });
  }

  deploy() {
    // set the state!
  }
}

export default FontLoader;

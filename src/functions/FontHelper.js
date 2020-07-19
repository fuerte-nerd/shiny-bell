import FontFaceObserver from "fontfaceobserver";

class FontLoader {
  constructor(options) {
    this.font = options.font;
    this.target = options.target;
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

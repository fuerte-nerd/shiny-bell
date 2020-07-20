import store from "../state/store";
import {
  setBodyFontLoading,
  setBodyFontLoaded,
  setNextBodyFont,
  setCurrentBodyFont,
  setHeaderFontLoading,
  setHeaderFontLoaded,
  setNextHeaderFont
  setCurrentHeaderFont,
  setNextBodyFont,
  setNextHeaderFont,
  setCurrentBodyFont,
  setCurrentHeaderFont,
} from "../state/components/actions";
import FontFaceObserver from "fontfaceobserver";

class FontLoader {
  constructor(target, font = null) {
    this.fonts = store.getState().library.fonts;
    this.categories = store.getState().settings.fontCategoryFilters[target];
    if (font) {
      this.font = font;
      this.method = "manual";
    } else {
      this.font = this.fetchRandomFont();
      this.method = "auto";
    }
    this.target = target;
    this.init();
  }

  init() {
    switch (this.target) {
      case "body":
        store.dispatch(setNextBodyFont(this.font));
        store.dispatch(setBodyFontLoaded(false));
        store.dispatch(setBodyFontLoading(true));
        break;
      case "header":
        store.dispatch(setNextHeaderFont(this.font));
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

    return fontSearchList[Math.floor(Math.random() * fontSearchList.length)];
  }

  validate() {
    return new Promise((res, rej) => {
      const fontLoader = new FontFaceObserver(this.font.themeName);
      fontLoader.load().then(res, () => {
        if (this.method === "auto") {
          this.fetchRandomFont();
          this.validate();
        } else {
          switch (this.target) {
            case "body":
              store.dispatch(setBodyFontLoading(false));
              store.dispatch(setBodyFontLoaded(true));
              break;
            case "header":
              store.dispatch(setHeaderFontLoading(false));
              store.dispatch(setHeaderFontLoaded(true));
              break;
            default:
              break;
          }
          rej();
        }
      });
    });
  }

  deploy() {
    switch (this.target) {
      case "body":
        store.dispatch(setCurrentBodyFont(this.font));
        store.dispatch(setNextBodyFont(null))
        const bodyFontLoader = new FontFaceObserver(this.font.themeName)
        bodyFontLoader.load().then(()=>{
        store.dispatch(setBodyFontLoading(false));
        store.dispatch(setBodyFontLoaded(true));
          
        },()=>{})
        return;
      case "header":
        store.dispatch(setCurrentHeaderFont(this.font));
        store.dispatch(setHeaderFontLoading(false));
        store.dispatch(setHeaderFontLoaded(true));
        return;
      default:
        return;
    }
  }
}

export default FontLoader;

import store from "../state/store";
import {
  setBodyFontLoading,
  setBodyFontLoaded,
  setNextBodyFont,
  setCurrentBodyFont,
  setHeaderFontLoading,
  setHeaderFontLoaded,
  setNextHeaderFont,
  setCurrentHeaderFont,
  setFontsLoading,
  setComponentsLoading,
} from "../state/components/actions";
import FontFaceObserver from "fontfaceobserver";
import { setBlacklisted } from "../state/library/actions";

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
    store.dispatch(setFontsLoading(true));
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
      console.log(this.font);
      const fontLoader = new FontFaceObserver(this.font.themeName);
      fontLoader.load().then(res, () => {
        if (this.method === "auto") {
          store.dispatch(
            setBlacklisted([...store.getState().library.blacklisted, this.font])
          );
          this.setFont(this.fetchRandomFont());
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
          rej(this.font);
        }
      });
    });
  }

  deploy() {
    switch (this.target) {
      case "body":
        store.dispatch(setCurrentBodyFont(this.font));
        store.dispatch(setNextBodyFont(null));
        const bodyFontLoader = new FontFaceObserver(this.font.themeName);
        bodyFontLoader.load().then(
          () => {
            store.dispatch(setBodyFontLoading(false));
            store.dispatch(setBodyFontLoaded(true));
            if (!store.getState().components.fonts.header.isLoading) {
              store.dispatch(setFontsLoading(false));
            }
          },
          () => {}
        );
        return;
      case "header":
        store.dispatch(setCurrentHeaderFont(this.font));
        store.dispatch(setNextHeaderFont(null));
        const headerFontLoader = new FontFaceObserver(this.font.themeName);
        headerFontLoader.load().then(
          () => {
            store.dispatch(setHeaderFontLoading(false));
            store.dispatch(setHeaderFontLoaded(true));
            if (!store.getState().components.fonts.body.isLoading) {
              store.dispatch(setFontsLoading(false));
            }
          },
          () => {}
        );
        return;
      default:
        return;
    }
  }
}

export default FontLoader;

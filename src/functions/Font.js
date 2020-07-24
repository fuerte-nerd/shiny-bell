import store from "../state/store";
import {
  setBodyFontLoading,
  setBodyFontLoaded,
  setNextBodyFont,
  setHeaderFontLoading,
  setHeaderFontLoaded,
  setNextHeaderFont,
  setFontsLoading,
  setComponentsLoading,
} from "../state/components/actions";
import FontFaceObserver from "fontfaceobserver";
import { setBlacklisted } from "../state/library/actions";
import { setCurrentAppState } from "../state/appState/actions";

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
    if (!store.getState().components.fonts.loading) {
      store.dispatch(setFontsLoading(true));
    }
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
      const runValidation = () => {
        const fontLoader = new FontFaceObserver(this.font.themeName);
        fontLoader.load().then(res, () => {
          if (this.method === "auto") {
            store.dispatch(
              setBlacklisted([
                ...store.getState().library.blacklisted,
                this.font,
              ])
            );
            this.setFont(this.fetchRandomFont());
            switch (this.target) {
              case "body":
                store.dispatch(setNextBodyFont(this.font));
                break;
              case "header":
                store.dispatch(setNextHeaderFont(this.font));
                break;
              default:
                break;
            }
            runValidation();
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
            rej("Failed");
          }
        });
      };
      runValidation();
    });
  }

  deploy() {
    switch (this.target) {
      case "body":
        store.dispatch(
          setCurrentAppState({
            ...store.getState().appState.current,
            body: this.font,
          })
        );
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
        store.dispatch(
          setCurrentAppState({
            ...store.getState().appState.current,
            header: this.font,
          })
        );
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
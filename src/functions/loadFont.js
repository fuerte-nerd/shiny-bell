import FontFaceObserver from "fontfaceobserver";
import store from "../state/store";
import {
  setFontLoading,
  setFont,
  setFontPicker,
  setHeaderFont,
  setFontToValidate,
} from "../state/actions";
import getRandomFont from "./getRandomFont";

const loadFont = (font, target) => {
  const state = store.getState();

  const { randomFontSelect, fontPicker } = state;

  store.dispatch(setFontToValidate(font));

  const newFont = new FontFaceObserver(font.themeName);
  newFont.load().then(
    () => {
      switch (target) {
        case "body":
          store.dispatch(setFont(font));
          break;
        case "header":
          store.dispatch(setHeaderFont(font));
          break;
        default:
          break;
      }
      store.dispatch(setFontToValidate(null));
      return store.dispatch(setFontLoading(false));
    },
    () => {
      if (randomFontSelect) {
        switch (target) {
          case "body":
            loadFont(getRandomFont(), "body");
            break;
          case "header":
            loadFont(getRandomFont(), "header");
            break;
          default:
            break;
        }
        return store.dispatch(setFontToValidate(null));
      } else {
        store.dispatch(setFontToValidate(null));
        return store.dispatch(setFontPicker({ ...fontPicker, notFound: true }));
      }
    }
  );
};

export default loadFont;

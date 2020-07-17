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
      store.dispatch(setFontLoading(false));
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
      } else {
        store.dispatch(setFontPicker({ ...fontPicker, notFound: true }));
      }
    }
  );
  return store.dispatch(setFontToValidate(null));
};

export default loadFont;

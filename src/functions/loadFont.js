import FontFaceObserver from "fontfaceobserver";
import store from "../state/store";
import {
  setFontLoading,
  setFont,
  setFontPicker,
  setHeaderFont,
} from "../state/actions";
import getRandomFont from "./getRandomFont";

const loadFont = (font, target) => {
  const state = store.getState();

  const { randomFontSelect, fontPicker } = state;

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
          return;
      }
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
            return;
        }
      } else {
        store.dispatch(setFontPicker({ ...fontPicker, notFound: true }));
      }
    }
  );
};

export default loadFont;

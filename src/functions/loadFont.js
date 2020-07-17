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

const loadFonts = (
  targets = ["body", "header"],
  random = true,
  fontToLoad = null
) => {
  const state = store.getState();

  const { fontToValidate, randomFontSelect, fontPicker } = state;

  // prepare fonts for validation

  const fontsArr = targets.map((i) => {
    const font = random ? getRandomFont() : fontToLoad;
    return {
      target: i,
      font,
    };
  });

  store.dispatch(setFontToValidate(fontsArr));

  // validate fonts
  //
  // update fonts / request new fonts

  fontsArr.map((f) => {
    const newFont = new FontFaceObserver(f.font.themeName);
    newFont.load().then(() => {});
  });

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
      validateFontCleanup();
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
        return validateFontCleanup();
      } else {
        validateFontCleanup();
        return store.dispatch(setFontPicker({ ...fontPicker, notFound: true }));
      }
    }
  );
};

export default loadFont;

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

const loadFont = (targets, random = true) => {
  const state = store.getState();

  const { fontToValidate, randomFontSelect, fontPicker } = state;

  store.dispatch(
    setFontToValidate({
      ...fontToValidate,
      [target]: font,
    })
  );

  const validateFontCleanup = () => {
    store.dispatch(
      setFontToValidate({
        ...fontToValidate,
        [target]: null,
      })
    );
  };

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

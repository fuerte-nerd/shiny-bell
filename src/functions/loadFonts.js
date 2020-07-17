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

const loadFonts = async (
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

  await store.dispatch(
    setFontToValidate({
      enabled: true,
      fonts: fontsArr,
    })
  );

  fontsArr.map((f) => {
    const newFont = new FontFaceObserver(f.font.themeName);
    newFont.load().then(
      () => {
        switch (f.target) {
          case "body":
            store.dispatch(setFont(f.font));
            break;
          case "header":
            store.dispatch(setHeaderFont(f.font));
            break;
          default:
            break;
        }
        return store.dispatch(setFontLoading(false));
      },
      () => {
        if (random) {
          switch (f.target) {
            case "body":
              loadFonts("body");
              break;
            case "header":
              loadFonts("header");
              break;
            default:
              break;
          }
        } else {
          return store.dispatch(
            setFontPicker({ ...fontPicker, notFound: true })
          );
        }
      }
    );
  });
};
export default loadFonts;

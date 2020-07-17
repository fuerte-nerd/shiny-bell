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

  fontsArr.map(async (f, ind) => {
    const newFont = new FontFaceObserver(f.font.themeName);
    await newFont.load().then(
      () => {
        if (ind === fontsArr.length - 1) {
          fontsArr.map((i) => {
            switch (i.target) {
              case "body":
                store.dispatch(setFont(i.font));
                break;
              case "header":
                store.dispatch(setHeaderFont(i.font));
                break;
              default:
                break;
            }
            store.dispatch(setFontLoading(false));
          });
        }
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
          store.dispatch(setFontPicker({ ...fontPicker, notFound: true }));
        }
      }
    );
  });
  return store.dispatch(setFontToValidate({ enabled: false, fonts: null }));
};
export default loadFonts;

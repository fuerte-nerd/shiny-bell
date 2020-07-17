import FontFaceObserver from "fontfaceobserver";
import store from "../state/store";
import {
  setFontLoading,
  setChangeHistory,
  setFont,
  setUndo,
  setFontPicker,
  setHeaderFont,
} from "../state/actions";
import getRandomFont from "./getRandomFont";

export default (font, target) => {
  const state = store.getState();

  const { getRandomFontSelect, changeHistory, fontPicker } = state;

  const newFont = new FontFaceObserver(font);
  newFont.load().then(
    () => {
      store.dispatch(setFontLoading(false));
    },
    async () => {
      await store.dispatch(
        setChangeHistory({
          ...changeHistory,
          changes: changeHistory.changes.slice(
            0,
            changeHistory.currentPosition + 1
          ),
          currentPosition: changeHistory.changes.length - 1,
        })
      );
      if (getRandomFontSelect) {
        switch (target) {
          case "body":
            return store.dispatch(setFont(getRandomFont()));
          case "header":
            return store.dispatch(setHeaderFont(getRandomFont()));
          default:
            return;
        }
      } else {
        await store.dispatch(setUndo(true));
        switch (target) {
          case "body":
            store.dispatch(setFont(fontPicker.revertFont));
            break;
          case "header":
            store.dispatch(setHeaderFont(fontPicker.revertFont));
            break;
          default:
            break;
        }
        await store.dispatch(setUndo(false));
        store.dispatch(setFontPicker({ ...fontPicker, notFound: true }));
      }
    }
  );
};

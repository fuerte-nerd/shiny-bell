import FontFaceObserver from "fontfaceobserver";
import store from "../state/store";
import {
  setFontLoading,
  setChangeHistory,
  setFont,
  setUndo,
  setFontPicker,
} from "../state/actions";
import randomFont from "./randomFont";

export default (font) => {
  const state = store.getState();

  const { randomFontSelect, changeHistory, fontPicker } = state;

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
      if (randomFontSelect) {
        store.dispatch(setFont(randomFont));
      } else {
        await store.dispatch(setUndo(true));
        store.dispatch(setFont(fontPicker.revertFont));
        await store.dispatch(setUndo(false));
        store.dispatch(setFontPicker({ ...fontPicker, notFound: true }));
      }
    }
  );
};

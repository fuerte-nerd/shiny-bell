import store from "../state/store";

export default () => {
  const fontLib = store.getState().fonts;

  return fontLib[Math.floor(Math.random() * fontLib.length)];
};

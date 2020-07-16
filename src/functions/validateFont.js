import FontFaceObserver from "fontfaceobserver";

export default (font) => {
  return new Promise((res, rej) => {
    const newFont = new FontFaceObserver(font);
    newFont.load().then(
      () => {
        res();
      },
      () => {
        rej();
      }
    );
  });
};

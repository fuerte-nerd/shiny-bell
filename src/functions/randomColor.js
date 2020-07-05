import tinycolor from "tinycolor2";

export default () => {
  const getRandNumber = () => {
    return Math.floor(Math.random() * 255);
  };

  const color = tinycolor(
    `rgb(${getRandNumber()},${getRandNumber()}, ${getRandNumber()})`
  );

  return color.toHexString();
};

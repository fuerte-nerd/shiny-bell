import tinycolor from "tinycolor2";

class Palette {
  constructor(config) {
    if (config.primary) {
      this.primary = config.primary;
    } else {
      this.primary = this.getRandomColor();
    }
  }

  getRandomColor() {
    //returns hex value

    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 255);
    };

    const rgb = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
  }
}

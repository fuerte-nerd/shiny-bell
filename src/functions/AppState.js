import store from "../state/store";
import Font from "./Font";
import { setComponentsLoading } from "../state/components/actions";

class AppState {
  constructor(config) {
    const state = store.getState();
    if (!state.components.fonts.body.locked) {
      if (config.body) {
        this.body = new Font("body", config.body);
      } else {
        this.body = new Font("body");
      }
    } else {
      this.font = state.appState.current.body;
    }
    if (!state.components.fonts.header.locked) {
      if (config.header) {
        this.header = new Font("header", config.header);
      } else {
        this.header = new Font("header");
      }
    } else {
      this.font = state.appState.current.header;
    }

    if (!state.components.palette.locked) {
      if (config.primary) {
        this.primary = config.palette.primary;
      } else {
        this.primary = this.getRandomColor();
      }
    }
  }

  getRandomColor() {
    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 255);
    };

    const rgb = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;

    return tinycolor(rgb).toHexString();
  }
  init() {
    store.dispatch(setComponentsLoading(true));
  }

  fetchRandomFont(target) {
    const fontSearchList = this.fontLib.filter((i) => {
      return this.categories[target].includes(i.category);
    });
    return fontSearchList[Math.floor(Math.random() * fontSearchList.length)];
  }
}

export default AppState;

import store from "../state/store";

class AppState {
  constructor(config) {
    this.fontLib = store.getState().library.fonts;
    this.categories = {
      body: store.getState().settings.fontCategoryFilters.body,
      header: store.getState().settings.fontCategoryFilters.header,
    };
    if (config.fonts.body) {
      this.body = config.fonts.body;
    } else {
      this.body = this.fetchRandomFont();
    }
  }

  fetchRandomFont() {
    const fontSearchList = this.fontLib.filter((i) => {
      return this.categories.includes(i.category);
    });
    return fontSearchList[Math.floor(Math.random() * fontSearchList.length)];
  }
}

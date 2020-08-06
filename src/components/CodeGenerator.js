import store from "../state/store";

export default class CodeGenerator {
  constructor({ section }) {
    this.section = section;
    this.code = this.generateCode(this.section);
  }

  getCode() {
    return this.code;
  }

  generateCode(section) {
    let str = "";
    var t = 0;

    const addTabs = (num) => {
      t = t + num;
    };

    const ins = (text, options = {}) => {
      const { doubleLine, tab, noNewLine } = options;

      if (doubleLine) {
        str += `\n\n`;
      } else if (noNewLine) {
        //do nothing
      } else {
        str += `\n`;
      }

      if (options.hasOwnProperty("tab")) {
        addTabs(tab);
      }

      for (let x = 0; x < t; x++) {
        str += `  `;
      }

      str += text;
    };

    switch (section) {
      case "hero":
        const state = store.getState().appState.current;
        ins(`// Hero.js`, { noNewLine: true });
        ins(`import React from "react"`);
        ins(`import {`);
        ins(`Box,`, { tab: 1 });
        if (state.hero.position === "flex-start") {
          ins(`Toolbar,`);
        }
        ins(`Typography,`);
        ins(`Button,`);
        ins(`Link,`);
        ins(`Grid,`);
        ins(`} from "@material-ui/core"`, { tab: -1 });
        ins(`const Hero = () => {`, { doubleLine: true });
        ins(`return (`, { tab: 1, doubleLine: true });
        ins(`<Box`, { tab: 1 });
        ins(`minHeight="100vh"`, { tab: 1 });
        ins(`display="flex"`);
        ins(`flexDirection="column"`);
        ins(`justifyContent="${state.hero.position}"`);
        ins(`position="relative"`);
        ins(`style={{`);
        ins(`backgroundImage: url("${state.hero.img}"),`, { tab: 1 });
        ins(`backgroundSize: "cover",`);
        ins(`backgroundPosition: "center",`);
        ins(`}}`, { tab: -1 });
        ins(`>`, { tab: -1 });
        addTabs(1);
        if (state.hero.overlayColor !== "transparent") {
          ins(`{/* Overlay */}`);
          ins(`<Box`);
          ins(`position="absolute"`, { tab: 1 });
          ins(`top={0}`);
          ins(`right={0}`);
          ins(`bottom={0}`);
          ins(`left={0}`);
          ins(`bgcolor="${state.hero.overlayColor}"`);
          ins(`style={{ opacity: ${state.hero.overlayOpacity} }}`);
          ins(`/>`, { tab: -1 });
        }
        ins(`<Container>`);
        addTabs(1);
        if (state.hero.position === "flex-start") {
          ins(`<Toolbar />`);
        }
        ins(`<Box`);
        addTabs(1);
        if (state.hero.boxOverlayColor !== "transparent") {
          ins(`zIndex={5}`);
          ins(`p={2}`);
        }
        if (state.hero.position === "flex-start") {
          ins(`mt={2}`);
        }
        if (state.hero.position === "flex-end") {
          ins(`mb={8}`);
        }
        if (state.hero.alignment !== "left") {
          ins(`align="${state.hero.alignment}"`);
        }
        ins(`position="relative"`);
        ins(`borderRadius="borderRadius"`);
        ins(`>`, { tab: -1 });
        addTabs(1);
        if (state.hero.boxOverlayColor !== "transparent") {
          ins(`<Box`);
          ins(`bgcolor="${state.hero.boxOverlayColor}"`, { tab: 1 });
          ins(`position="absolute"`);
          ins(`zIndex={-5}`);
          ins(`borderRadius="borderRadius"`);
          ins(`top={0}`);
          ins(`right={0}`);
          ins(`bottom={0}`);
          ins(`left={0}`);
          if (state.hero.boxOverlayOpacity < 1) {
            ins(`style={{ opacity: ${state.hero.boxOverlayOpacity} }}`);
          }
          ins(`/>`, { tab: -1 });
        }
        return str;
      default:
        break;
    }
  }
}

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
    const ins = (text, options = {}) => {
      const { doubleLine, tabs, noNewLine } = options;

      if (doubleLine) {
        str += `\n\n`;
      } else if (noNewLine) {
        //do nothing
      } else {
        str += `\n`;
      }

      if (options.hasOwnProperty("tabs")) {
        t = tabs;
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
        ins(`Toolbar,`, { tabs: 1 });
        ins(`Box,`);
        ins(`Typography,`);
        ins(`Button,`);
        ins(`Link,`);
        ins(`Grid,`);
        ins(`} from "@material-ui/core"`, { tabs: 0 });
        ins(`const Hero = () => {`, { doubleLine: true });
        ins(`return (`, { tabs: 1, doubleLine: true });
        ins(`<Box`, { tabs: 2 });
        ins(`minHeight="100vh"`, { tabs: 3 });
        ins(`display="flex"`);
        ins(`flexDirection="column"`);
        ins(`justifyContent="${state.hero.position}"`);
        ins(`position="relative"`);
        ins(`style={{`);
        ins(`backgroundImage: url("${state.hero.img}"),`, { tabs: 4 });
        ins(`backgroundSize: "cover",`);
        ins(`backgroundPosition: "center",`);
        ins(`}}`, { tabs: 3 });
        ins(`>`, { tabs: 2 });
        return str;
      default:
        break;
    }
  }
}

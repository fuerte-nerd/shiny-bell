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
    const ins = (text, options = {}) => {
      const { doubleLine, tabs, noNewLine } = options;

      if (doubleLine) {
        str += `\n\n`;
      } else if (noNewLine) {
        //do nothing
      } else {
        str += `\n`;
      }

      if (tabs) {
        for (let x = 0; x < tabs; x++) {
          str += `  `;
        }
      }

      str += text;
      console.log(str);
    };

    switch (section) {
      case "hero":
        ins(`import React from "react"`, { noNewLine: true });
        ins(`import {`);
        ins(`Toolbar,`, { tabs: 1 });
        ins(`Box,`, { tabs: 1 });
        ins(`Typography,`, { tabs: 1 });
        ins(`Button,`, { tabs: 1 });
        ins(`Link,`, { tabs: 1 });
        ins(`Grid,`, { tabs: 1 });
        ins(`} from "@material-ui/core"`);
        ins(`const Hero = () => {`, { doubleLine: true });
        ins(`return (`, { tabs: 1, doubleLine: true });
        ins(`<Box`, { tabs: 2 });
        ins(`minHeight="100vh"`, { tabs: 3 });
        ins(`display="flex"`, { tabs: 3 });
        return str;
      default:
        break;
    }
  }
}

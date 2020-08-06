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

      if (tabs) {
        for (let x = 0; x < tabs; x++) {
          str += `&nbsp;`;
        }
      }

      str += doubleLine ? `\n\n${text}` : noNewLine ? text : `\n${text}`;
      console.log(str);
    };

    switch (section) {
      case "hero":
        ins(`import React from "react"`, { noNewLine: true });
        ins(
          `import { Toolbar, Box, Container, Typography, Button, Link, Grid } from "@material-ui/core"`
        );
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

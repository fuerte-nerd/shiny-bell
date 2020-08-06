class CodeGenerator {
  constructor({ section }) {
    this.section = section;
    this.code = this.getCode(this.section);
  }

  getCode(section) {
    let str = "";
    const tab = "   ";
    const ins = (text, { doubleLine = false, tabs = 0, noNewLine = false }) => {
      str += tab * tabs;
      str += doubleLine ? `\n\n${text}` : noNewLine ? text : `\n${text}`;
      console.log(str);
    };

    switch (section) {
      case "hero":
        ins(`import React from "React"`, { noNewLine });
        ins(
          `import { Toolbar, Box, Container, Typography, Button, Link, Grid } from "@material-ui/core"`,
          {}
        );
        ins(`const Hero = () => {`, { doubleLine: true });
        break;
      default:
        break;
    }
  }
}

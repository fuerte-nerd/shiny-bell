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
    const state = store.getState().appState.current;

    switch (section) {
      case "theme":
        ins(`// theme.js`, { noNewLine: true });
        ins(`import { createMuiTheme } from "@material-ui/core"`);
        ins(`const theme = createMuiTheme({`, {
          doubleLine: true,
        });
        ins(`palette: {`, { tab: 1 });
        ins(`primary: { main: '${state.primary}' }`, { tab: 1 });
        ins(`secondary: { main: '${state.secondary}' }`);
        ins(`},`, { tab: -1 });
        ins(`typography: {`);
        if (state.twoFonts) {
          ins(`h1: { fontFamily: '${state.header.family}' },`, { tab: 1 });
          ins(`h2: { fontFamily: '${state.header.family}' },`);
          ins(`h3: { fontFamily: '${state.header.family}' },`);
          ins(`h4: { fontFamily: '${state.header.family}' },`);
          ins(`h5: { fontFamily: '${state.header.family}' },`);
          ins(`h6: { fontFamily: '${state.header.family}' },`);
          ins(`subtitle1: { fontFamily: '${state.body.family}' },`);
          ins(`subtitle2: { fontFamily: '${state.body.family}' },`);
          ins(`body1: { fontFamily: '${state.body.family}' },`);
          ins(`body2: { fontFamily: '${state.body.family}' },`);
          ins(`button: { fontFamily: '${state.body.family}' },`);
          ins(`overline: { fontFamily: '${state.body.family}' },`);
          ins(`caption: { fontFamily: '${state.body.family}' },`);
        } else {
          ins(`fontFamily: '${state.body.family}',`);
        }
        if (state.fontSize !== 13) {
          ins(`fontSize: ${state.fontSize},`);
        }
        ins(`},`, { tab: -1 });
        break;
      case "hero":
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
        ins(`<Typography variant="h2">`);
        ins(`Welcome to your new theme!`, { tab: 1 });
        ins(`</Typography>`, { tab: -1 });
        ins(`<Typography variant="subtitle1" paragraph>`);
        ins(
          `Amet quam quod ducimus earum alias, vero Ipsam expedita excepturi nemo minima soluta quas est eaque Alias nostrum commodi deserunt`,
          { tab: 1 }
        );
        ins(`</Typography>`, { tab: -1 });
        ins(`<Box mt={2} align="inherit">`);
        ins(`<Grid`, { tab: 1 });
        ins(`container`, { tab: 1 });
        ins(`spacing={1}`);
        ins(
          `justify="${
            state.hero.alignment === "left"
              ? "flex-start"
              : state.hero.alignment === "right"
              ? "flex-end"
              : "center"
          }"`
        );
        ins(`>`, { tab: -1 });
        ins(`<Grid item>`, { tab: 1 });
        ins(`<Button`, { tab: 1 });
        ins(`variant="contained"`, { tab: 1 });
        ins(`color="primary"`);
        ins(`size="large"`);
        ins(`>`, { tab: -1 });
        ins(`Primary action`, { tab: 1 });
        ins(`</Button>`, { tab: -1 });
        ins(`</Grid>`, { tab: -1 });
        ins(`<Grid item>`);
        ins(`<Button`, { tab: 1 });
        ins(`variant="contained"`, { tab: 1 });
        ins(`color="secondary"`);
        ins(`size="large"`);
        ins(`>`, { tab: -1 });
        ins(`Secondary action`, { tab: 1 });
        ins(`</Button>`, { tab: -1 });
        ins(`</Grid>`, { tab: -1 });
        ins(`</Grid>`, { tab: -1 });
        ins(`</Box>`, { tab: -1 });
        ins(`</Box>`, { tab: -1 });
        ins(`</Container>`, { tab: -1 });
        ins(`</Box>`, { tab: -1 });
        ins(`)`, { tab: -1 });
        ins(`}`, { tab: -1 });
        ins(`export default Hero`, { doubleLine: true });
        break;
      default:
        break;
    }
    return str;
  }
}

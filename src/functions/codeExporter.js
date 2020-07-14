import store from "../state/store";

export default () => {
  const state = store.getState();

  const tab = `  `;

  let code = ``;

  // imports
  code += `import { createMuiTheme`;

  if (state.responsiveText) {
    code += `, responsiveFontSizes`;
  }

  code += ` } from "@material-ui/core"\n\n`;

  // palette
  code += `const theme = createMuiTheme({\n${tab}palette: {\n`;

  if (state.mode === "dark") {
    code += `${tab + tab}type: "dark",\n`;
  }

  code += `${tab + tab}primary: { main: "${state.primary}" },\n`;
  code += `${tab + tab}secondary: { main: "${state.secondary}" }\n`;

  code += `${tab}},\n`;
  // typography

  code += `${tab}typography: {\n`;

  if (state.twoFonts) {
    code += `${tab + tab}h1: { fontFamily: "${
      state.headerFont.themeName
    }" },\n`;
    code += `${tab + tab}h2: { fontFamily: "${
      state.headerFont.themeName
    }" },\n`;
    code += `${tab + tab}h3: { fontFamily: "${
      state.headerFont.themeName
    }" },\n`;
    code += `${tab + tab}h4: { fontFamily: "${
      state.headerFont.themeName
    }" },\n`;
    code += `${tab + tab}h5: { fontFamily: "${
      state.headerFont.themeName
    }" },\n`;
    code += `${tab + tab}h6: { fontFamily: "${
      state.headerFont.themeName
    }" },\n`;
    code += `${tab + tab}subtitle1: { fontFamily: "${
      state.font.themeName
    }" },\n`;
    code += `${tab + tab}subtitle2: { fontFamily: "${
      state.font.themeName
    }" },\n`;
    code += `${tab + tab}body1: { fontFamily: "${state.font.themeName}" },\n`;
    code += `${tab + tab}body2: { fontFamily: "${state.font.themeName}" },\n`;
    code += `${tab + tab}button: { fontFamily: "${state.font.themeName}" },\n`;
    code += `${tab + tab}overline: { fontFamily: "${
      state.font.themeName
    }" },\n`;
    code += `${tab + tab}caption: { fontFamily: "${state.font.themeName}" },\n`;
  }

  code += `${tab}},\n`;

  code += `})\n\n`;

  code += `export default `;

  if (state.responsiveText) {
    code += `responsiveFontSizes(theme)`;
  } else {
    code += `theme`;
  }

  return code;
};

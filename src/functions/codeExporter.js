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

  // body
  code += `const theme = createMuiTheme({\n${tab}palette: {\n`;

  if (state.mode === "dark") {
    code += `${tab + tab}type: "dark",\n`;
  }

  code += `${tab + tab}primary: { main: "${state.primary}" },\n`;
  code += `${tab + tab}secondary: { main: "${state.secondary}" }\n`;

  code += `${tab}}\n})\n\n`;

  code += `export default `;

  if (state.responsiveText) {
    code += `responsiveFontSizes(theme)`;
  } else {
    code += `theme`;
  }

  return code;
};

import store from "../state/store";

export default () => {
  const state = store.getState();

  let code = ``;

  // imports
  code += `import { createMuiTheme`;

  if (state.responsiveText) {
    code += `, responsiveFontSizes`;
  }

  code += ` } from "@material-ui/core"\n\n`;

  // body
  code += `const theme = createMuiTheme({
  palette: {\n`;

  if (state.mode === "dark") {
    code += `\t\ttype: "dark",\n`;
  }
  code += `}  
})`;

  code += `export default `;

  if (state.responsiveText) {
    code += `responsiveFontSizes(theme)`;
  } else {
    code += `theme`;
  }

  return code;
};

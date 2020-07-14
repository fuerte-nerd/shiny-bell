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

  code += `export default `;

  if (state.responsiveText) {
    code += `responsiveFontSizes(theme)`;
  } else {
    code += `theme`;
  }

  return code;
};

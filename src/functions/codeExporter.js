import store from "../state/store";

export default () => {
  const state = store.getState();

  let code = ``;

  // imports
  code += `import { createMuiTheme`;

  if (state.responsiveText) {
    code += `, responsiveFontSizes`;
  }

  code += ` }`;

  return code;
};

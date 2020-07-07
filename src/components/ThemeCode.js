import React from "react";
import { connect } from "react-redux";
import { setDialogs } from "../state/actions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const ThemeCode = ({
  dispatch,
  dialogs,
  font,
  mode,
  primary,
  secondary,
  spacing,
  twoFonts,
  headerFont,
}) => {
  const { themeCode } = dialogs;

  const handleClose = () => {
    dispatch(setDialogs({ ...dialogs, themeCode: false }));
  };

  const typographyCodeString = () => {
    return twoFonts
      ? `typography: {
  fontFamily: "${font.themeName}",
  h1: {
    fontFamily: "${headerFont.themeName}"
  },
  h2: {
    fontFamily: "${headerFont.themeName}"
  },
  h3: {
    fontFamily: "${headerFont.themeName}"
  },
  h4: {
    fontFamily: "${headerFont.themeName}"
  },
  h5: {
    fontFamily: "${headerFont.themeName}"
  },
  h6: {
    fontFamily: "${headerFont.themeName}"
  },
},`
      : `typography: { fontFamily: "${font.themeName}" },`;
  };

  const themeCodeString = `//theme.js
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

export default responsiveFontSizes(createMuiTheme({
  palette: {
    type: "${mode}",
    primary: {
      main: "${primary}",
    },
    secondary: {
      main: "${secondary}",
    },
  },
  ${typographyCodeString()}
  spacing: ${spacing}
})) `;

  const helmetCodeString = `//react-helmet (to fetch Google Font(s))
<Helmet>
  <link
    href={\`https://fonts.googleapis.com/css2?family=${font.linkName}&display=swap\`}
    rel="stylesheet"
  />
</Helmet>
`;

  return (
    <Dialog maxWidth="sm" fullWidth open={themeCode} onClose={handleClose}>
      <DialogTitle>Theme Code</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Here is the code you'll need to use the current theme in your project!
          <SyntaxHighlighter
            language="javascript"
            style={tomorrow}
            wrapLines
            lineProps={{ style: { whiteSpace: "pre-wrap" } }}
          >
            {themeCodeString}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            language="javascript"
            style={tomorrow}
            wrapLines
            lineProps={{ style: { whiteSpace: "pre-wrap" } }}
          >
            {helmetCodeString}
          </SyntaxHighlighter>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  dialogs: state.dialogs,
  font: state.font,
  primary: state.primary,
  secondary: state.secondary,
  mode: state.mode,
  spacing: state.spacing,
  twoFonts: state.twoFonts,
  headerFont: state.headerFont,
});

export default connect(mapStateToProps)(ThemeCode);

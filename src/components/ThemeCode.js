import React from "react";
import { connect } from "react-redux";
import { setThemeCode } from "../state/actions";
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

import AppTypography from "./AppTypography";

const ThemeCode = ({
  dispatch,
  themeCode,
  font,
  mode,
  primary,
  secondary,
  spacing,
  twoFonts,
  headerFont,
  buttonTextTransform,
  rounding,
  fontSize,
}) => {
  const handleClose = () => {
    dispatch(setThemeCode(false));
  };

  const typographyCodeString = () => {
    return twoFonts
      ? `typography: {
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
    subtitle1: {
      fontFamily: "${font.themeName}"
    },
    subtitle2: {
      fontFamily: "${font.themeName}"
    },
    body1: {
      fontFamily: "${font.themeName}"
    },
    body2: {
      fontFamily: "${font.themeName}"
    },
    button: {
      fontFamily: "${font.themeName}"
    },
    overline: {
      fontFamily: "${font.themeName}"
    },
    caption: {
      fontFamily: "${font.themeName}"
    },${fontSizeCodeString()}
  },`
      : `typography: { fontFamily: "${
          font.themeName
        }", ${fontSizeCodeString()} },`;
  };

  const fontSizeCodeString = () => {
    return fontSize !== 14 ? `\nfontSize: ${fontSize}` : ``;
  };

  const spacingCodeString = () => {
    return spacing !== 8
      ? `
  spacing: ${spacing},`
      : ``;
  };

  const overridesCodeString = () => {
    return buttonTextTransform !== "uppercase"
      ? `
  overrides: {
    MuiButton: {
      root: { textTransform: "${buttonTextTransform}"}
    }
  }`
      : "";
  };

  const roundingCodeString = () => {
    return rounding !== 4
      ? `
  shape: {
    borderRadius: ${rounding}
  },`
      : ``;
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
  ${
    typographyCodeString() +
    spacingCodeString() +
    roundingCodeString() +
    overridesCodeString()
  }
})) `;

  const helmetCodeString = () => {
    return twoFonts
      ? `//react-helmet (to fetch Google Fonts)
<Helmet>
  <link
    href={\`https://fonts.googleapis.com/css2?family=${font.linkName}&family=${headerFont.linkName}&display=swap\`}
    rel="stylesheet"
  />
</Helmet>
`
      : `//react-helmet (to fetch Google Font)
<Helmet>
  <link
    href={\`https://fonts.googleapis.com/css2?family=${font.linkName}&display=swap\`}
    rel="stylesheet"
  />
</Helmet>
`;
  };

  return (
    <Dialog maxWidth="sm" fullWidth open={themeCode} onClose={handleClose}>
      <DialogTitle disableTypography>
        <AppTypography variant="h5">Theme Code</AppTypography>
      </DialogTitle>
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
            {helmetCodeString()}
          </SyntaxHighlighter>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button style={{ fontFamily: "Roboto" }} onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  themeCode: state.themeCode,
  font: state.font,
  primary: state.primary,
  secondary: state.secondary,
  mode: state.mode,
  spacing: state.spacing,
  twoFonts: state.twoFonts,
  headerFont: state.headerFont,
  buttonTextTransform: state.buttonTextTransform,
  rounding: state.rounding,
  fontSize: state.fontSize,
});

export default connect(mapStateToProps)(ThemeCode);

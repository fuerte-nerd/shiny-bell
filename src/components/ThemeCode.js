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
import codeExporter from "../functions/codeExporter";

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
            {codeExporter()}
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

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setThemeCode } from "../../state/display/actions";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  Tooltip,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { FileCopy } from "@material-ui/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import getThemeCode from "../../scripts/getThemeCode";
import { CopyToClipboard } from "react-copy-to-clipboard";

import AppTypography from "../AppTypography";

import CodeGenerator from "../CodeGenerator";

const ThemeCode = ({
  dispatch,
  themeCode,
  current,
  font,
  twoFonts,
  headerFont,
}) => {
  const [codeSnippets, setCodeSnippets] = useState({
    hero: ``,
    theme: ``,
    helmet: ``,
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const heroCode = new CodeGenerator({ section: "hero" });
    setCodeSnippets({ ...codeSnippets, hero: heroCode.getCode() });
  }, [themeCode]);
  const handleClose = () => {
    dispatch(setThemeCode(false));
  };

  const helmetCodeString = () => {
    return twoFonts && font && headerFont
      ? `//react-helmet (to fetch Google Fonts)
<Helmet>
  <link
    href={\`https://fonts.googleapis.com/css2?family=${font.family.replace(
      / /g,
      "+"
    )}&family=${headerFont.family.replace(/ /g, "+")}&display=swap\`}
    rel="stylesheet"
  />
</Helmet>
`
      : `//react-helmet (to fetch Google Font)
<Helmet>
  <link
    href={\`https://fonts.googleapis.com/css2?family=${font.family.replace(
      / /g,
      "+"
    )}&display=swap\`}
    rel="stylesheet"
  />
</Helmet>
`;
  };

  return (
    <Dialog maxWidth="sm" fullWidth open={true} onClose={handleClose}>
      <DialogTitle disableTypography>
        <AppTypography variant="h5">Theme Code</AppTypography>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Here is the code you'll need to use the current theme in your project!
        </DialogContentText>
        <Box position="relative">
          <CopyToClipboard
            text={codeSnippets.hero}
            onCopy={() => setCopied(true)}
          >
            <Tooltip title="Copy to clipboard">
              <IconButton
                style={{
                  position: "absolute",
                  top: 10,
                  right: 20,
                  color: "white",
                }}
              >
                <FileCopy />
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
          <SyntaxHighlighter
            language="jsx"
            style={tomorrow}
            customStyle={{ height: "20rem" }}
          >
            {current ? codeSnippets.hero : ``}
          </SyntaxHighlighter>
        </Box>
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow}
          wrapLines
          lineProps={{ style: { whiteSpace: "pre-wrap" } }}
        >
          {current ? getThemeCode() : ``}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow}
          wrapLines
          lineProps={{ style: { whiteSpace: "pre-wrap" } }}
        >
          {current ? helmetCodeString() : ``}
        </SyntaxHighlighter>
      </DialogContent>
      <DialogActions>
        <Button style={{ fontFamily: "Roboto" }} onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
      <Snackbar
        open={copied}
        autoHideDuration={5000}
        onClose={() => setCopied(false)}
      >
        <Alert severity="success" style={{ fontFamily: "Roboto" }}>
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  themeCode: state.display.themeCode,
  font: state.appState.current.body,
  twoFonts: state.appState.current.twoFonts,
  headerFont: state.appState.current.header,
  current: state.appState.current,
});

export default connect(mapStateToProps)(ThemeCode);

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
import { CopyToClipboard } from "react-copy-to-clipboard";

import AppTypography from "../AppTypography";

import CodeGenerator from "../CodeGenerator";

const ThemeCode = ({ dispatch, themeCode, current }) => {
  const [codeSnippets, setCodeSnippets] = useState({
    hero: ``,
    theme: ``,
    helmet: ``,
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const hero = new CodeGenerator({ section: "hero" });
    const helmet = new CodeGenerator({ section: "helmet" });
    const theme = new CodeGenerator({ section: "theme" });
    setCodeSnippets({
      helmet: helmet.getCode(),
      hero: hero.getCode(),
      theme: theme.getCode(),
    });
    //eslint-disable-next-line
  }, [themeCode]);

  const handleClose = () => {
    dispatch(setThemeCode(false));
  };

  return (
    <Dialog maxWidth="sm" fullWidth open={themeCode} onClose={handleClose}>
      <DialogTitle disableTypography>
        <AppTypography variant="h5">Theme Code</AppTypography>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Here is the code you'll need to use the current theme in your project!
        </DialogContentText>
        <Box position="relative">
          <CopyToClipboard
            text={codeSnippets.theme}
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
            language="javascript"
            style={tomorrow}
            customStyle={{ maxHeight: "20rem" }}
          >
            {current ? codeSnippets.theme : ``}
          </SyntaxHighlighter>
        </Box>
        <Box position="relative">
          <CopyToClipboard
            text={codeSnippets.helmet}
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
            language="javascript"
            style={tomorrow}
            customStyle={{ maxHeight: "20rem" }}
          >
            {current ? codeSnippets.helmet : ``}
          </SyntaxHighlighter>
        </Box>
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
            customStyle={{ maxHeight: "20rem" }}
          >
            {current ? codeSnippets.hero : ``}
          </SyntaxHighlighter>
        </Box>
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
  current: state.appState.current,
});

export default connect(mapStateToProps)(ThemeCode);

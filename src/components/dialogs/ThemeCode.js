import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setThemeCode, setCopied } from "../../state/display/actions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import AppTypography from "../AppTypography";

import CodeSection from "../CodeSection";

import CodeGenerator from "../CodeGenerator";

const ThemeCode = ({ dispatch, themeCode, current, copied }) => {
  const [codeSnippets, setCodeSnippets] = useState({
    hero: ``,
    theme: ``,
    helmet: ``,
  });

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
    <Dialog
      maxWidth="sm"
      fullWidth
      open={themeCode}
      onClose={handleClose}
      disableScrollLock={true}
    >
      <DialogTitle disableTypography>
        <AppTypography variant="h5">Theme Code</AppTypography>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Here is the code you'll need to use the current theme in your project!
        </DialogContentText>
        <CodeSection title="The theme" code={codeSnippets.theme} />
        <CodeSection title="Helmet" code={codeSnippets.helmet} />
        <CodeSection title="The Hero" code={codeSnippets.hero} />
      </DialogContent>
      <DialogActions>
        <Button style={{ fontFamily: "Roboto" }} onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
      <Snackbar
        open={copied}
        autoHideDuration={5000}
        onClose={() => dispatch(setCopied(false))}
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
  copied: state.display.copied,
});

export default connect(mapStateToProps)(ThemeCode);

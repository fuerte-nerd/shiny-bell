import React from "react";
import { connect } from "react-redux";
import { setThemeCode } from "../../state/display/actions";
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
import getThemeCode from "../../scripts/getThemeCode";

import AppTypography from "../AppTypography";

const ThemeCode = ({
  dispatch,
  themeCode,
  current,
  font,
  twoFonts,
  headerFont,
}) => {
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

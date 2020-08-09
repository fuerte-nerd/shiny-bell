import React from "react";
import { connect } from "react-redux";
import { setCopied } from "../state/display/actions";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  AccordionActions,
  Button,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeSection = ({ dispatch, title, language = "javascript", code }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography style={{ fontFamily: "Roboto" }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          lineProps={{ style: { whiteSpace: "pre-wrap" } }}
          wrapLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </AccordionDetails>
      <AccordionActions>
        <CopyToClipboard text={code} onCopy={() => dispatch(setCopied(true))}>
          <Button style={{ fontFamily: "Roboto" }}>Copy code</Button>
        </CopyToClipboard>
      </AccordionActions>
    </Accordion>
  );
};

export default connect()(CodeSection);

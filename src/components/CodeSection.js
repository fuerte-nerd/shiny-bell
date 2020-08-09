import React from "react";
import { connect } from "react-redux";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  AccordionActions,
  Button,
} from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeSection = ({ children, title, language = "javascript", code }) => {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          lineProps={{ style: { whiteSpace: "pre-wrap" } }}
          wrapLines={true}
          customStyle={{ maxHeight: "12.5rem" }}
        >
          {code}
        </SyntaxHighlighter>
      </AccordionDetails>
      <AccordionActions>
        <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
          <Button>Copy</Button>
        </CopyToClipboard>
      </AccordionActions>
    </Accordion>
  );
};

export default connect()(CodeSection);

import React from "react";
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
        <Button></Button>
      </AccordionActions>
    </Accordion>
  );
};

export default CodeSection;

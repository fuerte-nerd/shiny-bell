import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Popover, Box, Typography } from "@material-ui/core";

const FontInfo = ({ dispatch, isOpen, section, body, header }) => {
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mouseover", (e) => {
      setMouseLocation({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return (
    <Popover
      open={isOpen}
      anchorReference="anchorPosition"
      anchorPosition={{ top: mouseLocation.y, left: mouseLocation.x }}
      style={{ pointerEvents: "none" }}
    >
      <Box p={2}>
        <Typography style={{ fontFamily: "Roboto" }}>
          {section === "body" ? body : header}
        </Typography>
      </Box>
    </Popover>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.fontInfo.isOpen,
  section: state.display.fontInfo.section,
  body: state.appState.current.body.family,
  header: state.appState.current.header.family,
});

export default connect(mapStateToProps)(FontInfo);

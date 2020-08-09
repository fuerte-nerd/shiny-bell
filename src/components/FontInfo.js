import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Popover } from "@material-ui/core";

const FontInfo = ({ isOpen, body, header }) => {
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      setMouseLocation;
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("mouseover", (e) => {
      setMouseLocation({ x: e.clientX, y: e.clientY });
    });
  }, []);
  return (
    <Popover
      anchorReference="anchorPosition"
      anchorPosition={{ top: mouseLocation.y, left: mouseLocation.x }}
    >
      Hello
    </Popover>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.display.fontInfo,
  body: state.appState.current.body.family,
  header: state.appState.current.header.family,
});

export default connect(mapStateToProps)(FontInfo);

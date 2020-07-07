import React from "react";
import { connect } from "react-redux";
import {
  set2Fonts,
  setFontSize,
  setHeaderFont,
  setFont,
} from "../../state/actions";
import Setting from "../Setting";
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  Slider,
  makeStyles,
} from "@material-ui/core";
import AppTypography from "../AppTypography";

const useStyles = makeStyles({
  label: {
    fontFamily: "Roboto",
  },
});

const Fonts = ({ dispatch, twoFonts, fontSize, bodyFont, headerFont }) => {
  const classes = useStyles();

  return (
    <Setting title="Fonts">
      <FormControlLabel
        control={
          <Switch
            onChange={() => dispatch(set2Fonts(!twoFonts))}
            checked={twoFonts}
          />
        }
        label="Two Fonts?"
        classes={{ label: classes.label }}
      />
      <Box my="10px">
        <AppTypography>Font size base</AppTypography>
        <Slider
          min={8}
          max={30}
          value={fontSize}
          valueLabelDisplay="auto"
          onChange={(e, v) => {
            dispatch(setFontSize(v));
          }}
          classes={{ valueLabel: classes.label }}
        />
        {twoFonts && (
          <Button
            onClick={() => {
              const font = bodyFont;
              const headerFont = headerFont;
              dispatch(setFont(headerFont));
              dispatch(setHeaderFont(font));
            }}
          >
            Swap fonts
          </Button>
        )}
      </Box>
    </Setting>
  );
};

const mapStateToProps = (state) => ({
  twoFonts: state.twoFonts,
  fontSize: state.fontSize,
  headerFont: state.headerFont,
  bodyFont: state.bodyFont,
});

export default connect(mapStateToProps)(Fonts);

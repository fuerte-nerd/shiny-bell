import React from "react";
import Setting from "../Setting";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";

const Locks = () => {
  return (
    <Setting title="Lock elements">
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              id="lock-font"
              onChange={handleChange}
              checked={locks.bodyFont}
            />
          }
          label={
            twoFonts
              ? `Body Font (${font.themeName})`
              : `Font (${font.themeName})`
          }
          classes={{ label: classes.label }}
        />
        {twoFonts && (
          <FormControlLabel
            control={
              <Switch
                id="lock-header-font"
                onChange={handleChange}
                checked={locks.headerFont}
              />
            }
            label={`Header font (${headerFont.themeName})`}
            classes={{ label: classes.label }}
          />
        )}
        <FormControlLabel
          control={
            <Switch
              id="lock-palette"
              onChange={handleChange}
              checked={locks.palette}
            />
          }
          label="Palette"
          classes={{ label: classes.label }}
        />
      </FormGroup>
    </Setting>
  );
};

export default Locks;

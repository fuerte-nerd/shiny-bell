import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Divider, Typography, Box } from "@material-ui/core";
import { setPrimaryColorName, setSecondaryColorName } from "../state/actions";
import Text from "./Text";
import Buttons from "./Buttons";

const Preview = ({
  dispatch,
  bodyFont,
  headerFont,
  twoFonts,
  primary,
  secondary,
  primaryColorName,
  secondaryColorName,
  backgrounds,
}) => {
  return (
    <>
      <Box mb={2} bgcolor={`transparent`}>
        <>
          <Typography variant="h1">Welcome to your new theme!</Typography>
          <Typography variant="subtitle1" paragraph>
            The {twoFonts ? `header font ` : `font `} is{" "}
            {twoFonts
              ? `${headerFont.themeName} and the body font is ${bodyFont.themeName}`
              : bodyFont.themeName}
            . The primary color is {primaryColorName} and the secondary color is{" "}
            {secondaryColorName}.
          </Typography>
          <Typography paragraph>
            Consectetur officia assumenda magni cupiditate perspiciatis
            voluptatem consequuntur? Eos veniam consequatur rem earum corrupti
            Omnis veniam iste laboriosam neque quibusdam, dolorum Eum possimus
            maiores magnam doloribus suscipit. Autem numquam numquam delectus
            magni quam et Temporibus provident optio vel labore tempora?
            Excepturi vel quis perferendis eos non. Distinctio reiciendis
            facilis debitis qui cum Aperiam ipsum nesciunt facere debitis nisi
            eos Officia doloribus ipsa ea eos quo distinctio ipsum Dolore ex
            nisi quod eos ratione natus blanditiis Voluptatem reiciendis quam
            qui expedita tempora ipsam Officia harum quia.
          </Typography>
        </>
      </Box>
      <Text />
      <Buttons />
      <Divider />
    </>
  );
};

const mapStateToProps = (state) => ({
  bodyFont: state.components.fonts.body.currentFont,
  headerFont: state.components.fonts.header.currentFont,
  twoFonts: state.settings.twoFonts,
  primaryColorName: state.components.palette.primary.name,
  secondaryColorName: state.components.palette.secondary.name,
  backgrounds: state.backgrounds,
});

export default connect(mapStateToProps)(Preview);

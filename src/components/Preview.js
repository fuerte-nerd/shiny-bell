import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Divider, Typography, Box } from "@material-ui/core";
import Text from "./Text";
import Buttons from "./Buttons";

const Preview = ({ twoFonts, primary, secondary, current }) => {
  const [colorNames, setColorNames] = useState({ primary: "", secondary: "" });

  useEffect(() => {
    axios
      .get(
        `https://api.color.pizza/v1/${primary.substr(1)},${secondary.substr(1)}`
      )
      .then((res) => {
        setColorNames({
          primary: res.data.colors[0].name,
          secondary: res.data.colors[1].name,
        });
      });
  }, [primary, secondary]);

  return current ? (
    <>
      <Box
        p={current.backgrounds.box !== "transparent" ? 4 : 0}
        bgcolor={current.backgrounds.box}
      >
        <Typography variant="h1">Welcome to your new theme!</Typography>
        <Typography variant="subtitle1" paragraph>
          The {twoFonts ? `header font ` : `font `} is{" "}
          {twoFonts
            ? `${current.header.family} and the body font is ${current.body.family}`
            : current.body.family}
          . The primary color is {colorNames.primary} and the secondary color is{" "}
          {colorNames.secondary}.
        </Typography>
        <Typography paragraph>
          Consectetur officia assumenda magni cupiditate perspiciatis voluptatem
          consequuntur? Eos veniam consequatur rem earum corrupti Omnis veniam
          iste laboriosam neque quibusdam, dolorum Eum possimus maiores magnam
          doloribus suscipit. Autem numquam numquam delectus magni quam et
          Temporibus provident optio vel labore tempora? Excepturi vel quis
          perferendis eos non. Distinctio reiciendis facilis debitis qui cum
          Aperiam ipsum nesciunt facere debitis nisi eos Officia doloribus ipsa
          ea eos quo distinctio ipsum Dolore ex nisi quod eos ratione natus
          blanditiis Voluptatem reiciendis quam qui expedita tempora ipsam
          Officia harum quia.
        </Typography>
      </Box>
      <Text />
      <Buttons />
      <Divider />
    </>
  ) : null;
};

const mapStateToProps = (state) => ({
  current: state.appState.current,
  twoFonts: state.appState.current.twoFonts,
  primary: state.appState.current.primary,
  secondary: state.appState.current.secondary,
});

export default connect(mapStateToProps)(Preview);

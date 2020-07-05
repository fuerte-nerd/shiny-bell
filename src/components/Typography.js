import React from "react";
import { connect } from "react-redux";
import { Container, Box, Typography, Button, Divider } from "@material-ui/core";

const TypographySection = ({ font }) => {
  return (
    <Box mt={3}>
      <Container>
        <Box>
          <Typography variant="overline">{font.themeName}</Typography>
        </Box>
        <Box>
          <Typography variant="h1">Header 1</Typography>
          <Typography variant="h2">Header 2</Typography>
          <Typography variant="h3">Header 3</Typography>
          <Typography variant="h4">Header 4</Typography>
          <Typography variant="h5">Header 5</Typography>
          <Typography variant="h6">Header 6</Typography>
        </Box>
        <Box py={2}>
          <Divider />
        </Box>
        <Box>
          <Typography variant="subtitle1" paragraph>
            Subtitle1. Consectetur blanditiis rerum blanditiis dolore velit. Hic
            neque provident architecto nisi dicta. Cum nam veritatis accusamus
            corporis eius. Ratione cumque vitae doloremque natus ea? Quos
            doloribus possimus voluptatibus nobis optio
          </Typography>
          <Typography variant="subtitle2" paragraph>
            Subtitle2. Consectetur blanditiis rerum blanditiis dolore velit. Hic
            neque provident architecto nisi dicta. Cum nam veritatis accusamus
            corporis eius. Ratione cumque vitae doloremque natus ea? Quos
            doloribus possimus voluptatibus nobis optio
          </Typography>
          <Typography variant="body1" paragraph>
            Body1. Consectetur blanditiis rerum blanditiis dolore velit. Hic
            neque provident architecto nisi dicta. Cum nam veritatis accusamus
            corporis eius. Ratione cumque vitae doloremque natus ea? Quos
            doloribus possimus voluptatibus nobis optio
          </Typography>
          <Typography variant="body2" paragraph>
            Body2. Consectetur blanditiis rerum blanditiis dolore velit. Hic
            neque provident architecto nisi dicta. Cum nam veritatis accusamus
            corporis eius. Ratione cumque vitae doloremque natus ea? Quos
            doloribus possimus voluptatibus nobis optio
          </Typography>
          <Typography variant="overline" paragraph>
            Overline text
          </Typography>
          <Typography variant="caption" paragraph>
            Caption text
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  font: state.font,
});

export default connect(mapStateToProps)(TypographySection);

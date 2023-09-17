import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Social from "./Social";

const Footer = () => {
  const theme = useTheme();

  const classes = {
    footer: {},
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Divider style={{ backgroundColor: theme.palette.primary.main }} />
      <Box
        sx={{
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(6),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {isMobile && <Social />}
        <Typography variant="h6" color="primary">
          © 2023 Diego Toro Reyes, Inc
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;

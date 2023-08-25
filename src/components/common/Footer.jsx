import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
// import Social from "../Social";

const Footer = () => {
  const theme = useTheme();
  const classes = {
    footer: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(6),
    },
  }
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Divider style={{ backgroundColor: theme.palette.primary.main }} />
      <Box sx={classes.footer}>
        {/* {isMobile && <Social mobile />} */}
        <Typography variant="body2" color="initial">
          © 2023 Diego Toro Reyes, Inc
        </Typography>
      </Box>
    </Container>
  );
};


export default Footer;

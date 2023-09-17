import { Container, useTheme } from "@mui/material";

const HomeContainer = ({ children, ...rest }) => {
  const theme = useTheme();
  const classes = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      paddingTop: `calc( ${theme.spacing(4)}px + ${theme.navbarHeight} ) `,
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.navbarHeight,
      },
    },
  };
  return (
    <Container sx={classes.container} {...rest}>
      {children}
    </Container>
  );
};

export default HomeContainer;

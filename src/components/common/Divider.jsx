import { useTheme } from "@mui/material";

const Divider = ({ fullWidth, width, ...rest }) => {
  const theme = useTheme();
  const classes = {
    root: {
      display: "inline",
      width: fullWidth ? "100%" : width,
      height: "1px",
      backgroundColor: theme.palette.primary.main,
    },
  };
  return <div style={classes.root} {...rest}></div>;
};

export default Divider;

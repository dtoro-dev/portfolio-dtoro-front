const Divider = ({ fullWidth, width, ...rest }) => {
  const classes = {
    root: {
      display: "inline",
      width: fullWidth ? "100%" : width,
      height: "1px",
      backgroundColor: "red",
    },
  };
  return <div style={classes.root} {...rest}></div>;
};

export default Divider;

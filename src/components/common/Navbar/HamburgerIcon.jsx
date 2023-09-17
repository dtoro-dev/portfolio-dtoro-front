import { useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
  
const HamburgerIcon = ({ isOpen, ...rest }) => {
  const theme = useTheme();
  const controls = useAnimation();
  const classes = {
    container: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      cursor: "pointer",
      padding: "2px",
    },
    line: {
      height: "3px",
      backgroundColor: theme.palette.text.primary
    },
    line1: {
      width: "35px",
      marginBottom: "7px",
    },
    line2: {
      width: "25px",
      marginBottom: "7px",
    },
    line3: {
      width: "35px",
    },
  };

  useEffect(() => {
    if (isOpen) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [isOpen, controls]);
  return (
    <motion.div style={classes.container} {...rest}>
      <motion.div
        style={{ ...classes.line, ...classes.line1 }}
        variants={{
          initial: { rotate: 0, y: 0 },
          animate: { rotate: 45, y: 9 },
        }}
        animate={controls}
      ></motion.div>
      <motion.div
        style={{ ...classes.line, ...classes.line2 }}
        variants={{
          initial: { x: 0, opacity: 1 },
          animate: { x: 250, opacity: 0 },
        }}
        animate={controls}
      ></motion.div>
      <motion.div
        style={{ ...classes.line, ...classes.line3 }}
        variants={{
          initial: { rotate: 0, y: 0 },
          animate: { rotate: -45, y: -9 },
        }}
        animate={controls}
      ></motion.div>
    </motion.div>
  );
};

export default HamburgerIcon;

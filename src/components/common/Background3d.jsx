import { useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import Astronaut from "../../assets/images/astronaut.gif";
import loaderContext from "../../contexts/loaderContext";

const Background3d = () => {
  const theme = useTheme();
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();

  const classes = {
    container: {
      position: "relative",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
    },
    astronaut: {
      position: "absolute",
      bottom: 0,
      left: "30%",

    },
    wrapper: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "100%",
      zIndex: -1,
    },
    hideLogo: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: "170px",
      height: "100px",
      backgroundColor: theme.palette.background.default,
    },
  };

  useEffect(() => {
    if (!isLoading) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: 3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      });
    } else {
      controls.start({ opacity: 0, y: -50 });
    }
  }, [isLoading, controls]);

  return (
    <motion.div animate={controls} style={classes.wrapper}>
      <div style={classes.container}>
        <img style={classes.astronaut} src={Astronaut} alt="Astronaut" />
      </div>
    </motion.div>
  );
};

export default Background3d;

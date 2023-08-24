
import { motion } from "framer-motion";
import React, { useContext } from "react";
import LoaderContext from "../../contexts/loaderContext";

const classes = {
  container: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3ddcf",
    zIndex: 10000,
  },
  content: {
    margin: "0 auto",
  },
};

const LoaderContainer = ({ children }) => {
  const { setIsLoading } = useContext(LoaderContext);
  return (
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: "-100vh",
      }}
      transition={{
        delay: 3.6,
        duration: 0.3,
      }}
      onAnimationComplete={(definition) => {
        setIsLoading(false);
      }}
      style={classes.container}
    >
      <div style={classes.content}>{children}</div>
    </motion.div>
  );
};

export default LoaderContainer;

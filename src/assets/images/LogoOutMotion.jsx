import { motion } from "framer-motion";
import "../styles/gritch.css";
import Logo from "./Logo";

const container = {
  hidden: {
    opacity: 1,
    scale: 1,
  },
  visible: {
    opacity: 0,
    scale: 0,
    transition: {
      delay: 3.4,
      duration: 0.3,
    },
  },
};

const LogoOutMotion = (props) => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Logo title="DToroDev" />
    </motion.div>
  );
};

export default LogoOutMotion;

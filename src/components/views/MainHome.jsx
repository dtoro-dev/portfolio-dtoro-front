import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
// import Background3d from "../common/Background3d";

const MainHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      MainHome
      {/* {!isMobile && <Background3d />} */}
    </motion.main>
  );
};

export default MainHome;

import { Box, Link } from "@mui/material";
import { motion } from "framer-motion";

const IconBtn = ({ icon, href, ...rest }) => {
  return (
    <Box
      display="inline"
      {...rest}
      component={motion.div}
      whileHover={{ scale: 1.1 }}
    >
      <Link href={href}>{icon}</Link>
    </Box>
  );
};

export default IconBtn;

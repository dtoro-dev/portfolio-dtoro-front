import { Box, Link, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useContext } from "react";
import themeContext from "../../contexts/themeContext";

const IconBtn = ({ icon: Icon, href, fontSize, ...rest }) => {
  const theme = useTheme();
  const { isDarkMode } = useContext(themeContext);

  const classes = {
    icon: {
      color: theme.palette.text.secondary,
      transition: "0.1s",
      cursor: "pointer",
      fontSize: fontSize ? `${props.fontSize}px` : "32px",
      "&:hover": {
        color: theme.palette.text.primary,
      },
    },
  };

  return (
    <Box
      display="inline"
      {...rest}
      component={motion.div}
      whileHover={{ scale: 1.1 }}
    >
      <Link href={href}>
        <Icon sx={classes.icon} />
      </Link>
    </Box>
  );
};

export default IconBtn;

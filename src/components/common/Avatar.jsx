import { useTheme } from "@mui/material";
import React from "react";
import AvatarImg from "../../assets/images/dtorodev.jpg";

const Avatar = () => {
  const theme = useTheme();
  const classes = {
    avatarImg: {
      borderRadius: "50%",
      width: "270px",
      height: "270px",
      objectFit: "cover",
      boxShadow: theme.shadows[10],
    },
  };

  return <img src={AvatarImg} alt="Diego Toro" style={classes.avatarImg} />;
};

export default Avatar;

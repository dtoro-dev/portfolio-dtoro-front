import { useTheme } from "@mui/material";
import React from "react";
import useSocial from "../../hooks/useSocial";
import IconBtn from "./IconBtn";

const Social = () => {
  const theme = useTheme();
  const { getSocial } = useSocial();
  const classes = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      position: "fixed",
      bottom: 0,
      right: 0,
      padding: theme.spacing(2),
      zIndex: 100,
    },
    mobileWrapper: {
      display: "flex",
    },
  };

  return (
    <div style={classes.mobileWrapper}>
      {getSocial().map((rrss, index) => {
        if (index !== getSocial().length - 1) {
          return (
            <IconBtn key={index} icon={rrss.icon} m={1} href={rrss.href} />
          );
        }
      })}
    </div>
  );
};

export default Social;

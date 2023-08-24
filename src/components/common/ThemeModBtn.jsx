import Fab from "@mui/material/Fab";
import { useContext } from "react";
import ThemeContext from "../../contexts/themeContext";
import { DarkModeIcon, LightModeIcon } from "./Icons";

const ThemeModBtn = () => {
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);
  
  const fab = {
    color: "primary",
    sx: {
      position: "absolute",
      bottom: 16,
      right: 16,
    },
    icon: !isDarkMode ? <LightModeIcon /> : <DarkModeIcon />,
    label: "Mode Dark / Light",
  };

  return (
    <Fab
      sx={fab.sx}
      aria-label={fab.label}
      color={fab.color}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {fab.icon}
    </Fab>
  );
};

export default ThemeModBtn;

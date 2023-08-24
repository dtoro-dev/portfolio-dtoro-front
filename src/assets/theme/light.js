import { createTheme } from "@mui/material/styles";
import { baseTheme } from "./base";

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#F6F4EB",
      paper: "#e3ddcf",
    },
    primary: {
      main: "#e3ddcf",
      contrastText: "#000",
    },
    secondary: {
      main: "#4682A9",
      contrastText: "rgb(230,230,230)",
    },
    text: {
      primary: "#000",
      secondary: "rgb(30,30,30)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  backgroundSecondary: {
    bg: "#91C8E4",
    text: "rgb(0,0,0)",
  },
  logoColor: "#91C8E4",
  ...baseTheme,
});

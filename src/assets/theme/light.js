import { createTheme } from "@mui/material/styles";
import { baseTheme } from "./base";

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#b8b195",
      paper: "#e3ddcf",
    },
    primary: {
      main: "#e3ddcf",
      contrastText: "#000",
    },
    secondary: {
      main: "#2a4259",
      contrastText: "#121c26",
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

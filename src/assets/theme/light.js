import { createTheme } from "@mui/material/styles";
import { baseTheme } from "./base";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    background: {
      paper: "#ffffff",
      default: "#e6e5e1",
    },
    primary: {
      light: "#f7e14f",
      main: "#bfab0f",
      dark: "#dec20b",
      contrastText: "#000",
    },
    secondary: {
      light: "#6f93ab",
      main: "#4088b8",
      dark: "#1f567a",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(0, 0, 0, 0.14)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
  },
  backgroundSecondary: {
    bg: "#91C8E4",
    text: "rgb(0,0,0)",
  },
  logoColor: "#91C8E4",
  ...baseTheme,
});

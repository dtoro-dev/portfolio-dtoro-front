import { createTheme } from "@mui/material/styles";
import { baseTheme } from "./base";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    background: {
      paper: "#ccede7",
      default: "#ccede7",
    },
    primary: {
      light: "#4ead9c",
      main: "#008c73",
      dark: "#09b898",
      contrastText: "#000",
    },
    secondary: {
      light: "#6f93ab",
      main: "#1f567a",
      dark: "#4088b8",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "#1f567a",
      secondary: "#008c73",
      disabled: "rgba(0, 0, 0, 0.5)",
      hint: "rgba(0, 0, 0, 0.5)",
    },
    action: {
      // active: "rgba(0, 0, 0, 0.54)",
      // hover: "rgba(0, 0, 0, 0.08)",
      // hoverOpacity: 0.08,
      // selected: "rgba(0, 0, 0, 0.14)",
      // disabled: "rgba(0, 0, 0, 0.26)",
      // disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
  },
  logoColor: "#4088b8",
  ...baseTheme,
});

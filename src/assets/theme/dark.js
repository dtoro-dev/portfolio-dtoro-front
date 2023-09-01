import { createTheme } from '@mui/material/styles';
import { baseTheme } from "./base";

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#35526e",
      default: "#121c26",
    },
    primary: {
      light: "#6f93ab",
      main: "#4088b8",
      dark: "#1f567a",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f7e14f",
      main: "#ebcd09",
      dark: "#d6be02",
      contrastText: "#000",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "#ebcd09",
      secondary: "#4088b8",
      disabled: "rgba(0, 0, 0, 0.5)",
      hint: "rgba(0, 0, 0, 0.5)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  logoColor: "#fff",
  ...baseTheme,
});

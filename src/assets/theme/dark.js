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
      light: "#ed913e",
      main: "#d9781e",
      dark: "#a3540a",
      contrastText: "#fff",
    },
    text: {
      primary: "#FFF",
      secondary: "rgb(200,200,200)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  logoColor: "#fff",
  ...baseTheme,
});

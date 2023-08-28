import { createTheme } from '@mui/material/styles';
import { baseTheme } from "./base";

export const darkTheme = createTheme({
  palette: {
    background: {
      default: "#121c26",
      paper: "#4682A9",
    },
    primary: {
      main: "#4682A9",
      contrastText: "#fff",
    },
    secondary: {
      main: "#b8b195",
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

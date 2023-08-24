import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Routing";
import { darkTheme, lightTheme } from "./assets/theme";
import ThemeModBtn from "./components/common/ThemeModBtn";
import LoaderContext from "./contexts/loaderContext";
import ThemeContext from "./contexts/themeContext";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  return (
    <Router>
      <Suspense>
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
              <CssBaseline />
              {/* <Navbar />
              <Viewer /> */}
              <Routing />
              <ThemeModBtn />
            </ThemeProvider>
          </LoaderContext.Provider>
        </ThemeContext.Provider>
      </Suspense>
    </Router>
  );
}

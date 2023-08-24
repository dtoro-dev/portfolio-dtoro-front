import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Suspense, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./assets/theme";
import Navbar from "./components/common/Navbar";
import ThemeModBtn from "./components/common/ThemeModBtn";
import Viewer from "./components/common/Viewer";
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
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Loading...</h1>
        </div>
      }
    >
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Navbar />
            <Viewer />
            <ThemeModBtn />
          </ThemeProvider>
        </LoaderContext.Provider>
      </ThemeContext.Provider>
    </Suspense>
  );
}

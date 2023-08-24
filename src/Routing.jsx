import { useMediaQuery, useTheme } from "@mui/material";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const MainHome = lazy(() => import("./components/views/MainHome"));
// const Navbar = lazy(() => import("./components/Navbar"));
// const Social = lazy(() => import("./components/Social"));
// const Footer = lazy(() => import("./components/Footer"));
const Loader = lazy(() => import("./components/common/Loader"));

const Routing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Loader />
      {/* <Navbar /> */}
      {/* {!isMobile && <Social />} */}
      <Routes>
        <Route exact path="/" element={<MainHome />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default Routing;

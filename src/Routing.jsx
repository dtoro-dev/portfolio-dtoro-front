import { useMediaQuery, useTheme } from "@mui/material";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import FabList from "./components/common/FabList";
import useSocial from "./hooks/useSocial";

const MainHome = lazy(() => import("./components/views/MainHome"));
const Navbar = lazy(() => import("./components/common/Navbar"));
const Footer = lazy(() => import("./components/common/Footer"));
const Loader = lazy(() => import("./components/common/Loader"));

const Routing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { getSocial } = useSocial();

  return (
    <>
      <Loader />
      <Navbar />
      {!isMobile && <FabList display={getSocial()} />}
      <Routes>
        <Route exact path="/" element={<MainHome />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;

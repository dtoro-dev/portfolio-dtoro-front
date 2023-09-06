import { useMediaQuery, useTheme } from "@mui/material";
import { lazy, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import FabList from "./components/common/FabList";
import {
  ClassIcon,
  DarkModeIcon,
  EmailIcon,
  GitHubIcon,
  LightModeIcon,
  LinkedInIcon,
  WhatsAppIcon
} from "./components/common/Icons";
import ThemeContext from "./contexts/themeContext";

const MainHome = lazy(() => import("./components/views/MainHome"));
const Navbar = lazy(() => import("./components/common/Navbar"));
const Footer = lazy(() => import("./components/common/Footer"));
const Loader = lazy(() => import("./components/common/Loader"));

const Routing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const social = [
    {
      label: "Github",
      color: "primary",
      icon: <GitHubIcon />,
      href: "https://github.com/dtoro-dev",
    },
    {
      label: "LinkedIn",
      color: "primary",
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/diego-toro-reyes-7145ba136",
    },
    {
      label: "Platzi",
      color: "primary",
      icon: <ClassIcon />,
      href: "https://platzi.com/p/DToroDev/",
    },
    {
      label: "Email",
      color: "primary",
      icon: <EmailIcon />,
      href: "mailto:dtoro.a.s@gmail.com",
    },
    {
      label: "Whatsapp",
      color: "primary",
      icon: <WhatsAppIcon />,
      href: "https://wa.me/56966020227",
    },
    {
      label: "Mode Dark / Light",
      color: "primary",
      icon: !isDarkMode ? <LightModeIcon /> : <DarkModeIcon />,
      onClick: () => setIsDarkMode(!isDarkMode),
    },
  ];

  return (
    <>
      <Loader />
      <Navbar />
      {!isMobile && <FabList display={social} />}
      <Routes>
        <Route exact path="/" element={<MainHome />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;

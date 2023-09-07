import { useContext } from "react";
import {
  ClassIcon,
  DarkModeIcon,
  EmailIcon,
  GitHubIcon,
  LightModeIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "../components/common/Icons";
import themeContext from "../contexts/themeContext";

const useSocial = () => {
  const { isDarkMode, setIsDarkMode } = useContext(themeContext);

  const getSocial = () => [
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

  return { getSocial };
};

export default useSocial;

import { Tab, Tabs, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Events } from "react-scroll";
import sections from "../../../api/menu.json";
import LoaderContext from "../../../contexts/loaderContext";
import ThemeContext from "../../../contexts/themeContext";
import LangSelector from "./LangSelector";

const Menu = ({ homeIsActive }) => {
  const theme = useTheme();
  const [value, setValue] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { isLoading } = useContext(LoaderContext);
  const { isDarkMode} = useContext(ThemeContext)
  const controls = useAnimation();
  const { t } = useTranslation();
  const classes = {
    tabs: {
      marginRight: theme.spacing(4),
    },
    navMenuItem: {
      marginRight: theme.spacing(1),
    },
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      setIsScrolling(true);
    });

    Events.scrollEvent.register("end", (to, element) => {
      setIsScrolling(false);
    });
  });

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 0.3 },
      }));
    } else {
      controls.start({ opacity: 0, y: -5 });
    }
  }, [isLoading, controls]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (homeIsActive) {
      setValue(false);
    }
  }, [homeIsActive]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tabs
        sx={classes.tabs}
        variant="fullWidth"
        TabIndicatorProps={{ children: <span /> }}
        value={value}
        onChange={handleChange}
      >
        {sections.map((section, index) => (
          <motion.div key={index} custom={index} animate={controls}>
            <Tab
              disableRipple
              sx={{
                transition: ".5s",
                color: theme.palette.secondary,
                "&:hover": {
                  color: theme.palette.primary,
                },
              }}
              // custom={index}
              // animate={controls}
              to={section.to}
              label={t(section.label)}
            />
          </motion.div>
        ))}
        <motion.div custom={7} animate={controls}>
          <LangSelector style={{ marginLeft: "32px" }} />
        </motion.div>
      </Tabs>
    </div>
  );
};

export default Menu;

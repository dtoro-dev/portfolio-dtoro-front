import { Button, Link as MuiLink, Tab, Tabs, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { forwardRef, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Events, Link } from "react-scroll";
import sections from "../../../api/sections";
import LoaderContext from "../../../contexts/loaderContext";
import LangSelector from "./LangSelector";

const smoothScrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};

const AnimatedLink = forwardRef((props, ref) => (
  <motion.div ref={ref} custom={props.custom} animate={props.animate}>
    <Link {...smoothScrollProps} {...props} />
  </motion.div>
));

const Menu = ({ homeIsActive }) => {
  const theme = useTheme();
  const { isLoading } = useContext(LoaderContext);
  const [value, setValue] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const controls = useAnimation();
  const { t } = useTranslation();
  const classes = {
    wrapper: {
      display: "flex",
      alignItems: "center",
    },
    tabs: {
      marginRight: theme.spacing(4),
      indicator: {
        "& > span": {
          maxWidth: 20,
        },
      },
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

  const spyHandleChange = (index) => {
    if (!isScrolling) {
      setValue(index);
    }
  };

  useEffect(() => {
    if (homeIsActive) {
      setValue(false);
    }
  }, [homeIsActive]);

  return (
    <div style={classes.wrapper}>
      <Tabs
        style={classes.tabs}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        TabIndicatorProps={{ children: <span /> }}
      >
        {sections.map((section, index) => {
          if (index === 0) {
            return (
              <motion.div key={index} custom={index} animate={controls}>
                <Tab
                  key={index}
                  component={AnimatedLink}
                  custom={index}
                  animate={controls}
                  to={section.to}
                  label={t(section.label)}
                  onSetActive={() => spyHandleChange(index)}
                  onSetInactive={() => spyHandleChange(false)}
                  disableRipple
                  sx={{
                    transition: ".2s",
                    minWidth: 120,
                    "&:hover": {
                      color: theme.palette.text.primary,
                    },
                  }}
                />
              </motion.div>
            );
          } else {
            return (
              <motion.div key={index} custom={index} animate={controls}>
                <Tab
                  key={index}
                  component={AnimatedLink}
                  custom={index}
                  animate={controls}
                  to={section.to}
                  label={t(section.label)}
                  onSetActive={() => spyHandleChange(index)}
                  disableRipple
                  sx={{
                    transition: ".2s",
                    minWidth: 120,
                    "&:hover": {
                      color: theme.palette.text.primary,
                    },
                  }}
                />
              </motion.div>
            );
          }
        })}
      </Tabs>
      <motion.div custom={4} animate={controls}>
        <Button
          component={MuiLink}
          href="/cv.pdf"
          target="_blank"
          variant="outlined"
          color="primary"
          underline="none"
        >
          {t("menu_resume")}
        </Button>
      </motion.div>
      <motion.div custom={5} animate={controls}>
        <LangSelector style={{ marginLeft: "32px" }} />
      </motion.div>
    </div>
  );
};

export default Menu;

import { Button, Typography, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import { Link } from "react-scroll";
import VideoLogo from "../../components/common/VideoLogo";
import loaderContext from "../../contexts/loaderContext";
import HomeContainer from "../containers/HomeContainer";

const Home = () => {
  const theme = useTheme();
  const classes = {
    subTitle: {
      marginBottom: "16px",
      fontSize: "60px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "35px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "25px",
      },
    },
  };
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 1.2 },
      }));
    } else {
      controls.start({ opacity: 0, y: 5 });
    }
  }, [isLoading, controls]);

  return (
    <HomeContainer id="home">
      <div>
         <Typography
          component={motion.div}
          animate={controls}
          custom={0}
          color="secondary"
          variant="h5"
          sx={{ marginBottom: "0px" }}
        >
          {t("home_welcome")}
          <motion.div
            style={{ display: "inline-block" }}
            animate={{ rotate: [50, 90, 50] }}
            transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
          >
            👋
          </motion.div>
          , {t("home_i")}
        </Typography>
        <motion.div animate={controls} custom={1}>
          <VideoLogo />
        </motion.div>
        <Typography
          component={motion.p}
          animate={controls}
          custom={2}
          variant="h3"
          color="secondary"
          sx={classes.subTitle}
        >
          {t("home_what_i_do")}
        </Typography>
        <Typography
          component={motion.p}
          animate={controls}
          custom={3}
          variant="body2"
          color="secondary"
          sx={{ marginBottom: "0" }}
        >
          {t("home_job")}
        </Typography>
        <Typography
          component={motion.p}
          animate={controls}
          custom={4}
          variant="body1"
          color="secondary"
          sx={{ marginBottom: "30px" }}
        >
          {t("home_location")}
        </Typography>
        <motion.div animate={controls} custom={5}>
          <Button
            // component={Link}
            spy
            smooth
            offset={0}
            duration={500}
            to="contact"
            variant="outlined"
            color="secondary"
            size="large"
          >
            {t("home_contact_btn")}
          </Button>
        </motion.div> 
      </div>
    </HomeContainer>
  );
};

export default Home;

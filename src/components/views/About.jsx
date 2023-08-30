import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Avatar from "../common/Avatar";
import Skills from "../common/Skills";
import SectionContainer from "../containers/SectionContainer";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const classes = {
    gridItemWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  
  return (
    <SectionContainer id="about" title={t("menu_about")} maxWidth="md">
      <Grid container spacing={0} alignItems="center" style={{ width: "100%" }}>
        {isMobile && (
          <Grid item xs={12} md={5} sx={classes.gridItemWrapper}>
            <Box mb={6}>
              <Avatar />
            </Box>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={7}
          sx={classes.gridItemWrapper}
          style={{ flexDirection: "column", alignItems: "space-around" }}
        >
          <Box mb={4}>
            <Typography variant="body1">{t("about_desc")}</Typography>
          </Box>
          <Skills />
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={5} sx={classes.gridItemWrapper}>
            <Avatar />
          </Grid>
        )}
      </Grid>
    </SectionContainer>
  );
};

export default About;

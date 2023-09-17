import { Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import projects from "../../../api/projects";
import Card from "../../common/ProjectsGallery/Card";
import ViewerContainer from "../../containers/ViewerContainer";

const All = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = {
    galleryContainer: {
      overflow: "visible",
      width: "100%",
      margin: "0 auto",
    },
    item: {
      overflow: "visible",
    },
  };
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(null);

  const getSelected = (id) => projects.find((elem) => elem.id === id);

  return (
    <ViewerContainer>
      <Grid container spacing={isMobile ? 3 : 0} sx={classes.galleryContainer}>
        {projects.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} mb={3} sx={{ item: classes.item }}>
            <Link to={item.github} target="_blank" style={{textDecoration: "none"}}>
              <Card
                id={item.id}
                title={item.title}
                overview={t(`projects_${item.id}_overview`)}
                backgroundImage={item.backgroundImage}
                frontImage={item.frontImage}
                technologies={item.technologies}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                hoverLabel={t("view_project_github_label_hover")}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" mt={5}>
        <Button
          spy
          smooth
          component={Link}
          offset={0}
          to="/"
          variant="contained"
          color="secondary"
          size="large"
        >
          {t("go_back_home")}
        </Button>
      </Grid>
    </ViewerContainer>
  );
};

export default All;

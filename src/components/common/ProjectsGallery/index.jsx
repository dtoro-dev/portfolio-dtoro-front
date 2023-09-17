import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import projects from "../../../api/projects";
import Card from "./Card";
import ExtendedCard from "./ExtemdedCard";

const ProjectsGallery = () => {
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
    <>
      <LayoutGroup type="crossfade">
        <Grid
          container
          spacing={isMobile ? 3 : 0}
          sx={classes.galleryContainer}
        >
          {projects.slice(0,3).map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.id}
              sx={{ item: classes.item }}
            >
              <Card
                id={item.id}
                title={item.title}
                overview={t(`projects_${item.id}_overview`)}
                backgroundImage={item.backgroundImage}
                frontImage={item.frontImage}
                technologies={item.technologies}
                onClick={() => setSelectedId(item.id)}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                hoverLabel={t("view_project_label_hover")}
              />
            </Grid>
          ))}
        </Grid>
        <AnimatePresence>
          {selectedId && (
            <ExtendedCard
              key={selectedId}
              id={selectedId}
              title={getSelected(selectedId).title}
              overview={t(`projects_${selectedId}_extended_overview`)}
              backgroundImage={getSelected(selectedId).backgroundImage}
              frontImage={getSelected(selectedId).frontImage}
              technologies={getSelected(selectedId).technologies}
              handleClose={() => setSelectedId(null)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
      {/* <Grid container justifyContent="center" mt={5}>
        <Button
          component={Link}
          offset={0}
          to="/projects/all"
          variant="contained"
          color="secondary"
          size="large"
        >
          {t("show_all_projects")}
        </Button>
      </Grid> */}
    </>
  );
};

export default ProjectsGallery;

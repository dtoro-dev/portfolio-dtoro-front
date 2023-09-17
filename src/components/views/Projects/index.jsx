import { useTranslation } from "react-i18next";
import ProjectsGallery from "../../common/ProjectsGallery";
import SectionContainer from "../../containers/SectionContainer";

const Projects = () => {
  const { t } = useTranslation();
  
  return (
    <SectionContainer id="projects" title={t('menu_projects')} maxWidth="md">
      <ProjectsGallery />
    </SectionContainer>
  );
};

export default Projects;
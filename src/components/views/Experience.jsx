import { useTranslation } from "react-i18next";
import Tabs from "../common/Tabs";
import SectionContainer from "../containers/SectionContainer";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer id="experience" title={t('menu_experience')} maxWidth="sm" padding="120" reverse>
      <Tabs />
    </SectionContainer>
  );
};

export default Experience;
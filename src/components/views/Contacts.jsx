import { useTranslation } from "react-i18next";
import MessageBox from "../common/MessageBox";
import SectionContainer from "../containers/SectionContainer";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer id="contact" title={t('menu_contact')} maxWidth="sm" reverse>
      <MessageBox />
    </SectionContainer>
  );
};

export default Contact;
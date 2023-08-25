import { Link } from "react-scroll";
import Logo from "../../../assets/images/Logo";

const Brand = ({ setHomeIsActive }) => {
  return (
    <Link
      spy
      smooth
      duration={500}
      offset={-70}
      to="home"
      onSetActive={() => setHomeIsActive(true)}
      onSetInactive={() => setHomeIsActive(false)}
      sx={{ cursor: "pointer" }}
    >
      <Logo brand title="DToroDev" />
    </Link>
  );
};

export default Brand;
